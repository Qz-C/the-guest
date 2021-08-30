import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
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
        padding: theme.spacing(2, 4, 3),
        width: '50%',

    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'start',
        h6: {
            fontWeight: 'bold',
            color: 'grey'
        }
    }
}));




const ModalFirstAccess = ({ open, setOpen }) => {
    const classes = useStyles();
    const history = useHistory();

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
                        <h3 id="transition-modal-title" style={{ textAlign: 'center', flexWrap:'wrap' }}>At the first access you must change your password</h3>

                        <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            style={{ width: "50%", marginTop: '3%', alignSelf: 'center' }}
                            onClick={() => history.push('/profile')}
                        >
                            Go to Profile
                        </button>
                    </div>
                </Fade>
            </Modal>
        </div>

    )

}
export default ModalFirstAccess;