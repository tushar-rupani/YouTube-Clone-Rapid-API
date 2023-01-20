import React from 'react'
import { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
const SearchBar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = () => {
    navigate(`/search/${searchValue}`);
    setSearchValue("");
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{borderRadius: 20, border: "1px solid #e3e3e3", pl: 3, boxShadow: "none", mr: {sm: 5}}}
    >
      <input className="search-bar" value={searchValue} placeholder="Search..." onChange={(e) => {setSearchValue(e.target.value)}}  />
      <IconButton sx={{color: "red", p: "10px"}} type="submit">
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
