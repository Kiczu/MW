import { NextResponse } from "next/server";

const FIELDS = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "permalink",
    "thumbnail_url",
    "timestamp",
    "children{media_type,media_url,thumbnail_url,id}",
].join(",");

export const revalidate = 300; // 5 min

type IgMediaItem = {
    id: string;
    caption?: string;
    media_type?: string;
    media_url?: string;
    permalink?: string;
    thumbnail_url?: string;
    timestamp?: string;
    children?: unknown;
};

type IgApiError = {
    code?: number;
    message?: string;
};

type IgApiResponse = {
    data?: IgMediaItem[];
    paging?: {
        cursors?: {
            after?: string;
        };
        next?: string;
    };
    error?: IgApiError;
};

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const after = searchParams.get("after") || undefined;
    const limit = searchParams.get("limit") ?? process.env.IG_LIMIT ?? "9";

    const userId = process.env.IG_USER_ID;
    const token = process.env.IG_LONG_LIVED_TOKEN;
    if (!userId || !token) {
        return NextResponse.json(
            { error: "Missing IG_USER_ID or IG_LONG_LIVED_TOKEN" },
            { status: 500 },
        );
    }

    const url = new URL(`https://graph.facebook.com/v19.0/${userId}/media`);
    url.searchParams.set("fields", FIELDS);
    url.searchParams.set("access_token", token);
    url.searchParams.set("limit", String(limit));
    if (after) url.searchParams.set("after", after);

    try {
        const res = await fetch(url.toString(), {
            next: { revalidate, tags: ["instagram-feed"] },
        });

        const json = (await res.json().catch(() => ({}))) as IgApiResponse;

        if (!res.ok) {
            const code = json.error?.code;
            const status = code === 190 ? 401 : 502;
            const message =
                code === 190
                    ? "Invalid or expired Instagram access token"
                    : "Instagram API error";

            return NextResponse.json({ error: message, details: json }, { status });
        }

        const items: IgMediaItem[] = Array.isArray(json.data) ? json.data : [];

        items.sort((a, b) => {
            const timeA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
            const timeB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
            return timeB - timeA;
        });

        const nextCursor =
            json.paging?.cursors?.after && json.paging.next
                ? json.paging.cursors.after
                : null;

        const headers =
            process.env.NODE_ENV !== "production"
                ? {
                    "Cache-Control": "no-store, no-cache, must-revalidate",
                    "CDN-Cache-Control": "no-store",
                    "Vercel-CDN-Cache-Control": "no-store",
                }
                : undefined;

        return NextResponse.json({ items, nextCursor }, { headers });
    } catch (e: unknown) {
        const message = e instanceof Error ? e.message : String(e);
        return NextResponse.json(
            { error: "Fetch failed", message },
            { status: 500 },
        );
    }
}
