import type { StoreProduct } from "@/types/shop";

export type StoreCategory = { id: number; name: string; slug: string; count?: number };

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(path, { ...init, cache: "no-store", headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
    return res.json() as Promise<T>;
}

export const storeApi = {
    getProducts(params?: { page?: number; per_page?: number; category?: number | string }) {
        const q = new URLSearchParams();
        q.set("per_page", String(params?.per_page ?? 100));
        q.set("page", String(params?.page ?? 1));
        if (params?.category != null) q.set("category", String(params.category));
        return apiFetch<StoreProduct[]>(`/api/store/products?${q.toString()}`);
    },
    getProductById(id: number) {
        return apiFetch<StoreProduct>(`/api/store/products/${id}`);
    },
    getCategories() {
        return apiFetch<StoreCategory[]>(`/api/store/categories?per_page=100`);
    },
};
