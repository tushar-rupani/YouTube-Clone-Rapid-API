import React from "react";
import { Box, Stack } from "@mui/system";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = () => {
  const [selectCategory, setSelectCategory] = useState("New");
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectCategory}`)
    .then((data) => setVideo(data.items))
  }, [selectCategory])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          borderRight: "1px solid #3d3d3d",
          height: { sx: "auto", md: "92vh" },
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff", mt: "1.5" }}
        >
          All rights reserved &copy;
        </Typography>
      </Box>
      <Box p={2} sx={{height: "90vh", overflowY: "auto", flex: 3}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
          {selectCategory} <span style={{color: "#F31503"}}>Videos</span><br />
        </Typography>
        <Videos videos = {videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
