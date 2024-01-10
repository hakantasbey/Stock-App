// import { Typography } from "@mui/material"
// import useStock from "../service/useStockCalls";
// import { useSelector } from "react-redux";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import { useEffect } from "react";


// const Firms = () => {
//   const {getFirms} = useStock()
//   const{firms}= useSelector((state)=>state.stock)
//   console.log(firms);
//   useEffect(() => {
// getFirms()
//   }, [])
  
//   return (
//     <div>
//       <Typography variant="h4" style={{color:"red"}}>Firms</Typography>
//       {firms.map((firm)=>(
//          <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image={firm.image}
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//       ))}

//     </div>
//   )
// }

// export default Firms


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStockCalls from '../service/useStockCalls';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

export default function Firms() {
  const {getFirms}= useStockCalls()
  useEffect(() => {
    getFirms()
  }, [])
  const {firms}= useSelector(state=>state.stock)
  return (
    <Grid container spacing={3}>
      {firms.map((firm,index)=>(
        <Grid  item key={index} >
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={firm.image}
        title={firm.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {firm.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {firm.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
      ))}
    </Grid>
  );
}