import React, { Component } from 'react';
import cookie from 'react-cookies'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        if (cookie.load('id') && cookie.load('role') == "Teacher") {
            return (
                <div>
                    <Navbar color="dark" dark expand="md" fixed="top" >
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                            <NavbarBrand className="mr-auto">Navbar</NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar className="ml-auto">
                                    <NavItem>
                                        <NavLink className="nav-link" to='/home'>Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/homeAdmin'>HomeAdmin</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/logout'>Logout</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                </div>
            );
        } else if (cookie.load('id') && cookie.load('role') == "Student") {
            return (
                <div>
                    <Navbar color="dark" dark expand="md" fixed="top">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                            <NavbarBrand className="mr-auto">Navbar</NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar className="ml-auto">
                                    <NavItem>
                                        <NavLink className="nav-link" to='/home'>Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/logout'>Logout</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                </div>
            );
        } else {

            return (
                <div>
                    <Navbar color="dark" dark expand="md" fixed="top">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                            <NavbarBrand className="mr-auto">Navbar</NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar className="ml-auto">
                                    <NavItem>
                                        <NavLink className="nav-link" to='/SignIn'>SignIn</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/'>SignUp</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                </div >
            );
        }
    }
}

export default Header;