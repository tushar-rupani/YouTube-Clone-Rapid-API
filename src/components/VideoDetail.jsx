import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReactPlayer from "react-player";
import Videos from './Videos'
const VideoDetail = () => {
  const { id } = useParams();
  const [VideoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setRelatedVideos(data.items))
    console.log(relatedVideos);
  }, [id]);
  if(!VideoDetail?.snippet) return "Loading... please wait."
  const {snippet: {title, channelId, channelTitle}, statistics: {likeCount, viewCount, commentCount} } = VideoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          //current video we are playing
          <Box sx={{position: "sticky", top: "70px", width: "96%"}}>
            <ReactPlayer url={`https://youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="#fff" fontWeight="bold" variant="h5" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" p={2} sx={{color: "#fff"}}>
                <Typography fontFamily="Roboto" color="#fff" fontWeight="bold" variant={{sm: "subtitle2", md:"h6"}} px={2} py={1}>
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
            </Stack>
          </Box>
        </Box>

        <Box>
          //Related videos to be displayed.
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
