import { Box } from '@mui/system'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import {ChannelCard, Videos} from './'
const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetails(data.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data.items))
  }, [id])
  return (
    <Box
    minHeight="95vh">
      <Box>
        <div 
          style={ {background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", zIndex: 10, height: "300px"}}
        />
        <ChannelCard channelDetail={channelDetails} marginTop="-93px" />
      </Box>
      <Box display="flex" p={2} justifyContent="space-around" alignItems="center">
        <Videos videos={videos} />
      </Box>
      
    </Box>
  )
}

export default ChannelDetail
