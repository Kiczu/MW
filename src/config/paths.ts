export const PATHS = {
    home: "/",
    shop: "/shop",
    about: "/about-me",
    collections: "/collections",
    contact: "/contact",
    product: (id: string | number) => `/product/${id}`,
};
