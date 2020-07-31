import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'reactstrap';

class AdminPanelComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "a",
            description: "b",
            isValid: true
        };
    }

    inValidData() {
        this.setState({
            isValid: !this.state.isValid
        });
    }
    render() {
        return (
            <div className="container col-12 col-md-6 mx-auto my-5">
                <h1 className="mb-5 text-center">Review Notice</h1>

                <div className="row">
                    <h4 className="col-md-3 col-11"><strong>{"Title"}</strong></h4>
                    <p className="col-md-8 col-11">{": " + this.props.title}</p>
                </div>
                <div className="row">
                    <h4 className="col-md-3 col-11"><strong>{"Description"}</strong></h4>
                    <p className="col-md-8 col-11">{": " + this.props.description}</p>
                </div>



                <div className="row mt-3 justify-content-around">
                    <div className="col-4">
                        <Button color="primary" className="col-12" onClick={() => this.inValidData()}>Invalid</Button>
                    </div>
                    <div className="col-4">
                        <Link to="/publicPanel">
                            <Button color="primary" className="col-12" onClick={() => this.props.onClick(true, "Good.")}>Valid</Button>
                        </Link>
                    </div>
                </div>
                <Feedback isValid={this.state.isValid}
                    onSubmitFeedback={(isvalid, feedback) => this.props.onClick(isvalid, feedback)} />
            </div>
        );
    }
}

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feedback: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        if (!this.props.isValid)
            return (
                <div>
                    <hr />
                    <div>
                        <div className="row mt-5 mx-auto">
                            <label htmlFor="feedback" className="col-lg-11 col-11"><strong>Feedback</strong></label>
                            <Input type="textarea" name="feedback" id="feedback"
                                className="col-lg-11 col-11" rows="8" value={this.state.feedback} placeholder="Feedback" onChange={this.handleChange} />
                        </div>

                        <div className="text-center mt-3">
                            <Link to="/inputPanel">
                                <Button color="primary" className="" onClick={() => this.props.onSubmitFeedback(this.props.isValid, this.state.feedback)}>Send Feedback</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        else
            return <div />
    }
}
export default AdminPanelComponent;
