import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import createPalette from '@material-ui/core/styles/createPalette';
import CatCarousel from "./CatCarousel.jsx"
import { SLIDE_INFO } from '../CatInfo';
import Arrow from './Arrow.jsx';


const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    title: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      textAlign: 'center',

    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

    space : {
        paddingBottom: 75,
    },

    bottom : {
        paddingBottom: 100,
    },

    catDescript: {
        flexGrow: 1,
        padding: theme.spacing(3),
        textAlign: 'center',
    },

    fullWidth: {
      width: '100%',
    },
    
    image: {
      maxWidth: 345,
    },


    carousel:{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
  }));
  

function AboutMe() {
    const classes = useStyles();
  

    // for cat pic carosel
    const [index, setIndex] = React.useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;
    const [slideIn, setSlideIn] = React.useState(true);
    const [slideDirection, setSlideDirection] = React.useState('up');
    
    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;
        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 300);

    };

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 39) {
                onArrowClick('right');
            }
            if (e.keyCode === 37) {
                onArrowClick('left');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        var cleanup =  () => {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return cleanup;
    });


    return (
    <main className={classes.fullWidth}>
        <div className={classes.toolbar} />





        <div className={classes.title}>
            <Typography variant='h6'>hobbies</Typography>
        </div>

        <div className={classes.content}>
            <Typography paragraph>

            I'm really into sample-based/plunderphonic music.
            Before COVID, I used to volunteer at KalX Radio, and I helped out in sorting and maintaining their huge music library.
            Some artists I would recommend that I've been listening to recently are Dean Blunt, Mach-Hommy, and Open Mike Eagle. 
            I like to produce random stuff on occasion, my DAW of choice being FL Studio. Never really could get into Ableton.
            My soundcloud is linked below; I've been meaning to update it.

            </Typography>

            <Typography paragraph>
            My favorite video game at the moment is probably Sid Meier's Civilization 5 + the community-made Vox Populi Mod, which overhauls the base game completely in a fantastic way.
        
            Coincidentally, my current side project is working on a simple multiplayer 4X game with another friend in the Unity Engine.
            This project has also been my intro to game networking; 
            I've been using the Mirror API, which is a community-built networking API built on top of Unity's deprecated UNET system, 
            and so far I've been rather impressed by it. Code available upon request.

            </Typography>


        </div>



        <div className={classes.title}>
            <Typography variant='h6'>introducing... my cat!</Typography>
        </div>

        <div className={classes.catDescript}>

            <div className={classes.carousel}>
                <Arrow
                    direction='left'
                    clickFunction={() => onArrowClick('left')}
                />

                <Slide in={slideIn} direction={slideDirection} timeout={100}>
                    <div>
                        <CatCarousel content={content} />
                    </div>
                </Slide>                
                
                <Arrow
                    direction='right'
                    clickFunction={() => onArrowClick('right')}
                />
            </div>

            <div className={classes.space}/>

            <Typography paragraph>
            Her name is Donut 🍩, named after my favorite <a href="https://en.wikipedia.org/wiki/Donuts_(album)">album</a>. 
            If you also have a cat, I bet you mine is cuter 😤.
            </Typography>

        </div>




        <div className={classes.bottom}/>

    </main>
    );
}


export default AboutMe;