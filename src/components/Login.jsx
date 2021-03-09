import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Paper, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(5),
  },
  textField: {
    width: '60%',
    minimumWidth: '100px',
    margin: theme.spacing(1),
    padding: 'auto',
  },
}));
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Login({ setLoggedIn }) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState({});
  const history = useHistory();

  const _updateEmail = (evt) => {
    const emailValue = evt.target.value;
    setEmail(emailValue);
    if (!validateEmail(emailValue)) {
      setErr({ ...err, email: 'Invalid Email' });
      return;
    }
    setErr({ ...err, email: null });
  }
  const _updatePassword = (evt) => {
    const passwordValue = evt.target.value;
    setPassword(passwordValue);
    if (passwordValue.length < 8) {
      setErr({ ...err, password: 'Invalid Passowrd (minimum 8 characters)' });
      return;
    }
    setErr({ ...err, password: null });
  }
  const checkLogin = () => {
    if (err.password == null && err.email == null) {
      if (email.length <= 0) {
        setErr({ ...err, email: 'Email is a required Field' });
      } else if (password.length <= 0) {
        setErr({ ...err, password: 'Password is a required Field' });
      } else {
        // setting loggedIn in the local storage.
        localStorage.setItem('isLoggedIn', 'true');
        setLoggedIn('true');
        history.push('/Admin');
      }
    }
  }
  return (
    <Paper elevation={2} className={classes.paper}>
      <Typography variant="h3" className={classes.heading}>
        Login Form
      </Typography>
      <form className={classes.form} autoComplete="off">
        <TextField
          value={email}
          onChange={_updateEmail}
          className={classes.textField}
          type="email"
          label="Email ID *"
          variant="outlined"
          helperText={err.email}
          error={err.email != null}
        />
        <TextField
          value={password}
          onChange={_updatePassword}
          className={classes.textField}
          type="password"
          label="Password *"
          variant="outlined"
          helperText={err.password}
          error={err.password != null}
        />
      </form>
      <Button variant="contained" color="primary" onClick={checkLogin}>
        Login
      </Button>
    </Paper>
    
  );
}
