"use client";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import CartDrawer from "@/components/Cart/CartDrawer";
import { CartItem, CartItemId, CartProduct } from "@/types/cart";
import { sameKey } from "@/lib/cart";

type CartContextType = {
  items: CartItem[];
  totalQty: number;
  subtotal: number;
  addToCart: (p: CartProduct, qty?: number, variantId?: string) => void;
  inc: (id: CartItemId) => void;
  dec: (id: CartItemId) => void;
  remove: (id: CartItemId) => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toWooLineItems: () => {
    product_id: number;
    quantity: number;
    variation_id?: number | string;
  }[];
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart:v1");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart:v1", JSON.stringify(items));
    } catch {}
  }, [items]);

  const addToCart: CartContextType["addToCart"] = (
    product,
    qty = 1,
    variantId
  ) => {
    setItems((prev) => {
      const id = { productId: product.id, variantId };

      const idx = prev.findIndex((it) => sameKey(it, id));
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }

      return [...prev, { product, qty, variantId, productId: product.id }];
    });

    setOpen(true);
  };

  const inc = useCallback((id: CartItemId) => {
    setItems((prev) =>
      prev.map((it) => (sameKey(it, id) ? { ...it, qty: it.qty + 1 } : it))
    );
  }, []);

  const dec = useCallback((id: CartItemId) => {
    setItems((prev) =>
      prev
        .map((it) =>
          sameKey(it, id) ? { ...it, qty: Math.max(0, it.qty - 1) } : it
        )
        .filter((it) => it.qty > 0)
    );
  }, []);

  const remove = useCallback((id: CartItemId) => {
    setItems((prev) => prev.filter((it) => !sameKey(it, id)));
  }, []);

  const totalQty = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((s, i) => s + i.product.price * i.qty, 0),
    [items]
  );

  const toWooLineItems: CartContextType["toWooLineItems"] = () =>
    items.map((i) => ({
      product_id: i.product.id,
      quantity: i.qty,
      ...(i.variantId ? { variation_id: i.variantId } : {}),
    }));

  const value: CartContextType = {
    items,
    totalQty,
    subtotal,
    addToCart,
    inc,
    dec,
    remove,
    isOpen,
    openCart: () => setOpen(true),
    closeCart: () => setOpen(false),
    toWooLineItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
