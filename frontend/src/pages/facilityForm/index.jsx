import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from "@material-ui/core";
import ModalRefuse from "../../components/ModalRefuse";
import ModalCreateClient from "../../components/ModalCreateClient";

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
        marginBottom: 10

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    addClientSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

}));


const FacilityForm = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState();

    return (
        <div className={classes.profileContaint} >
            <Grid item xs={6} >
                <Paper className={classes.paper}>
                    <Typography className={classes.title}>Generate Facility Account</Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Place Name"
                                multiline
                                maxRows={4}
                                //value={value}
                                //onChange={handleChange}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Country"
                                multiline
                                maxRows={4}
                                //value={value}
                                //onChange={handleChange}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="City"
                                multiline
                                maxRows={4}
                                //value={value}
                                //onChange={handleChange}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Street"
                                multiline
                                maxRows={4}
                                //value={value}
                                //onChange={handleChange}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Building"
                                multiline
                                maxRows={4}
                                //value={value}
                                //onChange={handleChange}
                                variant="outlined"
                            />
                        </FormControl>
                        <div className={clsx(classes.addClientSection, classes.margin, classes.textField)}>
                            <FormControl variant="outlined" className={classes.textField}>
                                <InputLabel id="demo-simple-select-outlined-label">Select a Client</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    //value={age}
                                    //onChange={handleChange}
                                    label="clients"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <Fab size='small' style={{ backgroundColor: '#A885D8', color: '#ffff' }} aria-label="add">
                                <AddIcon onClick={() => setOpen(true)} />
                            </Fab>
                        </div>
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
            <ModalCreateClient open={open} setOpen={setOpen}/>
        </div>

    )
}

export default FacilityForm;