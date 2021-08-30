import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center',
        width: '50%'
    },
    textField: {
        width: '80%',
        marginBottom: theme.spacing(2)
    }
}));

const ModalCreateClient = ({ open, setOpen }) => {
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Create a new Client</h2>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Name"
                                multiline
                                maxRows={4}
                                //value={value}
                                //onChange={handleChange}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <TextField
                                id="outlined-number"
                                label="Number of Employees"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedA}
                                    // onChange={handleChange}
                                    name="checked" />
                            }
                            label="Is it a lead?"
                        />
                        <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            style={{ width: "50%", marginTop: '3%' }}
                        >
                            Create
                        </button>
                    </div>
                </Fade>
            </Modal>
        </div>

    )

}

export default ModalCreateClient;