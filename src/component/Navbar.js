import { AppBar,Toolbar,IconButton ,Typography,Button,Stack} from "@mui/material";
 import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';


  function Navbar() {
   return (
     <AppBar position="static">
        <Toolbar>
            <IconButton size="large"edge="start" color='inherit'>
                <SportsBasketballIcon/>      
            </IconButton>
            <Typography variant="h6" component="div">
                PLAYAPP
                </Typography>
               <Stack direction="row" spacing={2}>
                  <Button color="inherit">Home</Button>
                  <Button color="inherit">User</Button>
                  <Button color="inherit">Logout</Button>
               </Stack>
        </Toolbar>
     </AppBar>
   )
 }
 
 export default Navbar;