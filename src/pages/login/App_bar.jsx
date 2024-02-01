// import React from 'react'

// // import { AppBar, Box, Toolbar, Typography, Button, Avatar, Link } from '@mui/material';

// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import Link from '@mui/icons-material/Link';
// import { Avatar, Button } from '@mui/material';

// const drawerWidth = 240;

// function App_bar() {
//   return (
//     // <Box sx={{ flexGrow: 2 }}>
//     //   <AppBar position="static">
//     //     <Toolbar>


//     //       <Link sx={{ flexGrow: 4, textDecoration: "none", "&:hover": { color: "red", fontSize: "22px" } }} color="inherit" href="/">My Exp</Link>



//     //       <Button href="login" color="inherit">Login</Button>
//     //       <Avatar
//     //         alt="Remy Sharp"
//     //         src=".\images\me.jpg"
//     //         sx={{ width: 44, height: 44 }}
//     //       />
//     //       <Typography sx={{margin: "10px"}} variant="body1" color="inherit">Ahmed Ali </Typography>
//     //     </Toolbar>
//     //   </AppBar>
//     // </Box>


// <Box sx={{ display: 'flex' }}>
// <CssBaseline />
// <AppBar
//   position="fixed"
//   sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
// >
//   <Toolbar>
  
//           <Typography sx={{ flexGrow: 2, textDecoration: "none", "&:hover": { color: "red", fontSize: "22px" } }} color="inherit">
//               {/* variant="h6" noWrap component="div" */}
//             Permanent drawer
//             {/* <Link sx={{ flexGrow: 4, textDecoration: "none", "&:hover": { color: "red", fontSize: "22px" } }} color="inherit" >My Exp</Link> */}

//           </Typography>
//           <Button href="page_1" color="inherit">Login</Button>
//           <Button href="dashboard/dashboard" color="inherit">Dashboard</Button>
//           <Button href="login" color="inherit">Login an</Button>
//           <Avatar
//           alt="Remy Sharp"
//           src=".\images\me.jpg"
//           sx={{ width: 44, height: 44 }}
//           />
//          <Typography sx={{margin: "10px"}} variant="body1" color="inherit">Ahmed Ali </Typography>
//   </Toolbar>
// </AppBar>

// <Drawer
//   sx={{
//     width: drawerWidth,
//     flexShrink: 0,
//     '& .MuiDrawer-paper': {
//       width: drawerWidth,
//       boxSizing: 'border-box',
//     },
//   }}
//   variant="permanent"
//   anchor="left"
// >
//   <Toolbar />
//   <Divider />
//   <List>
//     {['Inbox ', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//       <ListItem key={text} disablePadding>
//         <ListItemButton>
//           <ListItemIcon>
//             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//           </ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItemButton>
//       </ListItem>
//     ))}
//   </List>
//   <Divider />
//   <List>
//     {['All mail', 'Trash', 'Spam'].map((text, index) => (
//       <ListItem key={text} disablePadding>
//         <ListItemButton>
//           <ListItemIcon>
//             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//           </ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItemButton>
//       </ListItem>
//     ))}
//   </List>
// </Drawer>
// <Box
//   component="main"
//   sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
// >
//   <Toolbar />
//   <Typography paragraph>
//     .....
//   </Typography>
//   <Typography paragraph>
//     ****
//   </Typography>
// </Box>
// </Box>



//   )
// }

// export default App_bar