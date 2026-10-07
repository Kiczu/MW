"use client";
import { useState } from "react";
import { Box, ButtonBase } from "@mui/material";
import Image from "next/image";
import type { ProductDetails } from "@/types/shop";

const ProductGallery = ({ images }: { images: ProductDetails["images"] }) => {
  const [active, setActive] = useState(0);
  const current = images[active];

  if (!current) return null;

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          aspectRatio: "4 / 5",
          borderRadius: 4,
          overflow: "hidden",
          bgcolor: "background.paper",
        }}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(min-width: 900px) 58vw, 100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>
      {images.length > 1 && (
        <Box sx={{ display: "flex", gap: 1.5, mt: 1.5, flexWrap: "wrap" }}>
          {images.map((img, i) => (
            <ButtonBase
              key={img.src}
              onClick={() => setActive(i)}
              aria-label={`Zdjęcie ${i + 1} z ${images.length}`}
              aria-pressed={i === active}
              sx={{
                position: "relative",
                width: 72,
                height: 90,
                borderRadius: 2,
                overflow: "hidden",
                outline: "2px solid",
                outlineColor: i === active ? "primary.main" : "transparent",
                outlineOffset: 2,
                opacity: i === active ? 1 : 0.7,
                transition: "opacity .2s",
                "&:hover": { opacity: 1 },
              }}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="72px"
                style={{ objectFit: "cover" }}
              />
            </ButtonBase>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductGallery;
