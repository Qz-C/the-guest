import React from "react";
import Header from "../../components/Header";
import VisitsCard from '../../components/Card';
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router";
import ModalFirstAccess from "../../components/ModalFirstAcess";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  newVisits: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  }

}));

const Home = () => {
  const classes = useStyles();
  const location = useLocation();
 

  // eslint-disable-next-line
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isFacility, setIsFacility] = React.useState(true);

  return (
    <div className={classes.root}>
      {isAdmin === false && isFacility === false ? (
        <>
          <Header isAdmin={false} isFacility={false} />
          <div className={classes.newVisits}>
            <VisitsCard />
          </div>
        </>
      ) : isFacility === false && isAdmin === true ? (
        <>
          <Header isAdmin={true} isFacility={false} />
          <div className={classes.newVisits}>
            <VisitsCard />
          </div>
        </>

      ) : (
        <>
          <Header isAdmin={false} isFacility={true} />
          <div className={classes.newVisits}>
            <VisitsCard />
          </div>
        </>

      )}
      <ModalFirstAccess open={location.state != undefined ? location.state.firstAcess : false } setOpen={false}/>
    </div>
  );
};

export default Home;
