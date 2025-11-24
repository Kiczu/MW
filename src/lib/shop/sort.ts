import type { UiProduct } from "@/types/shop";

export const SORTING_OPTION = {
    THE_NEWEST: "THE_NEWEST",
    THE_OLDEST: "THE_OLDEST",
    PRICE_ASC: "PRICE_ASC",
    PRICE_DESC: "PRICE_DESC",
    POPULARITY: "POPULARITY",
} as const;

export type SortOption =
    (typeof SORTING_OPTION)[keyof typeof SORTING_OPTION];

export const sortFns: Record<SortOption, (a: UiProduct, b: UiProduct) => number> = {
    [SORTING_OPTION.PRICE_ASC]: (a, b) => a.price - b.price,
    [SORTING_OPTION.PRICE_DESC]: (a, b) => b.price - a.price,
    [SORTING_OPTION.POPULARITY]: (a, b) =>
        (b.total_sales ?? 0) - (a.total_sales ?? 0),
    [SORTING_OPTION.THE_OLDEST]: (a, b) =>
        new Date(a.date_created ?? 0).getTime() -
        new Date(b.date_created ?? 0).getTime(),
    [SORTING_OPTION.THE_NEWEST]: (a, b) =>
        new Date(b.date_created ?? 0).getTime() -
        new Date(a.date_created ?? 0).getTime(),
};
