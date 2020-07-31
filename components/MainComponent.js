import React, { Component } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import InputPanel from './InputPanelComponent';
import AdminPanel from './AdminPanelcomponent';
import PublicPanel from './PublicPanelComponent';

class MainComponent extends Component {
  render() {
    return (
      <div>
        <h4>MainComponent</h4>
        {/* <Switch>
          <Route path="/inputPanel" component={InputPanel} />
          <Route path="/adminPanel" component={AdminPanel} />
          <Route path="/publicPanel" component={PublicPanel} />
          <Redirect to="/inputPanel" />
        </Switch> */}
      </div>
    );
  }
}

export default MainComponent;