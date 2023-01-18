import React from "react";
import { Box, Stack } from "@mui/system";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          borderRight: "1px solid #3d3d3d",
          height: { sx: "auto", md: "92vh" },
          px: { sm: 0, md: 2 },
        }}
      >
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff", mt: "1.5" }}
        >
          All rights reserved &copy;
         
        </Typography>
        
        
      </Box>
      
    </Stack>
  );
};

export default Feed;
