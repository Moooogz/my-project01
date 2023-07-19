import { Alert, Avatar, Grid, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import {Navigate} from 'react-router-dom';


const LoginPage = () => {




  const [usernameValue,setUsernameValue] =useState("");
  const [passwordValue,setPasswordValue] =useState("");

  const [gotoMain,setGotoMain] = useState(false);
  
   
    if (gotoMain) {
      return( 
        <Navigate to={'/main'}/>
   
      )
    }

    const successLogin = () => {
     
      if (usernameValue==="admin" && passwordValue==="admin"){
        return setGotoMain(true)
      }
      else{
      return alert("Invalid Credentials")
      }
    }
    
  

  return (
    
    <Grid>
      <Paper
        elevation={10}
        square={false}
        rounded={100}
        style={{ padding: 40, height: "40vh", width: 350, margin: "60px auto" }}
      >
        <Grid align="center">
          <Avatar src="/broken-image.jpg" />
          <h4>Sign In</h4>
          <Grid margin={"20px auto"}>
            <TextField
              id="usernameID"
              label="Enter username"
              variant="filled"
              fullWidth
              margin="10px"
              onChange={(e) => setUsernameValue(e.target.value)}
              required
            />
          </Grid>
          <Grid align="center">
            <TextField
              id="passwordID"
              label="Enter password"
              variant="filled"
              fullWidth
              type="password"
              onChange={(e) => setPasswordValue(e.target.value)}
              required
            />
          </Grid>
          <Grid margin={"20px auto"}>
            <Button
              variant="contained"
              fullWidth 
              onClick={successLogin}>
              LOG IN NOW
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LoginPage;