
import './Login.css';


import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CenterFocusStrong } from '@mui/icons-material';
import { Box, Divider, TextField, Button } from '@mui/material';
import AutoDeleteRoundedIcon from '@mui/icons-material/AutoDeleteRounded';
import MenuIcon from '@mui/icons-material/Menu';

// @ts-ignore
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Page_1() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
  return (
    <Card sx={{ maxWidth: 545 , marginTop: "100px" , marginLeft: "500px"}}>
    <CardHeader className='title'
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          P
        </Avatar>
      }
    //   action={
    //     <IconButton aria-label="settings">
    //       <MoreVertIcon />
    //     </IconButton>
    //   }
      title="Login Page "
    //   subheader="September 14, 2016"
    />
    {/* <CardMedia
      component="img"
      height="194"
      image="https://mui.com/static/images/cards/paella.jpg"
      alt="Paella dish"
    /> */}
    <CardContent>
    {/* mt={20} */}
      <Typography border="4px solid red" sx={{ margin: "20px"}} variant="body2" color="text.blue">
         Here
      </Typography>
      <Box sx={{ margin: "10px"}} >
      {/* <TextField sx={{maxWidth: 545 , ml: "50px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"}}
          required
          id="outlined-required"
          label="ادخل البريد الالكتروني"
          
          
        /> */}
        <TextField sx={{ maxWidth: 545 , marginLeft: "50px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"}}
          id="outlined-required"
          label="ادخل البريد الالكتروني  "
          type="text"
          
        />
        <Divider light />
        <TextField sx={{ maxWidth: 545 , marginLeft: "50px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"}}
          id="outlined-password-input"
          label="ادخل كلمة المرور"
          type="password"
          
        />
        
        <Button endIcon={<AutoDeleteRoundedIcon />} sx={{mr: "auto", ml: "auto", display: "flex"}} variant="contained" color="error">
            التسجيل
          
        </Button>
        
      </Box>
      
    </CardContent>
    <IconButton size="large" color="info"  >
        <MenuIcon fontSize="large" />
          
    </IconButton>

  </Card>
  )
}

export default Page_1