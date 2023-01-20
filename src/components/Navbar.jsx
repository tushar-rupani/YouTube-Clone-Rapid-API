import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
   <Stack
   direction="row"
   alignItems="center"
   p={2}
   sx={{justifyContent: "space-between", top: 0, position: "sticky", background: "#000"}}
   >
    <Link to="/" style={{display: "flex", alignItems: "center"}}>
      <img src={logo} alt="logo" height={45} /> <h3 style={{color: "#fff", marginLeft: "10px", fontFamily:"Roboto"}}>YoooTube</h3>
    </Link>
    <SearchBar />
   </Stack>
  )
}

export default Navbar
