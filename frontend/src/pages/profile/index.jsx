import React from "react";
import clsx from "clsx";
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
import Header from "../../components/Header";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    profileContaint: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '3%'
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
        marginTop: theme.spacing(2),
    },
    textField: {
        width: "80%",
    },
    title: {       
        color:'#FF7900',
        fontSize:40,
        fontWeight:'bold'

    },
    subtitle: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',

    },
    divider: {
        borderRight: "1px solid grey",
        height: 60,
        marginLeft: 10,
        backgroundColor: 'grey'
    }

}));


const Profile = () => {
    const classes = useStyles();

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
        <>
            <Header isAdmin={false} isFacility={true}/>
            <div className={classes.profileContaint} >
                <Grid item xs={6} >
                    <Paper className={classes.paper}>
                        <Typography className={classes.title}>Profile</Typography>
                        <form className={classes.form} noValidate autoComplete="off">
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
                            <FormControl
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Confirm Password
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
                                type="button"
                                class="btn btn-primary btn-lg"
                                style={{ width: "50%", marginTop: '3%' }}
                            >
                                Save
                            </button>
                        </form>
                    </Paper>
                </Grid>
            </div>
        </>
    )

}

export default Profile;