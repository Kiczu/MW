import { Box, Typography } from "@mui/material";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";

const ImagePlaceholder = ({
  label,
  height = 340,
}: {
  label: string;
  height?: number | string;
}) => (
  <Box
    sx={{
      height,
      borderRadius: 4,
      border: "2px dashed",
      borderColor: "divider",
      bgcolor: "rgba(169,161,122,0.08)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      color: "text.secondary",
      textAlign: "center",
      px: 2,
    }}
  >
    <PhotoCameraOutlinedIcon />
    <Typography variant="body2">{label}</Typography>
  </Box>
);
export default ImagePlaceholder;
