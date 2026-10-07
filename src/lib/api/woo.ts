import type { StoreProduct, UiProduct } from "@/types/shop";

const getBaseUrl = () => {
    return process.env.NEXT_PUBLIC_WP_URL ?? process.env.WP_URL ?? "";
};

export const storeFetch = async <T>(
    path: string,
    init?: RequestInit,
): Promise<T> => {
    const base = getBaseUrl();
    if (!base) {
        throw new Error("[storeFetch] Missing NEXT_PUBLIC_WP_URL / WP_URL env");
    }

    const apiPath = path.startsWith("/") ? path : `/${path}`;
    const url = `${base.replace(/\/$/, "")}/wp-json/wc/store/v1${apiPath}`;

    const res = await fetch(url, { ...init, cache: "no-store" });
    if (!res.ok) throw new Error(`Store ${res.status}: ${await res.text()}`);
    return res.json() as Promise<T>;
};

export const mapStoreToUiProduct = (p: StoreProduct): UiProduct => {
    const minor = Number(p.prices.price ?? "0");
    const unit = p.prices.currency_minor_unit ?? 2;
    const price = minor / Math.pow(10, unit);

    return {
        id: p.id,
        title: p.name,
        price,
        image: p.images?.[0]?.src,
        total_sales: p.total_sales,
        date_created: p.date_created,
    };
};

export const mapStoreToLite = mapStoreToUiProduct;