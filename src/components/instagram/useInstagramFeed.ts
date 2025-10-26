"use client";
import { useCallback, useEffect, useState } from "react";
import { fetchInstagramPage } from "@/lib/api/instagram";
import type { Item } from "./types";

export const useInstagramFeed = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const ctrl = new AbortController();
        (async () => {
            try {
                setError(null);
                const { items, nextCursor } = await fetchInstagramPage(
                    undefined,
                    ctrl.signal
                );
                setItems(items);
                setNextCursor(nextCursor);
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

    const hasMore = !!nextCursor;

    const loadMore = useCallback(async () => {
        if (!hasMore || loadingMore) return;
        setLoadingMore(true);
        try {
            const { items: more, nextCursor: next } = await fetchInstagramPage(
                nextCursor || undefined
            );
            setItems((prev) => {
                const map = new Map(prev.map((i) => [i.id, i]));
                for (const it of more) map.set(it.id, it);
                return Array.from(map.values());
            });
            setNextCursor(next);
        } catch (e) {
            const msg = e instanceof Error ? e.message : "Fetch failed";
            setError(msg);
        } finally {
            setLoadingMore(false);
        }
    }, [hasMore, loadingMore, nextCursor]);

    return { items, loading, error, nextCursor, hasMore, loadingMore, loadMore };
};
