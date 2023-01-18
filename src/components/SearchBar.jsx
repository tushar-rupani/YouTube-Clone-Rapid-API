import React from 'react'
import { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{borderRadius: 20, border: "1px solid #e3e3e3", pl: 3, boxShadow: "none", mr: {sm: 5}}}
    >
      <input className="search-bar" placeholder="Search..." onChange={() => {}}  />
      <IconButton sx={{color: "red", p: "10px"}} type="submit">
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
