import type { Item } from "@/components/instagram";

export type InstagramPage = {
    items: Item[];
    nextCursor: string | null;
};

export async function fetchInstagramPage(
    after?: string,
    signal?: AbortSignal
): Promise<InstagramPage> {
    const qs = new URLSearchParams();
    if (after) qs.set("after", after);

    const url = `/api/instagram${qs.toString() ? `?${qs.toString()}` : ""}`;

    const res = await fetch(url, { cache: "no-store", signal });
    const json = await res.json();
    if (!res.ok) throw new Error(json?.error || "Request failed");

    return {
        items: Array.isArray(json?.items) ? (json.items as Item[]) : [],
        nextCursor: json?.nextCursor ?? null,
    };
}
