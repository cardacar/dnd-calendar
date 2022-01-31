import React, { Fragment } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Search } from "@mui/icons-material";


const SearchInput = ({ handleChangeInputValue , searchInputValue}) => {

  return (
    <Fragment>
      <FormControl sx={{ m: 1, width: "100%", pb: 3 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-search">Buscar</InputLabel>
        <OutlinedInput
          id="outlined-adornment-search"
          type="text"
          value={searchInputValue}
          onChange={(e)=>handleChangeInputValue(e)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle search visibility"
                onClick={() => handleChangeInputValue()}
                edge="end"
              >
                <Search />
              </IconButton>
            </InputAdornment>
          }
          label="Buscar"
        />
      </FormControl>
    </Fragment>
  );
};

export default SearchInput;
