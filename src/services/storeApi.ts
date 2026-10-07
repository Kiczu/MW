import type { StoreProduct, StoreCategory } from "@/types/shop";

const apiFetch = async <T>(path: string, init?: RequestInit): Promise<T> => {
    const res = await fetch(path, {
        ...init,
        cache: "no-store",
        headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
    return res.json() as Promise<T>;
}

export type GetProductsParams = {
    page?: number;
    perPage?: number;
    category?: number | string;
};

export const storeApi = {
    getProducts(params?: GetProductsParams) {
        const q = new URLSearchParams();
        q.set("per_page", String(params?.perPage ?? 100));
        q.set("page", String(params?.page ?? 1));
        if (params?.category != null) q.set("category", String(params.category));

        const query = q.toString();
        const url = query
            ? `/api/store/products?${query}`
            : "/api/store/products";

        return apiFetch<StoreProduct[]>(url);
    },

    getProductById(id: number) {
        return apiFetch<StoreProduct>(`/api/store/products/${id}`);
    },

    getCategories() {
        return apiFetch<StoreCategory[]>(
            `/api/store/categories?per_page=100`,
        );
    },
};
