"use client";
import { useEffect, useState } from "react";
import { fetchInstagram } from "@/lib/api/instagram";
import type { Item } from "./types";

export const useInstagramFeed = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const ctrl = new AbortController();

        (async () => {
            try {
                setError(null);
                const data = await fetchInstagram(ctrl.signal);
                setItems(data);
            } catch (e) {
                if (!ctrl.signal.aborted) {
                    const msg = e instanceof Error ? e.message : "Fetch failed";
                    setError(msg);
                }
            } finally {
                if (!ctrl.signal.aborted) setLoading(false);
            }
        })();

        return () => ctrl.abort();
    }, []);

    return { items, loading, error };
};
