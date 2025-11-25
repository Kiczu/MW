"use client";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import { SORTING_OPTION, SortOption } from "@/lib/shop/sort";

type Props = {
  value?: SortOption;
  onChange?: (v: SortOption) => void;
};

const SortingSelect = ({ value, onChange }: Props) => {
  const handle = (e: SelectChangeEvent<SortOption>) =>
    onChange?.(e.target.value as SortOption);

  return (
    <FormControl size="small" sx={{ minWidth: 220 }}>
      <InputLabel id="sort-label">Sortowanie</InputLabel>
      <Select
        labelId="sort-label"
        label="Sortowanie"
        value={value}
        onChange={handle}
      >
        <MenuItem value={SORTING_OPTION.PRICE_ASC}>
          Cena – od najniższej
        </MenuItem>
        <MenuItem value={SORTING_OPTION.PRICE_DESC}>
          Cena – od najwyższej
        </MenuItem>
        <MenuItem value={SORTING_OPTION.POPULARITY}>Popularność</MenuItem>
        <MenuItem value={SORTING_OPTION.THE_OLDEST}>
          Data – od najstarszej
        </MenuItem>
        <MenuItem value={SORTING_OPTION.THE_NEWEST}>
          Data – od najnowszej
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortingSelect;
