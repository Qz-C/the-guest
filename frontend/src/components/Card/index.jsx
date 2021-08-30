import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import ModalRefuse from '../ModalRefuse';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '80%',
        marginTop: '8%',

    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const VisitsCard = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState();

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Card className={classes.root} >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }

                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Check style={{ color: '#50BE87' }} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Close onClick={handleOpen} style={{ color: 'red' }} />
                    </IconButton>
                </CardActions>
            </Card>
            <ModalRefuse open={open} setOpen={setOpen} />
        </>
    );
}

export default VisitsCard;