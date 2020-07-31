import React, { Component } from 'react';

class PublicPanelComponent extends Component {
    render() {

        return (
            <div className="container col-12 col-md-6 mx-auto my-5">
                <h1 className="mb-5 text-center">Notice</h1>

                <div className="row">
                    <h4 className="col-md-3 col-11"><strong>{"Title"}</strong></h4>
                    <p className="col-md-8 col-11">{": " + this.props.title}</p>
                </div>
                <div className="row">
                    <h4 className="col-md-3 col-11"><strong>{"Description"}</strong></h4>
                    <p className="col-md-8 col-11">{": " + this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default PublicPanelComponent;
