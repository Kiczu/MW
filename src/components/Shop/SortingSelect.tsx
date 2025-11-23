"use client";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import { SORTING_OPTION } from "@/lib/shop/sort";

type Props = { value?: SORTING_OPTION; onChange?: (v: SORTING_OPTION) => void };

const SortingSelect = ({
  value = SORTING_OPTION.THE_NEWEST,
  onChange,
}: Props) => {
  const handle = (e: SelectChangeEvent) =>
    onChange?.(e.target.value as SORTING_OPTION);
  return (
    <FormControl size="small" sx={{ minWidth: 220 }}>
      <InputLabel id="sort-label">Sortowanie</InputLabel>
      <Select
        labelId="sort-label"
        label="Sortowanie"
        value={value}
        onChange={handle}
      >
        <MenuItem value={SORTING_OPTION.PRICE_DOWN}>
          Cena – od najniższej
        </MenuItem>
        <MenuItem value={SORTING_OPTION.PRICE_UP}>
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
