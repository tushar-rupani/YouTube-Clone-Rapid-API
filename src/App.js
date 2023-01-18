import { Box } from '@mui/system'
import React from 'react'
import {Navbar, Feed, SearchFeed, VideoDetail, ChannelDetail} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed />}/>
                <Route path='/video/:id' exact element={<VideoDetail />}/>
                <Route path='/channel/:id' exact element={<ChannelDetail />}/>
                <Route path='/search/:searchTerm' exact element={<SearchFeed />}/>
            </Routes>
        </Box>
    </BrowserRouter>    
  )
}

export default App
