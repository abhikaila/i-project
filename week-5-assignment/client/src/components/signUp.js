import React, { Component } from 'react';
import cookie from 'react-cookies';


class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            city: "",
            state: "",
            role: "Select",
            mobileno: "",
            email: "",
            password: ""
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitForm = e => {
        e.preventDefault();
        try {
            const body = this.state;
            fetch("http://localhost:5000/signUp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
                .then((result) => result.json())
                .then((info) => {
                    if (info == "1") {
                        alert("Data saved successfully.");
                        window.location = "/signIn";
                    }
                    else if (info == "-1") {
                        alert("User already exist...\nTry another email id.");
                    } else {
                        alert("Please Enter correct details.")
                    }
                })
        } catch (err) {
            console.error(err.message);
        }
    };

    render() {
        if (cookie.load('id')) {
            return window.location = "/home";
        }
        const { name, age, city, state, role, mobileno, email, password } = this.state;
        return (
            <div className="my-5">
                {/* <Header /> */}
                <div className="mt-5"></div>
                <br />
                <h1 className="text-center">Registration</h1>
                <form className="my-2 col-md-6 col-lg-5 col-11 mx-auto" method="POST" action="http://localhost:5000/signUp" onSubmit={this.onSubmitForm}>
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

                    {/* Mobile No */}
                    <div className="form-group">
                        <label htmlFor="mobileNo">
                            Mobile No
                        </label>
                        <input type="number" name="mobileno" placeholder="Mobile No" className="form-control"
                            value={mobileno} onChange={this.onChange} />
                    </div>

                    {/* select role */}
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select className="form-control" id="role" name="role" value={role} onChange={this.onChange}>
                            <option disabled text-info value="Select">Select</option>
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                        </select>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" placeholder="Email" className="form-control"
                            value={email} onChange={this.onChange} />
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" placeholder="Password" className="form-control"
                            value={password} onChange={this.onChange} />
                    </div>

                    {/* submit Button */}
                    <div className="text-center my-5 mx-auto">
                        <button className="btn col-4 btn-primary" type="submit">Submit Data</button>
                    </div>
                </form>

            </div >
        );
    }
}
export default Input;