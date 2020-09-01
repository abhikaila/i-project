import React, { Component } from 'react';
import cookie from 'react-cookies';

class EditData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_c: cookie.load('id'),
            name: "",
            age: "",
            city: "",
            state: "",
            role: "Select",
            mobileno: "",
            email: "",
            password: "********"
        }
    }

    componentDidMount() {
        try {
            const id = this.state.id_c;
            fetch("http://localhost:5000/user/" + id)
                .then(res => {
                    console.log(res);
                    return res.json()
                })
                .then(users => {
                    this.setState({
                        name: users.name,
                        age: users.age,
                        city: users.city,
                        state: users.state,
                        role: users.role,
                        mobileno: users.mobileno,
                        email: users.email
                    })
                    console.log(users);
                });
        } catch (err) {
            console.error(err.message);
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitForm = e => {
        e.preventDefault();
        try {
            const body = {
                id: this.state.id_c,
                name: this.state.name,
                age: this.state.age,
                city: this.state.city,
                state: this.state.state,
                role: this.state.role,
                mobileno: this.state.mobileno,
                email: this.state.email
            };
            fetch("http://localhost:5000/user/" + this.state.id_c, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
                .then((result) => result.json())
                .then((info) => { console.log(info); })
            window.location = "/homeAdmin";
        } catch (err) {
            console.error(err.message);
        }
    };

    render() {
        if (cookie.load('role') != "Teacher") {
            return window.location = "/home";
        }
        const { name, age, city, state, role, mobileno, email, password } = this.state;

        return (
            <div>
                {/* <Header /> */}
                <h1 className="text-center mt-5">Edit Data</h1>
                <form className="my-5 col-md-8 col-11 mx-auto"
                    method="POST"
                    action={"http://localhost:5000/user/" + this.state.id_c}
                    onSubmit={this.onSubmitForm}
                >
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
                    <fieldset disabled>
                        <div className="form-group">
                            <label htmlFor="role">
                                Role
                            </label>
                            <select class="form-control" id="role" name="role" value={role} onChange={this.onChange}>
                                <option disabled text-info value="Select">Select</option>
                                <option value="Student">Student</option>
                                <option value="Teacher">Teacher</option>
                            </select>
                        </div>
                    </fieldset>

                    {/* Email */}
                    <fieldset disabled>
                        <div className="form-group">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" name="email" placeholder="Email" className="form-control"
                                value={email} onChange={this.onChange} />
                        </div>
                    </fieldset>

                    {/* Password */}
                    <fieldset disabled>
                        <div className="form-group">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" name="password" placeholder="Password" className="form-control"
                                value={password} onChange={this.onChange} />
                        </div>
                    </fieldset>

                    {/* submit Button */}
                    <div class="text-center my-5 mx-auto">
                        <button className="btn col-4 btn-primary" type="submit">Submit Data</button>
                    </div>
                </form>

            </div >
        );
    }
}
export default EditData;