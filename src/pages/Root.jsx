import React from 'react'
import { Outlet } from 'react-router-dom'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { CssBaseline } from '@mui/material';


import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Appbar from 'mui_components/Appbar';
import Drawerr from 'mui_components/Drawer';
import { Container } from '@mui/material';



const drawerWidth = 240;

function Root() {
    return (
        <div>


            <CssBaseline />
            <Appbar />

            <Drawerr />


            <Container sx={{ ml: `${drawerWidth}px`, mr: `${drawerWidth}px`, mt: "65px", display: "flex", justifyContent: "center" }} >
                <Outlet />
            </Container>
        </div>
    );
};

export default Root