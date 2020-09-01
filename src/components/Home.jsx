import React from 'react';


import { Typography, Card, makeStyles, CardMedia } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    title: {
      flexGrow: 1,
      padding: theme.spacing(3),
      textAlign: 'center',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    fullWidth: {
      width: '100%',
    },
    prof: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    },

    media: {
      minWidth: 300,
      minHeight: 300,

      paddingTop: '56.25%', // 16:9

    }, 

  }));
  

function Home() {
    const classes = useStyles();
  
    return (
    <main className={classes.fullWidth}>
        <div className={classes.toolbar} />



        <div className={classes.title}>
            <div className={classes.prof}>
                <Card>
                    <CardMedia
                      className={classes.media}
                      image="images/dude.jpg"
                      title="lorem ipsum"
                    >
                    </CardMedia>
                </Card>
            </div>
        </div>

        <div className={classes.content}>
            <Typography paragraph>
            Hey there! I'm a computer science student @ UC Berkeley broadly interested in software/web development, with an expected graduation date of 2021.
            I'm originally from San Diego, though I've spent most of my life in the Bay. 
            
            This summer I interned at Hewlett Packard Enterprise under the HPE Container Platform Team, formerly known as BlueData.
            My project was on creating a high availability solution for Kubernetes StatefulSets in order to tolerate node failures.
            I got my internship extended into the fall, and am currently working part time to integrate my project into <a href="https://github.com/bluek8s/kubedirector" target="_blank">Kubedirector</a>, 
            HPE's solution for simplifying deployment and management of stateful applications on Kubernetes.

            </Typography>


            <Typography paragraph>
            Due to COVID and other personal reasons, I may take a gap semester this spring, in which case I would graduate in Fall 2021. 
            As such, I'm looking for both Winter/Spring/Summer 2021 internship opportunities, as well as Summer 2021 new grad full-time opportunities.

            </Typography>



            <Typography paragraph>

            The best way to contact me is through my email at emanuel.rew@berkeley.edu.
            For more information about my experience and projects, checkout my <a href="/Emanuel_Rew_Resume.pdf" target="_blank">resume.</a>

            </Typography>


        </div>
    </main>
    );
}


export default Home;