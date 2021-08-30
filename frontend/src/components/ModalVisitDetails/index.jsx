import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
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
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4, 3),
        width: '50%',
        
    },   
    details: {
        display: 'flex',
        flexDirection: 'column',
        textAlign:'start',
        h6: {            
            fontWeight: 'bold',
            color: 'grey'
        }
    }
}));


const ModalVisitDetails = ({ open, setOpen }) => {
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
                    <div className={clsx(classes.paper, classes.details)}>
                        <h2 id="transition-modal-title" style={{textAlign:'center'}}>Visit Details</h2>
                        <div>
                            <h6>Visitors:</h6>
                            <Typography>thaynamuller</Typography>
                            <h6>Title:</h6>
                            <Typography>Visit Orange</Typography>
                            <h6>Description:</h6>
                            <Typography>Visit</Typography>
                            <h6>Start time:</h6>
                            <Typography>30/08/2021 10:00 AM</Typography>
                            <h6>Finish Time:</h6>
                            <Typography>30/08/2021 13:00 PM</Typography>
                        </div>
                        <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            style={{ width: "50%", marginTop: '3%' , alignSelf:'center'}}
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </Fade>
            </Modal>
        </div>


    )
}

export default ModalVisitDetails;