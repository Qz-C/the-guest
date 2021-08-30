import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Header from "../../components/Header";
import { Typography } from "@material-ui/core";
import { Chips } from 'primereact/chips';
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import 'primeflex/primeflex.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    profileContaint: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '3%',
        marginBottom: '5%'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        backgroundColor: "#fff",
        height: '100%',
        color: theme.palette.text.secondary,
        marginBottom: 10
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 10,
    },

    textField: {
        width: "80%",
        marginTop: theme.spacing(2)
    },
    title: {
        color: '#FF7900',
        fontSize: 40,
        fontWeight: 'bold'

    },
    subtitle: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',

    },

    selectEmpty: {
        marginTop: theme.spacing(2),
    },


}));

const ScheduleVisits = () => {
    const classes = useStyles();

    const [isAdmin, setIsAdmin] = React.useState(false);
    const [isFacility, setIsFacility] = React.useState(true);
    const [emailChip, setEmailChip] = React.useState([]);

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

    console.log(new Date().toISOString())

    return (
        <>
            <Header isAdmin={false} isFacility={true} />
            <div className={classes.profileContaint} >
                <Grid item xs={6} >
                    <Paper className={classes.paper}>
                        <Typography className={classes.title}>Schedule a Visit</Typography>
                        <form className={classes.form} noValidate autoComplete="off">
                            {isFacility === true ? (<>
                            </>) : (
                                <>


                                    <FormControl variant="outlined" className={classes.textField}>
                                        <InputLabel id="demo-simple-select-outlined-label">Customers</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            //value={age}
                                            //onChange={handleChange}
                                            label="Customers"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl variant="outlined" className={classes.textField}>
                                        <InputLabel id="demo-simple-select-outlined-label">Places</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            //value={age}
                                            //onChange={handleChange}
                                            label="Places"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </>
                            )}
                            <FormControl className={classes.textField} style={{alignItems:'center', marginBottom:20}}>
                                <Chips
                                    value={emailChip}
                                    placeholder='Set an email list'
                                    onChange={(e) => setEmailChip(e.target.value)}
                                    separator=","

                                />
                            </FormControl>
                            <FormControl className={classes.textField}>
                                <TextField
                                    id="datetime-local"
                                    label="Start Time"
                                    type="datetime-local"
                                    defaultValue={new Date().toISOString().split('.')[0]}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>
                            <FormControl className={classes.textField}>
                                <TextField
                                    id="datetime-local"
                                    label="Finish Time"
                                    type="datetime-local"
                                    defaultValue={new Date().toISOString().split('.')[0]}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>
                            <FormControl className={classes.textField}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Title"
                                    multiline
                                    maxRows={4}
                                    //value={value}
                                    //onChange={handleChange}
                                    variant="outlined"
                                />
                            </FormControl>
                            <FormControl className={classes.textField}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description ..."
                                    multiline
                                    rows={6}
                                    variant="outlined"
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

export default ScheduleVisits;