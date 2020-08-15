import React, { Component } from 'react';
import HomePage from './homePage';
class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            hobbies: "",
            city: "",
            state: "",
            country: ""
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitForm = e => {
        e.preventDefault();
        try {
            const body = this.state;
            fetch("http://localhost:5000/registration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
                .then((result) => result.json())
                .then((info) => { console.log(info); })
            window.location = "/home";
        } catch (err) {
            console.error(err.message);
        }
    };

    render() {
        const { name, age, hobbies, city, state, country } = this.state;
        return (
            <div>
                <h1 className="text-center mt-5">Registration</h1>
                <form className="d-flex mt-5" method="POST" action="http://localhost:5000/registration" onSubmit={this.onSubmitForm}>
                    {/* name */}
                    <div className="form-group">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" name="name" placeholder="Name" className="form-control"
                            value={name} onChange={this.onChange} />
                    </div>

                    {/* Age */}
                    <div className="form-group">
                        <label htmlFor="age">
                            Age
                        </label>
                        <input type="number" name="age" placeholder="Age" className="form-control"
                            value={age} onChange={this.onChange} />
                    </div>

                    {/* Hobbies */}
                    <div className="form-group">
                        <label htmlFor="hobbies">
                            Hobbies
                        </label>
                        <input type="text" name="hobbies" placeholder="Hobbies" className="form-control"
                            value={hobbies} onChange={this.onChange} />
                    </div>

                    {/* City */}
                    <div className="form-group">
                        <label htmlFor="city">
                            City
                        </label>
                        <input type="text" name="city" placeholder="City" className="form-control"
                            value={city} onChange={this.onChange} />
                    </div>

                    {/* State */}
                    <div className="form-group">
                        <label htmlFor="state">
                            State
                        </label>
                        <input type="text" name="state" placeholder="State" className="form-control"
                            value={state} onChange={this.onChange} />
                    </div>

                    {/* Country */}
                    <div className="form-group">
                        <label htmlFor="country">
                            Country
                        </label>
                        <input type="text" name="country" placeholder="Country" className="form-control"
                            value={country} onChange={this.onChange} />
                    </div>

                    {/* submit Button */}
                    <div className="mx-auto text-center">
                        <button className="btn btn-primary" type="submit">submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Input;