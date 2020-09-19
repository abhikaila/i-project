import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Spinner } from "reactstrap";

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            role: "Select",
            password: "",
            loading: false
        }
        this.toggleLoading = this.toggleLoading.bind(this);
    }

    toggleLoading() {
        this.setState({ loading: !this.state.loading });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitForm = e => {
        // fetch datafrom user from github and store in database
        e.preventDefault();
        this.toggleLoading();
        try {
            fetch("http://localhost:5000/fetchDataFromGithubRepo")
                .then(res => {
                    console.log(res);
                    return res.json()
                })
                .then(msg => {
                    if (msg == 1) {
                        // alert("Data fetch from github Repository Successfully.");
                        try {
                            const body = this.state;
                            fetch("http://localhost:5000/signIn", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(body)
                            })
                                .then((result) => result.json())
                                .then((info) => {
                                    if (info.status == "1") {
                                        const { id } = info;
                                        const role1 = info.role;
                                        cookie.save('id', id, { path: '/' });
                                        cookie.save('role', role1, { path: '/' });
                                        window.location = "/home";
                                    }
                                    else {
                                        alert("Incorrect email or password..\nTry again..");
                                    }
                                    this.toggleLoading();

                                });
                        } catch (err) {
                            console.error(err.message);
                        }
                    } else {
                        alert("An error occur Try again...");
                    }
                });
        } catch (err) {
            console.error(err.message);
        }
    };

    render() {
        if (cookie.load('id')) {
            return window.location = "/home";
        }
        if (this.state.loading) {
            return (
                <div className="text-center mx-auto align-self-center" style={{ marginTop: 300 }}>
                    <Spinner className="text-primary">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    <span className="ml-2 align-self-center">Loading...</span>
                </div>
            );
        } else {
            const { email, password, role } = this.state;
            return (
                <div>
                    {/* <Header /> */}
                    <br />
                    <h1 className="text-center mt-5">Login</h1>
                    <form className="mt-2 col-md-6 col-lg-5 col-11 mx-auto" method="POST" action="http://localhost:5000/signIn" onSubmit={this.onSubmitForm}>
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email">
                                <b>Email</b>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="form-control"
                                value={email} onChange={this.onChange} />
                        </div>

                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="password">
                                <b>Password</b>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="form-control"
                                value={password} onChange={this.onChange} />
                        </div>

                        {/* select role */}
                        <div className="form-group">
                            <label htmlFor="role"><b>Role</b></label>
                            <select className="form-control" id="role" name="role" value={role} onChange={this.onChange}>
                                <option disabled text-info value="Select">Select</option>
                                <option value="Student">Student</option>
                                <option value="Teacher">Teacher</option>
                            </select>
                        </div>

                        {/* submit Button */}
                        <div className="mx-auto text-center">
                            <button className="btn btn-primary col-4 my-5" type="submit">submit</button>
                        </div>
                    </form>
                </div>
            );
        }
    }
}
export default Input;