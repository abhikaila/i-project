import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './signIn';
import Logout from './logOut';
import SignUp from './signUp';
import Homepage from './homePage';
import HomepageAdmin from './homePageAdmin';
import EditData from './editData';
import Header from './header';

export default class MainComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={SignUp} />
                        <Route exact path="/signIn" component={SignIn} />
                        <Route exact path="/home" component={Homepage} />
                        <Route exact path="/edit" component={EditData} />
                        <Route exact path="/homeAdmin" component={HomepageAdmin} />
                        <Route exact path="/logout" component={Logout} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        );
    }
}
