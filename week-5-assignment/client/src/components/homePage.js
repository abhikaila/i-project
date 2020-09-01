import React, { Component } from 'react';
import cookie from 'react-cookies'

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: {},
            id: cookie.load('id')
        }
    }

    componentDidMount() {
        try {
            const id = this.state.id;
            fetch("http://localhost:5000/user/" + id)
                .then(res => {
                    console.log(res);
                    return res.json()
                })
                .then(users => {
                    this.setState({ users })
                    console.log(users);
                });
        } catch (err) {
            console.error(err.message);
        }
    }

    render() {
        if (!this.state.id) {
            // return window.location = "/signIn";
            window.history.back();
            return false;
        }
        const { name, age, city, state, mobileno, email } = this.state.users;
        return (
            <div className="my-5">
                <br />
                <h1 className="text-center m-2">WelCome</h1>
                <div className="table-responsive col-md-6 mx-auto">
                    <table className="table text-capitalize table-bordered table-striped ml-auto">
                        <tbody>
                            <tr>
                                <td className="label1">Name</td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td className="label1">Age</td>
                                <td>{age}</td>
                            </tr>
                            <tr>
                                <td className="label1">City</td>
                                <td>{city}</td>
                            </tr>
                            <tr>
                                <td className="label1">State</td>
                                <td>{state}</td>
                            </tr>
                            <tr>
                                <td className="label1">Mobile No</td>
                                <td>{mobileno}</td>
                            </tr>
                            <tr>
                                <td className="label1">Email</td>
                                <td>{email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default HomePage;