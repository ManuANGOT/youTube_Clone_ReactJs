import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@emui:material';
import React from 'react';


const App = () =>(
    <BrowserRouter>
        <Box sx = {{ backgroundColour: '#000'}}>
        Navbar
        <Routes>
            <Route path = "/" exact element = {<Feed/>} />
            <Route path = "/video/:id"  />
        </Routes>

        </Box>
    </BrowserRouter>
);

export default App