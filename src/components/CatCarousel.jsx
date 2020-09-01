import React from 'react';
import { Card, makeStyles, CardMedia } from '@material-ui/core';


function CatCarousel(props) {
    const { backgroundColor, title } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            borderRadius: 5,
            margin: '0px 25px',
            width: '600px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        },
        media: {
          width: "100%",
          minWidth: 500,
          paddingTop: '60%', // 16:9

        }, 
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={title}
            title="lorem ipsum"
          >
          </CardMedia>

        </Card>
    );
}


export default CatCarousel;