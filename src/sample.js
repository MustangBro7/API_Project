import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function ActionAreaCard(props) {
    const {image , name , recipeData} = props
  return (
    <Card style={{ maxWidth: 500, maxHeight:500, minWidth:300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          width="400"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000 */}
            {/* species, ranging across all continents except Antarctica */}
            Ingredients : {recipeData}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard