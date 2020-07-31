# NOTICE BOARD SYSTEM

This is a simple notice board system buit in react. In this notice board system First We have add new notice and than admin will review the notice and if there is any changes required in notice than admin will send back notice with feedback. 

If no changes required than notice will publish to the public panel.

    components
        |- MainCoponent.js
        |- InputPanelComponent.js
        |- AdminPanelComponent.js
        |- PublicPanelComponent.js

## MainComponent.js

It is basically a root component. Also store the data for the system and pass as a props to the component. Control the route of the system.


```html
<Switch>
        <Route path="/inputPanel" render={(props) => (
            <InputPanel {...props}
                title={this.state.title}
                description={this.state.description}
                valid={this.state.valid}
                feedback={this.state.feedback}
                onClick={(title, desc) => this.onSubmitData(title, desc)} />

        <Route path="/adminPanel" render={(props) =>
            (<AdminPanel ... /> )} />

        <Route path="/publicPanel" render={(props) =>
            (<PublicPanel ... />)} />
        <Redirect to="/inputPanel" />
        )} />
</Switch
```


## InputPanelComponent.js

It is contain the input fields where we can enter the data of the notice and after submit data it will go for admin review.

## AdminPanelComponent.js

Here admin review the notice if there is no change require than notice will pubish but if there is any change require than admin can send back notice with feedback.

## PubicPanelComponent.js

After successfull review of the notice it will display here.


___
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

See the section about [deployment](https://facebook.github.io/
