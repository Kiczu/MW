import type { CartItem, CartItemId } from "@/types/cart";

export const makeItemKey = (id: CartItemId) =>
    `${id.productId}::${id.variantId ?? ""}`;

export const keyFromItem = (it: CartItem) =>
    makeItemKey({ productId: it.product.id, variantId: it.variantId });

export const sameKey = (it: CartItem, id: CartItemId) =>
    keyFromItem(it) === makeItemKey(id);
