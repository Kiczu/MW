"use client";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import type { WooCategory } from "@/types/shop";
import SortingSelect from "./SortingSelect";
import { SORTING_OPTION } from "@/lib/shop/sort";

type Props = {
  categories: WooCategory[];
  activeCategory: string | number;
  onCategory: (id: string | number) => void;
  sorting: SORTING_OPTION;
  onSort: (s: SORTING_OPTION) => void;
  isOpen: boolean;
  toggle: () => void;
};

const Filters = ({
  categories,
  activeCategory,
  onCategory,
  sorting,
  onSort,
  isOpen,
  toggle,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!isOpen) return;
      if (ref.current && !ref.current.contains(e.target as Node)) toggle();
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [isOpen, toggle]);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
        mb: 2,
      }}
    >
      <Button variant="outlined" onClick={toggle}>
        Filtry
      </Button>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: isOpen ? "flex" : { xs: "none", sm: "flex" },
          flexWrap: "wrap",
          p: 1,
          borderRadius: 1,
        }}
      >
        <Typography variant="body2" sx={{ alignSelf: "center", mr: 1 }}>
          Kategorie:
        </Typography>
        <Chip
          key="all"
          label="Wszystko"
          onClick={() => onCategory("all")}
          color={activeCategory === "all" ? "primary" : "default"}
          variant={activeCategory === "all" ? "filled" : "outlined"}
        />

        {categories.map((c) => (
          <Chip
            key={c.id}
            label={c.name}
            onClick={() => onCategory(c.id)}
            color={activeCategory === c.id ? "primary" : "default"}
            variant={activeCategory === c.id ? "filled" : "outlined"}
          />
        ))}
      </Stack>

      <Box sx={{ ml: "auto" }}>
        <SortingSelect value={sorting} onChange={onSort} />
      </Box>
    </Box>
  );
};

export default Filters;
