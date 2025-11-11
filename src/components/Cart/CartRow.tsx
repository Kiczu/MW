"use client";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { pln } from "@/utils/money";
import type { CartItem } from "@/types/cart";

export type CartRowProps = {
  it: CartItem;
  onInc: () => void;
  onDec: () => void;
  onRemove: () => void;
};

const CartRow = ({ it, onInc, onDec, onRemove }: CartRowProps) => {
  const variantLabel = it.variantId
    ? ` • ${String(it.variantId).toUpperCase()}`
    : "";
  const title = `${it.product.title}${variantLabel}`;
  const price = `${pln(it.product.price)} / szt.`;

  return (
    <ListItem
      secondaryAction={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {it.qty === 1 ? (
            <IconButton
              size="small"
              color="error"
              onClick={onRemove}
              aria-label={`Usuń ${it.product.title}`}
            >
              <DeleteOutlineIcon fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              size="small"
              onClick={onDec}
              aria-label={`Zmniejsz ilość ${it.product.title}`}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
          )}
          <Typography component="span">{it.qty}</Typography>
          <IconButton
            size="small"
            onClick={onInc}
            aria-label={`Zwiększ ilość ${it.product.title}`}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>
      }
    >
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          src={it.product.image}
          alt={it.product.title}
          sx={{ width: 90, height: 90, mr: 2 }}
        />
      </ListItemAvatar>
      <ListItemText
        sx={{ pr: 6 }}
        primary={<Typography fontWeight={600}>{title}</Typography>}
        secondary={
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default CartRow;
