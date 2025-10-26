"use client";
import { memo } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import CollectionsRounded from "@mui/icons-material/CollectionsRounded";
import type { Item } from "./types";

type Props = { item: Item };

const PostCard = ({ item }: Props) => {
  const isVideo = item.media_type === "VIDEO";
  const isCarousel = item.media_type === "CAROUSEL_ALBUM";
  const imgSrc =
    item.thumbnail_url ||
    item.media_url ||
    item.children?.data?.[0]?.media_url ||
    "";

  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        transition: "transform .18s ease, box-shadow .18s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
        },
      }}
    >
      <CardActionArea
        href={item.permalink}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Otwórz post na Instagramie"
        sx={{ position: "relative" }}
      >
        <CardMedia
          component="img"
          src={imgSrc}
          alt={item.caption?.slice(0, 80) || "Instagram post"}
          loading="lazy"
          decoding="async"
          sx={{
            display: "block",
            width: "100%",
            aspectRatio: "1 / 1", // równe kafelki
            objectFit: "cover",
            userSelect: "none",
            WebkitUserDrag: "none",
          }}
        />

        {(isVideo || isCarousel) && (
          <Stack
            direction="row"
            spacing={1}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            {isCarousel && (
              <Chip
                size="small"
                icon={<CollectionsRounded />}
                label={item.children?.data?.length || ""}
                sx={{ bgcolor: "rgba(0,0,0,0.55)", color: "#fff" }}
              />
            )}
            {isVideo && (
              <Chip
                size="small"
                icon={<PlayArrowRounded />}
                label="Video"
                sx={{ bgcolor: "rgba(0,0,0,0.55)", color: "#fff" }}
              />
            )}
          </Stack>
        )}

        {item.caption && (
          <CardContent sx={{ bgcolor: "background.paper", py: 1.25, px: 1.5 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.caption}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};

export default memo(PostCard);
