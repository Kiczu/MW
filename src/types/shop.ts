import { mapStoreToLite } from "@/lib/api/woo";

export type WooImage = { src: string };
export type WooCategory = { id: number | string; name: string; slug: string; count?: number };

export type WooProduct = {
    id: number;
    name: string;
    price: string;
    images: WooImage[];
    total_sales?: number;
    date_created?: string;
    categories: WooCategory[];
};

export type UiProduct = ReturnType<typeof mapStoreToLite>;

export const mapWooToUiProduct = (p: WooProduct): UiProduct => ({
    id: p.id,
    title: p.name,
    image: p.images?.[0]?.src,
    price: Number(p.price ?? 0),
});

export type StoreProduct = {
    id: number;
    name: string;
    images?: { src: string }[];
    prices: {
        price: string;
        currency_minor_unit: number;
    };
};

export type StoreCategory = { id: number; name: string; slug: string; count?: number };