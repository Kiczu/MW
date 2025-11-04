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

type CartRowProps = {
  it: {
    qty: number;
    variantId?: string | number;
    product: { id: number; title: string; image?: string; price: number };
  };
  idx: number;
  inc: (i: number) => void;
  dec: (i: number) => void;
  remove: (i: number) => void;
};

const CartRow = ({ it, idx, inc, dec, remove }: CartRowProps) => {
  const variantLabel = it.variantId
    ? ` • ${String(it.variantId).toUpperCase()}`
    : "";
  const primary = `${it.product.title}${variantLabel}`;
  const secondary = `${pln(it.product.price)} / szt.`;

  return (
    <ListItem
      secondaryAction={
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {it.qty === 1 ? (
            <IconButton
              size="small"
              color="error"
              onClick={() => remove(idx)}
              aria-label={`Usuń ${it.product.title}`}
            >
              <DeleteOutlineIcon fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              size="small"
              onClick={() => dec(idx)}
              aria-label={`Zmniejsz ilość ${it.product.title}`}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
          )}
          <Typography component="span">{it.qty}</Typography>
          <IconButton
            size="small"
            onClick={() => inc(idx)}
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
          sx={{ width: 56, height: 56 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography fontWeight={600}>{primary}</Typography>}
        secondary={
          <Typography variant="body2" color="text.secondary">
            {secondary}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default CartRow;
