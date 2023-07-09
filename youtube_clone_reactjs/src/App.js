import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@emui:material';

import React from 'react';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () =>(
    <BrowserRouter>
        <Box sx = {{ backgroundColour: '#000'}}>
        <Navbar/>
        <Routes>
            <Route path = "/" exact element = {<Feed/>}/>
            <Route path = "/video/:id" element = {<VideoDetail/>}/>
            <Route path = "/channel/:id" element = {<ChannelDetail/>}/>
            <Route path = "/search/searchTerm" element = {<SearchFeed/>}/>
        </Routes>

        </Box>
    </BrowserRouter>
);

export default App