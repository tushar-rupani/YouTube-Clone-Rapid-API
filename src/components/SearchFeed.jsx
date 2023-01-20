import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from "./Videos";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideo(data.items))
  }, [searchTerm])
  return (
    <Box p={2} sx={{height: "90vh", overflowY: "auto", flex: 3}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
          {searchTerm} <span style={{color: "#F31503"}}>Videos</span><br />
        </Typography>
        <Videos videos = {videos} />
    </Box>
  )
}

export default SearchFeed
