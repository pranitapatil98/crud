import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "../features/Users";
import { useState } from "react";
//import * as React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";




function AddUser() {
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    
  </Box>;

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [sirname, setsirName] = useState("");
  const [newUserName, setnewUserName] = useState("");

  const userList = useSelector((state) => state.users.value);
  return (
     <>
         <div className='addUser'>
             <input type="text" placeholder='Name'
            onChange={(e)=>{setName(e.target.value)}}/>
             <input type="text" placeholder="Username"
             onChange={(e)=>{setsirName(e.target.value)}}/>
            <Button onClick={()=>{dispatch(addUser({id:userList[userList.length -1].id +1,name:name,sirname:sirname}))}}>Add User</Button>
         </div>
         <Grid container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start" >
    {userList.map((user)=> {
        
        return (
            <Grid item xs={12} sm={4} md={3} spacing={4} >
             <Card style={{ width: "300px" }} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <h5>{user.name} {user.sirname}</h5>
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <input
            type="text"
            placeholder="new userName"
            onChange={(e) => {
              setnewUserName(e.target.value);
            }}
          />
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button variant="contained" 
          onClick={() => {
            dispatch(updateUsername({ id: user.id, name: newUserName }));
          }}
        >
          Update
        </Button>
        <Button variant="contained"  style={{backgroundColor:"#FA8072"}}
          onClick={() => {
            dispatch(deleteUser({ id: user.id }));
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
    </Grid>
        )
        }
        
  )

}
</Grid>
</>
  )}

export default AddUser;
