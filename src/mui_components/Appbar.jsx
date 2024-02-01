import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import { Avatar, Button } from '@mui/material';

const drawerWidth = 240;

function Appbar() {
  return (
    <AppBar
    position="fixed"
    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
>
    <Toolbar>

        <Typography sx={{ flexGrow: 2, textDecoration: "none", "&:hover": { color: "red", fontSize: "22px" } }} color="inherit">
            {/* variant="h6" noWrap component="div" */}
            Permanent drawer
            {/* <Link sx={{ flexGrow: 4, textDecoration: "none", "&:hover": { color: "red", fontSize: "22px" } }} color="inherit" >My Exp</Link> */}

        </Typography>
        <Button href="page_1" color="inherit">Login</Button>
        <Button href="dashboard/dashboard" color="inherit">Dashboard</Button>
        <Button href="login" color="inherit">Login an</Button>
        <Avatar
            alt="Remy Sharp"
            src=".\images\me.jpg"
            sx={{ width: 44, height: 44 }}
        />
        <Typography sx={{ margin: "10px" }} variant="body1" color="inherit">Ahmed Ali </Typography>
    </Toolbar>
</AppBar>
  )
}

export default Appbar