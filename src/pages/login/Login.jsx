import './Login.css';
import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Container, TextField } from '@mui/material';

function Login() {
  return (
    <div>
      <Container className="border">
                    <Box sx={{ display: 'flex' }} >
                    <Typography sx={{ flexGrow: 3 }} variant="h4" color="initial">one </Typography>

                    <TextField
                      id="name"
                      label="Name"
                      
                      
                      
                    />
                    <TextField
                      id="name"
                      label="Name"
                      
                      
                      
                    />
                    
                    </Box>
                    <Typography variant="h4" color="initial">two</Typography>
                    <Typography variant="h4" color="initial">three</Typography>

    </Container>
    <Container sx={{ display: "flex" }} className="border">
      <Box sx={{ flexGrow: 2 }} className="border">
      <Box sx={{ flexGrow: 2 }} className="border">
      <Typography sx={{ flexGrow: 1 }} variant="h4" color="initial">three</Typography>
      <Typography variant="h4" color="initial">three</Typography>
      <Typography sx={{ flexGrow: 1 }} variant="h4" color="initial">three</Typography>
      <Typography variant="h4" color="initial">three</Typography>



      </Box>
      <Box sx={{ display: "flex" }} className="border">
      <Typography variant="h4" color="initial">three</Typography>
      <Typography variant="h4" color="initial">three</Typography>



      </Box>



      </Box>
      <Box className="border">
      <Typography variant="h4" color="initial">three</Typography>
      <Typography variant="h4" color="initial">three</Typography>



      </Box>
    

    </Container>
    </div>

  )
}

export default Login