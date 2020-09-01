import React, { Component } from 'react';
import cookie from 'react-cookies';

class Logout extends Component {

    onLogout() {
        const flag = window.confirm("logout...");
        if (flag) {
            cookie.remove('id', { path: '/' });
            cookie.remove('role', { path: '/' });
            // window.location = "/";
            window.history.back();
        } else {
            window.history.back();
        }
    }

    render() {
        if (!cookie.load('id')) {
            return window.location = "/";
        }
        return (
            <div>
                {this.onLogout()}
            </div>
        );
    }
}

export default Logout;