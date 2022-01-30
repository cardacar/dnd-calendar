import React,{Fragment, useState} from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';
import {randomColorGenerate} from '../utils/randomColorGenerate'

const SearchInput = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleChangeInputValue = (e)=>{
    setSearchInputValue(e.target.value)
  }

  return (
    <Fragment>
     <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
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
                  onClick={()=>console.log(randomColorGenerate())}
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
  )
};

export default SearchInput;
