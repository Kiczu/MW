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
        overflow: "hidden", // ZAOKRĄGLENIE działa też na img
        border: "1px solid",
        borderColor: "divider",
        transition: "all ease .3s",
        boxShadow: "0px 5px 10px -5px rgba(0, 0, 0, 0.3)",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 7px 15px -2px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardActionArea
        href={item.permalink}
        target="_blank"
        rel="noopener noreferrer nofollow"
        sx={{ position: "relative" }}
      >
        <CardMedia
          component="img"
          src={imgSrc}
          alt={item.caption?.slice(0, 80) || "Instagram post"}
          loading="lazy"
          decoding="async"
          sx={{ display: "block", borderRadius: 0 }}
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
