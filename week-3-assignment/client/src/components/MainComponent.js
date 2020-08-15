import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Input from './input';
import Homepage from './homePage';

export default class MainComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Input} />
                    <Route exact path="/home" component={Homepage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}
