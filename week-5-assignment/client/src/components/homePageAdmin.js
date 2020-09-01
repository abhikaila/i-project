import React, { Component } from 'react';
import cookie from 'react-cookies'

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.renderUser = this.renderUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser = function (id) {
        try {
            fetch("http://localhost:5000/user/" + id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            })
                .then(res => {
                    console.log(res);
                    this.setState({
                        users: this.state.users.filter(user => user.id !== id)
                    });
                    return res.json()
                })

        } catch (err) {
            console.error(err.message);
        }
    };

    sendDataToGithubRepo = function () {
        try {
            fetch("http://localhost:5000/sendDataToGithubRepo")
                .then(res => {
                    console.log(res);
                    return res.json()
                })
                .then(msg => {
                    if (msg == 1) {
                        alert("Data save to github Repository Successfully.");
                    } else {
                        alert("An error occur Try again...");
                    }
                });
        } catch (err) {
            console.error(err.message);
        }
    }

    componentDidMount() {
        try {
            fetch("http://localhost:5000/users")
                .then(res => {
                    console.log(res);
                    return res.json()
                })
                .then(users => {
                    this.setState({ users })
                });
        } catch (err) {
            console.error(err.message);
        }
    }

    renderUser = function () {
        const users = this.state.users;
        return users.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>{user.mobileno}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td className="mx-auto text-center">
                        {
                            user.id == cookie.load('id') ? (
                                <button
                                    className="btn btn-sm btn-warning"
                                    onClick={() => { window.location = "/edit" }}>
                                    Edit
                                </button>
                            ) : user.role == "Teacher" ? ("") : (
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => this.deleteUser(user.id)}>
                                    Delete
                                    </button>
                            )
                        }
                    </td>
                </tr>
            );
        }
        );
    }

    render() {
        if (!cookie.load('id') || cookie.load('role') != "Teacher") {
            // return window.location.href = "/signIn"; 
            window.history.back();
            return false;
        }
        return (
            <div className="mx-auto text-center">
                <div className="mt-5"></div>
                <br />
                <h1 className="text-center">Users</h1>
                <div className="table-responsive col-lg-8 mx-auto">
                    <table className="table text-capitalize table-bordered table-striped ml-auto">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Mobile NO</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUser()}
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-primary my-5" onClick={() => this.sendDataToGithubRepo()}>
                    Send data to github Repo
                </button>
            </div>
        );
    }
}

export default HomePage;