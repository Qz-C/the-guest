import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router";
import Background from "../../assets/images/bkg-01.jpg";
import Logo from '../../assets/logos/logo.png';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  imageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    opacity: 2
  },
  logo: {
    display: "flex",
    alignItems: "center",
    width: "5vw",
    height: "10vh",
    objectFit: 'fill',
    marginBottom: '5%'

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#fff",
    height: '100%',
    marginBottom: '5%',
    color: theme.palette.text.secondary,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  margin: {
    margin: theme.spacing(1.5),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "50%",
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'start',

  },
  subtitle: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',

  },
  divider: {
    borderRight: "1px solid grey",
    height: 60,
    marginLeft:10,
    backgroundColor:'grey'
  }

}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });



  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container direction="row" justifyContent="center">
      <img
        src={Background}
        className={classes.imageBackground}
        alt="background"
      />
      <Grid item xs={6} style={{ zIndex: 100, marginTop: "10%" }}>
        <Paper className={classes.paper}>
          <form className={classes.form} noValidate autoComplete="off">
            <div className={classes.title}>
              <img
                src={Logo}
                className={classes.logo}
                alt="orange-logo"
              />
              <div className={classes.divider}></div>
              <div className={classes.subtitle}>

                <h2 style={{ marginBottom: 0, marginLeft: 10 }}>Login</h2>
                <h6 style={{ marginLeft: 10 }}>The Guest Application</h6>

              </div>
            </div>

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <TextField
                id="outlined-multiline-flexible"
                label="E-mail"
                multiline
                maxRows={4}
                //value={value}
                //onChange={handleChange}
                variant="outlined"
              />
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                maxRows={4}
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <button
              onClick={() => history.push({

                pathname: '/home',                
                state: {firstAcess:true}
              })}
              type="button"
              class="btn btn-primary btn-lg"
              style={{ width: "50%", marginTop: '3%' }}
            >
              Sign In
            </button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
