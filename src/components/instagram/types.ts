export type MediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export type Child = {
    id: string;
    media_type: MediaType;
    media_url: string;
    thumbnail_url?: string;
};

export type Item = {
    id: string;
    caption?: string;
    media_type: MediaType;
    media_url: string;
    permalink: string;
    thumbnail_url?: string;
    timestamp?: string;
    children?: { data: Child[] };
};
