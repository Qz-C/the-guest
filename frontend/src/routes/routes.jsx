import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import MyVisits from '../pages/myVisits';
import Profile from '../pages/profile';
import ScheduleVisits from '../pages/scheduleVisits';
import CreateAccount from '../pages/createAccount';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path='/home' exact component={Home} />
                <Route path='/my-visits' exact component={MyVisits} />
                <Route path='/profile' exact component={Profile} />
                <Route path='/schedule-visits' exact component={ScheduleVisits} />
                <Route path='/create-account' exact component={CreateAccount}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;