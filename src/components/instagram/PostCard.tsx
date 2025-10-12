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
    <Card elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
      <CardActionArea
        href={item.permalink}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <CardMedia
          component="img"
          src={imgSrc}
          alt={item.caption?.slice(0, 80) || "Instagram post"}
          loading="lazy"
          decoding="async"
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
          <CardContent sx={{ bgcolor: "background.paper" }}>
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
