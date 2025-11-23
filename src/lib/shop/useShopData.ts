"use client";
import { useEffect, useMemo, useState } from "react";
import { storeApi } from "@/services/storeApi";
import { sortFns, SORTING_OPTION } from "./sort";
import type { StoreProduct, StoreCategory, UiProduct } from "@/types/shop";
import { mapStoreToLite } from "@/lib/api/woo";

export const useShopData = () => {
    const [allProducts, setAllProducts] = useState<StoreProduct[]>([]);
    const [products, setProducts] = useState<StoreProduct[]>([]);
    const [categories, setCategories] = useState<StoreCategory[]>([]);
    const [activeCategory, setActiveCategory] = useState<string | number>("all");
    const [productsByCategory, setProductsByCategory] = useState<Record<number, StoreProduct[]>>({});
    const [activeSort, setActiveSort] = useState(SORTING_OPTION.THE_NEWEST);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

    const toggleMenu = () => setIsFilterMenuOpen(v => !v);

    useEffect(() => {
        storeApi.getProducts().then(data => {
            setAllProducts(data);
            setProducts(data);
            setProductsByCategory(groupByCategory(data));
        }).catch(console.error);
    }, []);

    useEffect(() => {
        (async () => {
            const data = await storeApi.getCategories();
            const filtered = data.filter((c) => c.count !== 0);
            setCategories(filtered);
        })().catch(console.error);
    }, []);

    const groupByCategory = (list: StoreProduct[]) => {
        const out: Record<string | number, StoreProduct[]> = {};
        list.forEach((p: any) => p.categories?.forEach((c: any) => {
            (out[c.id] ||= []).push(p);
        }));
        return out;
    };

    const handleCategoryClick = (id: string | number) => {
        const isAll = id === "all";
        setActiveCategory(id);
        if (isAll) {
            setProducts(allProducts);
        } else {
            const key = Number(id);
            setProducts(productsByCategory[key] ?? []);
        }
    };

    const handleSelectChange = (value: typeof SORTING_OPTION[keyof typeof SORTING_OPTION]) =>
        setActiveSort(value);

    const visibleProducts: UiProduct[] = useMemo(() => {
        const lite = products.map(mapStoreToLite);
        const sort = sortFns[activeSort];
        return sort ? [...lite].sort(sort) : lite;
    }, [activeSort, products]);

    return {
        activeCategory,
        categories,
        handleCategoryClick,
        handleSelectChange,
        visibleProducts,
        isFilterMenuOpen,
        toggleMenu,
    };
};
