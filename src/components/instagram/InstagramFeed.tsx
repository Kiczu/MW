"use client";
import {
  Box,
  Typography,
  ImageList,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PostCard from "./PostCard";
import { useInstagramFeed } from "./useInstagramFeed";

type Props = { title?: string };

const InstagramFeed = ({ title = "Na Instagramie" }: Props) => {
  const { items, loading, error } = useInstagramFeed();
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const cols = upMd ? 3 : upSm ? 2 : 1;

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        {title}
      </Typography>

      {loading && (
        <ImageList
          variant="masonry"
          cols={cols}
          gap={16}
          sx={{ m: 0, overflow: "visible" }}
        >
          {Array.from({ length: cols * 3 }).map((_, i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              height={220 + (i % 3) * 36}
              sx={{ borderRadius: 3 }}
            />
          ))}
        </ImageList>
      )}

      {!loading && !error && items.length > 0 && (
        <ImageList
          variant="masonry"
          cols={cols}
          gap={16}
          sx={{ m: 0, overflow: "visible", "& img": { borderRadius: 3 } }}
        >
          {items.map((it) => (
            <PostCard key={it.id} item={it} />
          ))}
        </ImageList>
      )}

      {!loading && (error || items.length === 0) && (
        <Typography color="text.secondary">
          {error
            ? "Nie udało się pobrać postów. Spróbuj ponownie później."
            : "Brak postów do wyświetlenia."}
        </Typography>
      )}
    </Box>
  );
};

export default InstagramFeed;
