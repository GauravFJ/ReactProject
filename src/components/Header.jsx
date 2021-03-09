import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    color: 'white',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  buttons: {
    '& a': {
      textDecoration: 'none !important',
      color: 'white',
    }
  }
}));

export default function ButtonAppBar({
  isLoggedIn, setLoggedIn,
}) {
  const classes = useStyles();

  const logOut = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setLoggedIn('false');
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          
          <Typography variant="h6" className={classes.title}>
            Sample App
          </Typography>
          <div className={classes.buttons}>
            <Link to="/Home"><Button color="inherit">Home</Button></Link>
            <Link to="/About"><Button color="inherit">About Us</Button></Link>
            {
              isLoggedIn !== 'true' && <Link to="/Login"><Button color="inherit">Login</Button></Link>
            }
            {
              isLoggedIn === 'true' && <Link to="/Home"><Button onClick={logOut} color="inherit">Log out</Button></Link>
            }
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
