import React from 'react';
import Header from '../../components/Header';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AdminForm from '../adminForm';
import FacilityForm from '../facilityForm';
import UserForm from '../userForm';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        borderBottomColor:'white'

    },
    tabs:{
        backgroundColor:'#FF7900',
    },
    linkTab:{
        color:'#ffff'
    }
}));

const CreateAccount = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (

            <div
                role="tabpanel"
                hidden={value !== index}
                id={`nav-tabpanel-${index}`}
                aria-labelledby={`nav-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `nav-tab-${index}`,
            'aria-controls': `nav-tabpanel-${index}`,
        };
    }

    function LinkTab(props) {
        return (
            <Tab
                component="a"
                onClick={(event) => {
                    event.preventDefault();
                }}
                {...props}
            />
        );
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Header isAdmin={true} />
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        className={classes.tabs}
                        onChange={handleChange}
                        indicatorColor='secundary'
                        aria-label="nav tabs example"
                    >
                        <LinkTab label="Administrator"  {...a11yProps(0)} className={classes.linkTab}/>
                        <LinkTab label="Facility"  {...a11yProps(1)} className={classes.linkTab} />
                        <LinkTab label="User"  {...a11yProps(2)} className={classes.linkTab}/>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                   <AdminForm/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                   <FacilityForm/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                   <UserForm/>
                </TabPanel>
            </div>
        </>
    )

}

export default CreateAccount;