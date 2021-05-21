import React  ,{ useState, useContext }  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useHistory } from "react-router-dom";
import UserContext from "../context/userContext";
import Axios from "axios";
import ErrorNotice from "../components/misc/ErrorNotice";
import "./Sign-up/signup.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {
  const classes = useStyles();
const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post("http://localhost:4001/users/register", newUser);
      const loginRes = await Axios.post("http://localhost:4001/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
        <form className={classes.form} onSubmit={submit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label htmlFor="register-display-name">Display name</label>
        <input
        className="emailinput"
          id="register-display-name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="register-email">Email</label>
        <input
        className="emailinput"
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>
            <label htmlFor="register-password">Password</label>
             <input
             className="emailinput"
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
            </Grid>
             <Grid item xs={12}>
              <label htmlFor="register-password">Verfiy Password</label>
        <input
        className="emailinput"
          type="password"
         id="verfy-password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <LLink href="/signin" variant="body2">
                Already have an account? Sign in
              </LLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}