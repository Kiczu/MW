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

export const revalidate = 3600; // 1h

export async function GET() {
    const userId = process.env.IG_USER_ID;
    const token = process.env.IG_LONG_LIVED_TOKEN;
    const limit = process.env.IG_LIMIT || "12";

    if (!userId || !token) {
        return NextResponse.json(
            { error: "Missing IG_USER_ID or IG_LONG_LIVED_TOKEN" },
            { status: 500 }
        );
    }

    const url = new URL(`https://graph.facebook.com/v19.0/${userId}/media`);
    url.searchParams.set("fields", FIELDS);
    url.searchParams.set("access_token", token);
    url.searchParams.set("limit", limit);

    try {
        const res = await fetch(url.toString(), { next: { revalidate } });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            return NextResponse.json({ error: "Instagram API error", details: err }, { status: 502 });
        }
        const data = await res.json();
        return NextResponse.json({ items: data.data ?? [] });
    } catch (e: any) {
        return NextResponse.json({ error: "Fetch failed", message: e?.message ?? String(e) }, { status: 500 });
    }
}
