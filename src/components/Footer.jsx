import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import { BottomNavigation, BottomNavigationAction} from '@material-ui/core';

import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const drawerWidth = 0;

const useStyles = makeStyles(theme => ({
    appBar: {
      top: 'auto',
      bottom: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },

    bottomNav: {
    }

  }));



function Footer() {
    const classes = useStyles();

    const [value, setValue] = React.useState(-1);

    return (
      <AppBar position='fixed' className={classes.appBar} elevation={1}>
        <BottomNavigation value={value} className={classes.bottomNav}>   
            <BottomNavigationAction label="Mail" icon={<MailIcon />} onMouseEnter={() => setValue(0)} onMouseLeave={() => setValue(-1)} onClick={() => window.open( 
                "mailto: emanuel.rew@berkeley.edu", "_self" )}/>


            <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} onMouseEnter={() => setValue(1)} onMouseLeave={() => setValue(-1)} onClick={() => window.open( 
                "https://www.linkedin.com/in/erew/", "_blank" )}/>


            <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} onMouseEnter={() => setValue(2)} onMouseLeave={() => setValue(-1)} onClick={() => window.open( 
                "https://github.com/hanyoungrew", "_blank" )}/>


            <BottomNavigationAction label="SoundCloud" icon={<MusicNoteIcon />} onMouseEnter={() => setValue(3)} onMouseLeave={() => setValue(-1)} onClick={() => window.open( 
                            "https://soundcloud.com/hanrew", "_blank" )}/>

        </BottomNavigation>
      </AppBar>
    );
  }




export default Footer