"use client";
import {
  Box,
  Typography,
  Skeleton,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import PostCard from "./PostCard";
import { useInstagramFeed } from "./useInstagramFeed";

type Props = {
  title?: string;
  columns?: { xs?: 12 | 6; sm?: 12 | 6; md?: 12 | 6 | 4; lg?: 12 | 6 | 4 | 3 };
  spacing?: number | { xs: number; sm?: number; md?: number };
  skeletonCount?: number;
};

const InstagramFeed = ({
  title = "Na Instagramie",
  columns = { xs: 12, sm: 6, md: 4 },
  spacing = { xs: 2, sm: 3 }, // = theme.spacing(2/3)
  skeletonCount = 6,
}: Props) => {
  const { items, loading, error } = useInstagramFeed();

  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const perRow = upMd ? 3 : upSm ? 2 : 1;

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        {title}
      </Typography>

      {/* LOADING */}
      {loading && (
        <Grid container spacing={spacing}>
          {Array.from({ length: Math.max(skeletonCount, perRow * 2) }).map(
            (_, i) => (
              <Grid key={i} size={columns}>
                <Skeleton
                  variant="rounded"
                  height={260 + (i % 3) * 24}
                  sx={{ borderRadius: 2 }}
                />
              </Grid>
            )
          )}
        </Grid>
      )}

      {/* SUCCESS */}
      {!loading && !error && items.length > 0 && (
        <Grid container spacing={spacing}>
          {items.map((it) => (
            <Grid key={it.id} size={columns}>
              <PostCard item={it} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* EMPTY / ERROR */}
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
