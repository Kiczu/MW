"use client";
import { useEffect, useState } from "react";
import type { Item } from "./types";

export const useInstagramFeed = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const ctrl = new AbortController();
        (async () => {
            try {
                const res = await fetch("/api/instagram", { cache: "force-cache", signal: ctrl.signal });
                const json = await res.json();
                if (!res.ok) throw new Error(json?.error || "Request failed");
                setItems(Array.isArray(json?.items) ? json.items : []);
            } catch (e: any) {
                if (!ctrl.signal.aborted) setError(e?.message ?? "Fetch failed");
            } finally {
                if (!ctrl.signal.aborted) setLoading(false);
            }
        })();
        return () => ctrl.abort();
    }, []);

    return { items, loading, error };
};
