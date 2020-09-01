import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const drawerWidth = 0

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  title: {
    color: theme.palette.primary.light,
    flexGrow: 1,
  },
  light: {
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
  },

}));



function Header() {
    const classes = useStyles()

    return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar>
          <Typography variant="h6" className={classes.title}>
          Emanuel Rew
          </Typography>
          <Link to="/">
            <Button className={classes.light}>home</Button>
          </Link>
          <Link to="/aboutme">
            <Button className={classes.light}>about me</Button>
          </Link>
          <a href="/Emanuel_Rew_Resume.pdf" target="_blank">
            <Button className={classes.light}> resume </Button>
          </a>
      </Toolbar>
    </AppBar>
    )
    
    
    
}

export default Header;