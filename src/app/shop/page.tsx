"use client";
import { Box, Container, Divider, Typography } from "@mui/material";
import ProductsGrid from "@/components/Shop/ProductsGrid";
import Filters from "@/components/Shop/Filters";
import { useShopData } from "@/lib/shop/useShopData";
import { SORTING_OPTION } from "@/lib/shop/sort";

const ShopPage = () => {
  const {
    categories,
    activeCategory,
    activeSort,
    handleCategoryClick,
    products: visibleProducts,
    isFilterMenuOpen,
    toggleMenu,
    handleSelectChange,
  } = useShopData();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
        Sklep
      </Typography>

      <Filters
        categories={categories}
        activeCategory={activeCategory}
        onCategory={handleCategoryClick}
        activeSort={activeSort}
        onSort={handleSelectChange}
        isOpen={isFilterMenuOpen}
        toggle={toggleMenu}
      />

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <ProductsGrid products={visibleProducts} />
      </Box>
    </Container>
  );
};

export default ShopPage;
