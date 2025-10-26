"use client";
import {
  Box,
  Typography,
  Grid,
  Skeleton,
  useMediaQuery,
  useTheme,
  Button,
  Stack,
} from "@mui/material";
import PostCard from "./PostCard";
import { useInstagramFeed } from "./useInstagramFeed";

type Props = { title?: string };

const InstagramFeed = ({ title = "Na Instagramie" }: Props) => {
  const { items, loading, error, hasMore, loadingMore, loadMore } =
    useInstagramFeed();

  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const spacing = 3;
  const cols = upMd ? 3 : upSm ? 2 : 1;
  const skeletonCount = cols * 3;

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        {title}
      </Typography>

      {/* Loading */}
      {loading && (
        <Grid container spacing={spacing}>
          {Array.from({ length: skeletonCount }).map((_, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Skeleton
                variant="rectangular"
                height={260}
                sx={{ borderRadius: 2 }}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Content */}
      {!loading && !error && items.length > 0 && (
        <>
          <Grid container spacing={spacing}>
            {items.map((it) => (
              <Grid key={it.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <PostCard item={it} />
              </Grid>
            ))}
          </Grid>

          {/* Load more */}
          {hasMore && (
            <Stack alignItems="center" sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={loadMore}
                disabled={loadingMore}
              >
                {loadingMore ? "Ładowanie..." : "Załaduj więcej"}
              </Button>
            </Stack>
          )}
        </>
      )}

      {/* Error / Empty */}
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
