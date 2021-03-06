import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  paper: {
    margin: theme.spacing(2),
    height: '85vh',
  },
  loggedIn: {
    margin: theme.spacing(2),
  },
}));

export default function Admin() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
          <Typography variant="h3">
              Admin Panel
          </Typography>
          <Typography className={classes.loggedIn}>
            Successfully Logged In
          </Typography>
      </Paper>
    </div>
  );
}
