export type StoreImage = { src: string; alt?: string };

export type StoreCategory = {
    id: number;
    name: string;
    slug: string;
    count?: number;
};

export type StoreProduct = {
    id: number;
    name: string;
    images?: StoreImage[];
    prices: {
        price: string;
        currency_minor_unit: number;
    };
    categories?: StoreCategory[];
    short_description?: string;
    description?: string;
    attributes?: StoreAttribute[];
    total_sales?: number;
    date_created?: string;
};

export type StoreAttribute = {
    name: string;
    terms?: { name: string }[];
};

export type UiProduct = {
    id: number;
    title: string;
    price: number;
    image?: string;
    hoverImage?: string;
    category?: string;
    date_created?: string;
    total_sales?: number;
};

export type ProductDetails = UiProduct & {
    images: { src: string; alt: string }[];
    categories: string[];
    descriptionHtml: string;
    attributes: { name: string; value: string }[];
};

export type WooImage = { src: string };

export type WooCategory = {
    id: number | string;
    name: string;
    slug: string;
    count?: number;
};

export type WooProduct = {
    id: number;
    name: string;
    price: string;
    images: WooImage[];
    total_sales?: number;
    date_created?: string;
    categories: WooCategory[];
};