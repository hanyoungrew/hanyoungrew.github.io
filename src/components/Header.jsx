import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                </Typography>
                <Button color="secondary">About Me</Button>
                <Button color="secondary">Resume</Button>
            </Toolbar>
            </AppBar>
      </div>
    )
    
    
    
}

export default Header;