import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'reactstrap';

class InputPanelComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description
        };
        this.handleChange = this.handleChange.bind(this);
        this.showFeedback = this.showFeedback.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    showFeedback() {
        const { feedback } = this.props;
        if (feedback == "") return <div />
        else {
            return (
                <div className="mt-4 text-info text-left col-8 mx-auto">
                    <h4>Feedback from Admin :</h4>
                    <p>{feedback}</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="mt-5">
                    <h1 className="text-center">Enter New Notice</h1>
                </div>

                <div className="col-md-8 col-12 mx-auto mt-4">
                    <div className="row">
                        <label htmlFor="title" className="col-lg-2 col-11">Title</label>
                        <Input type="text" name="title" id="title" className="col-lg-8 col-11"
                            placeholder="Title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div className="row mt-3">
                        <label htmlFor="description" className="col-lg-2 col-11">Description</label>
                        <Input type="textarea" name="description" id="description"
                            className="col-lg-8 col-11" rows="8" value={this.state.description} placeholder="Description" onChange={this.handleChange} />
                    </div>

                    <div className="row mt-3 justify-content-center">
                        <Link to="/adminPanel">

                            <button className="mx-auto btn btn-primary" onClick={() => this.props.onClick(this.state.title, this.state.description)}>Submit Data</button>
                        </Link>

                    </div>

                </div>

                {this.showFeedback()}

            </div >
        );
    }
}

export default InputPanelComponent;
