
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Button } from '@mui/material';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const UserDetails = (props) => {
 console.log(props)
 const {title,id,body}=props.user;
 var style={
   borderBottom:"1px solid gray",
   marginBottom:"10px",
   paddingBottom:"5px"
 }
 return (
  <div >
     <Card style={style} sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <h4>{title}</h4>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>{body}</p>
          <p> {id}  </p> 
          <Button variant="contained" >
          <FontAwesomeIcon icon={faCoffee} />Contained</Button>
         
       
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
  
  
  </div>
 );
};

export default UserDetails;