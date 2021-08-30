import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ModalRefuse from '../ModalRefuse';
import ModalVisitDetails from '../ModalVisitDetails';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    dateMarker: {
        borderRadius: 0,        
    },
    passedVisit:{
        backgroundColor:'#A885D8'
    },
    nextVisit:{
        backgroundColor:'#50BE87'
    },
    content: {
        cursor: 'pointer'
    }
}));

export default function CustomizedTimeline() {
    const classes = useStyles();

    const [open, setOpen] = React.useState();

    return (
        <Timeline align="alternate" style={{marginTop:'5%'}}>
            <TimelineItem>
                <TimelineOppositeContent onClick={() => setOpen(true)} className={classes.content}>
                    <Typography variant="body2" color="textSecondary">
                        9:30 am
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className={clsx(classes.dateMarker, classes.passedVisit)} >
                        <Typography>15/03/2021</Typography>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent onClick={() => setOpen(true)} className={classes.content}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Eat
                        </Typography>
                        <Typography>Because you need strength</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent onClick={() => setOpen(true)}>
                    <Typography variant="body2" color="textSecondary">
                        10:00 am
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary" className={clsx(classes.dateMarker, classes.nextVisit)}>
                        <Typography>31/05/2021</Typography>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent onClick={() => setOpen(true)}  className={classes.content}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Code
                        </Typography>
                        <Typography>Because it&apos;s awesome!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary" className={clsx(classes.dateMarker, classes.nextVisit)}>
                        <Typography>10/07/2021</Typography>
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent onClick={() => setOpen(true)}  className={classes.content}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Sleep
                        </Typography>
                        <Typography>Because you need rest</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary" className={clsx(classes.dateMarker, classes.passedVisit)}>
                        <Typography>06/10/2021</Typography>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent onClick={() => setOpen(true)} className={classes.content}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <ModalVisitDetails open={open} setOpen={setOpen}/>
        </Timeline>
    );
}