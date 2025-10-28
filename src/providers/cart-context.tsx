"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { Product } from "@/types";
import CartDrawer from "@/components/CartDrawer";

export type CartItem = { product: Product; qty: number; variantId?: string };

type CartContextType = {
  items: CartItem[];
  totalQty: number;
  subtotal: number;
  addToCart: (p: Product, qty?: number, variantId?: string) => void;
  inc: (i: number) => void;
  dec: (i: number) => void;
  remove: (i: number) => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  const addToCart = (product: Product, qty = 1, variantId?: string) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => i.product.id === product.id && i.variantId === variantId
      );
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...prev, { product, qty, variantId }];
    });
    setOpen(true);
  };
  const inc = (i: number) =>
    setItems((prev) =>
      prev.map((it, idx) => (idx === i ? { ...it, qty: it.qty + 1 } : it))
    );
  const dec = (i: number) =>
    setItems((prev) =>
      prev.map((it, idx) =>
        idx === i ? { ...it, qty: Math.max(1, it.qty - 1) } : it
      )
    );
  const remove = (i: number) =>
    setItems((prev) => prev.filter((_, idx) => idx !== i));

  const totalQty = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((s, i) => s + i.product.price * i.qty, 0),
    [items]
  );

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
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      {/* globalny drawer, dostępny na każdej stronie */}
      <CartDrawer />
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
