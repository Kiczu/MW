import type { Item } from "@/components/instagram/types";

export async function fetchInstagram(signal?: AbortSignal): Promise<Item[]> {
    const res = await fetch("/api/instagram", { cache: "force-cache", signal });
    const json = await res.json();
    if (!res.ok) throw new Error(json?.error || "Request failed");
    return Array.isArray(json?.items) ? (json.items as Item[]) : [];
}
