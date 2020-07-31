import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import InputPanel from './InputPanelComponent';
import AdminPanel from './AdminPanelcomponent';
import PublicPanel from './PublicPanelComponent';

class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      valid: false,
      feedback: ""
    };
  }

  onSubmitData(title, desc) {
    this.setState({
      title: title,
      description: desc
    });
  }

  onFeedbackGiven(isValid, feedback) {
    this.setState({
      isValid: isValid,
      feedback: feedback
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/inputPanel" render={(props) => (
            <InputPanel {...props}
              title={this.state.title}
              description={this.state.description}
              valid={this.state.valid}
              feedback={this.state.feedback}
              onClick={(title, desc) => this.onSubmitData(title, desc)} />
          )} />

          <Route path="/adminPanel" render={(props) =>
            (
              <AdminPanel {...props}
                title={this.state.title}
                description={this.state.description}
                onClick={(isValid, feedback) => this.onFeedbackGiven(isValid, feedback)} />
            )} />

          <Route path="/publicPanel" render={(props) =>
            (
              <PublicPanel {...props}
                title={this.state.title}
                description={this.state.description} />
            )} />
          <Redirect to="/inputPanel" />
        </Switch>
      </div>
    );
  }
}

export default MainComponent;