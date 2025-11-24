"use client";
import { useEffect, useMemo, useState } from "react";
import { storeApi } from "@/services/storeApi";
import { sortFns, SORTING_OPTION, type SortOption } from "./sort";
import type { StoreProduct, StoreCategory, UiProduct } from "@/types/shop";
import { mapStoreToLite } from "@/lib/api/woo";

export type CategoryFilter = "all" | number;

const groupByCategory = (
    list: StoreProduct[],
): Record<number, StoreProduct[]> => {
    return list.reduce<Record<number, StoreProduct[]>>((acc, product) => {
        product.categories?.forEach((category) => {
            if (!acc[category.id]) {
                acc[category.id] = [];
            }
            acc[category.id].push(product);
        });
        return acc;
    }, {});
};

export const useShopData = () => {
    const [rawProducts, setRawProducts] = useState<StoreProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<StoreProduct[]>([]);
    const [categories, setCategories] = useState<StoreCategory[]>([]);
    const [productsByCategory, setProductsByCategory] = useState<
        Record<number, StoreProduct[]>
    >({});
    const [activeCategory, setActiveCategory] =
        useState<CategoryFilter>("all");
    const [activeSort, setActiveSort] = useState<SortOption>(
        SORTING_OPTION.THE_NEWEST,
    );
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const toggleMenu = () => setIsFilterMenuOpen((v) => !v);

    useEffect(() => {
        let cancelled = false;

        const loadProducts = async () => {
            try {
                const data = await storeApi.getProducts();
                if (cancelled) return;

                setRawProducts(data);
                setFilteredProducts(data);
                setProductsByCategory(groupByCategory(data));
            } catch (err) {
                if (cancelled) return;
                console.error(err);
                setError("Nie udało się pobrać produktów.");
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        loadProducts();

        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        let cancelled = false;

        const loadCategories = async () => {
            try {
                const data = await storeApi.getCategories();
                if (cancelled) return;

                const filtered = data.filter((c) => c.count !== 0);
                setCategories(filtered);
            } catch (err) {
                if (cancelled) return;
                console.error(err);
            }
        };

        loadCategories();

        return () => {
            cancelled = true;
        };
    }, []);

    const handleCategoryClick = (id: CategoryFilter) => {
        setActiveCategory(id);

        if (id === "all") {
            setFilteredProducts(rawProducts);
            return;
        }

        const productsForCategory = productsByCategory[id] ?? [];
        setFilteredProducts(productsForCategory);
    };

    const handleSelectChange = (value: SortOption) => {
        setActiveSort(value);
    };

    const visibleProducts: UiProduct[] = useMemo(() => {
        const lite = filteredProducts.map(mapStoreToLite);
        const sort = sortFns[activeSort];
        return sort ? [...lite].sort(sort) : lite;
    }, [activeSort, filteredProducts]);

    return {
        loading,
        error,
        activeCategory,
        activeSort,
        categories,
        products: visibleProducts,
        handleCategoryClick,
        handleSelectChange,
        isFilterMenuOpen,
        toggleMenu,
    };
};
