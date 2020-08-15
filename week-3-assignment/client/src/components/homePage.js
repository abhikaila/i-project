import React, { Component } from 'react';
import '../css/homePage.css';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentDidMount() {
        try {
            fetch("http://localhost:5000/homePage")
                .then(res => {
                    console.log(res);
                    return res.json()
                })
                .then(users => {
                    console.log(users);
                    this.setState({ users })
                });
        } catch (err) {
            console.error(err.message);
        }
    }

    render() {
        const { name, age, hobbies, city, state, country } = this.state.users;
        return (
            <div className="my-5">
                <h1 className="text-center">Users</h1>
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
                            <td className="label1">Hobbies</td>
                            <td>{hobbies}</td>
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
                            <td className="label1">Country</td>
                            <td>{country}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default HomePage;