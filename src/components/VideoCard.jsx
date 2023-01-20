import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "250px", xs: "100%" },
        borderRadius: "0",
        boxShadow: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : ""}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        ></CardMedia>
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : ""}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60)}...
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : ""}>
          <Typography variant="subtitle2" fontWeight="bold" color="grey">
            {snippet?.channelTitle}
            <CheckCircle sx={{fontSize: 12, ml:"5px", mt:"3px"}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
