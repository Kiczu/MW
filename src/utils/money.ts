export const pln = (n: number) =>
    new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(n);
