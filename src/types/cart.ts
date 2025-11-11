export type CartProduct = { id: number; title: string; image?: string; price: number };
export type CartItemId = { productId: number; variantId?: string | number };
export type CartItem = CartItemId & { qty: number; product: CartProduct };