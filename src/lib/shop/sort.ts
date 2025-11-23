export enum SORTING_OPTION {
    PRICE_DOWN = "priceDown",
    PRICE_UP = "priceUp",
    POPULARITY = "popularity",
    THE_OLDEST = "dateCreatedOldest",
    THE_NEWEST = "dateCreatedNewest",
}

export const sortFns = {
    [SORTING_OPTION.PRICE_DOWN]: (a: any, b: any) => a.price - b.price,
    [SORTING_OPTION.PRICE_UP]: (a: any, b: any) => b.price - a.price,
    [SORTING_OPTION.POPULARITY]: (a: any, b: any) => (b.total_sales ?? 0) - (a.total_sales ?? 0),
    [SORTING_OPTION.THE_OLDEST]: (a: any, b: any) =>
        new Date(a.date_created ?? 0).getTime() - new Date(b.date_created ?? 0).getTime(),
    [SORTING_OPTION.THE_NEWEST]: (a: any, b: any) =>
        new Date(b.date_created ?? 0).getTime() - new Date(a.date_created ?? 0).getTime(),
};
