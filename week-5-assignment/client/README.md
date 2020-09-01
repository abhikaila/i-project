# signUp-signIn In ReactJS

* This is a simple react form which contain a client side code.

    ```
    components
        |--MainComponent.js
        |--header.js
        |--signIn.js
        |--signUp.js
        |--homePAge.js
        |--homePageAdmin.js
        |--editData.js
        |--logOut.js
    ```

## MainComponent.js
* This component contain root for our application.
```javascript
    <div>
        <Header />
        <div className="container-fluid">
            <Switch>
                <Route exact path="/" component={SignUp} />
                <Route exact path="/signIn" component={SignIn} />
                <Route exact path="/home" component={Homepage} />
                <Route exact path="/edit" component={EditData} />
                <Route exact path="/homeAdmin" component={HomepageAdmin} />
                <Route exact path="/logout" component={Logout} />
                <Redirect to="/" />
            </Switch>
        </div>
    </div>
```
___
## header.js
* This component contain a header for webpages.
___
## signUp.js
* This component contain a simple registration form where user can enter all details and submit.
* All the details of will submitted to the server using POST request.
```javascript
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
                    // print msg
                })
        } catch (err) {
            console.error(err.message);
        }
    };

```
___
## signIn.js

* This component contain a login form where user can login with email, pasword and role.
* If all details are correct than user will login successfully and redirect to the homePage.

```javascript
onSubmitForm = e => {
        e.preventDefault();
        try {
            const body = this.state;
            fetch("http://localhost:5000/signIn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
                .then((result) => result.json())
                .then((info) => {
                //   print message according to response from server
                });
        } catch (err) {
            console.error(err.message);
        }
    };
```

___
## homePage.js
* After successfull login user will redirect to the homePage where all the details are fetch from server using get request and show in table format.
```javascript
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
```
___
## homePageAdmin.js
* If the role of the user is teacher than user can access AdminPage where user can,
    * Saw all the details of students and teacher.
        ```javascript
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
        ```
    * Edit the store data.
    * Save all data into Github repository in JSON formate.
        ```javascript
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
        ```
    * Delete a student record.
        ```javascript
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
        ```
___
## editData.js
* If user logIn as a teacher than user can access this component.
* This component contain a form where user can update store data and save new data to the database. 

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
