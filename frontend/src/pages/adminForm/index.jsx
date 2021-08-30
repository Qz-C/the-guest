import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
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
    textField: {
        width: "80%",
    },
    title: {
        color: '#FF7900',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:10

    },   

}));

const AdminForm = () => {
    const classes = useStyles();
    return (
        <div className={classes.profileContaint} >
            <Grid item xs={6} >
                <Paper className={classes.paper}>
                    <Typography className={classes.title}>Generate Administrator Account</Typography>
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
                        <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            style={{ width: "50%", marginTop: '3%' }}
                        >
                           Create
                        </button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )

}

export default AdminForm;