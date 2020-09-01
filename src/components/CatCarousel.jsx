import React from 'react';
import { Card, makeStyles, CardMedia } from '@material-ui/core';


function CatCarousel(props) {
    const { backgroundColor, title } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            borderRadius: 5,
            padding: '75px 50px',
            margin: '0px 25px',
            width: '500px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        }, 
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={title}
          />
          <h1>{title}</h1>
        </Card>
    );
}


export default CatCarousel;