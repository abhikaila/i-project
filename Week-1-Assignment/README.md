# Login-Registration Module

This a responsive 3 page website built using :
* Html
* Css
* Bootstrap 4.0
* Javascript
* Session storage function of browser

### Structure of the site :
```
    Pages
        |- signUp
        |- signIn
        |- homePage
```

## signUp.html 

* This page contains a html form with bootstrap classes. so here user can input all the data and register.

#### signUp.js

* After fill all the details user submit the form and all fiels are validate in signUp.js file.
* If there is any error in inputs given by user than show appropriate message to user.
* After successful validation it will store the data to Session storage functionality of the browser.
For ex:
    ```javascript
    // for store data into session storage
    sessionStorage.setItem(key, value);
    ```
* Also check the input image size is not greater than 2Mb and file formate is 'jpg', 'png', 'jpeg'.
* Here use regex for validate the inputs. 
___

## signIn.html

* This page contain a login form. So After successful login user can to login to the site by using email and password.

#### signIn.js

* After submit email and password signIn.js file will match this given inputs with store data in session storage. 
* So if data is matched than use successfully logged in and redirect to homePage.
* And if the inputs is not matched with the session storage data than show appropriate message.
For ex:
    ```javascript
    var inputEmail = document.getElementById('inputEmail').value;
    var inputPassword = document.getElementById('inputPassword').value;

    if (inputEmail === sessionStorage.getItem("userEmail") &&
        inputPassword === sessionStorage.getItem("userPassword")) {
        return true;
    } else if (inputEmail === sessionStorage.getItem("userEmail")) {
        // message
        return false;
    } else {
        // message
        return false;
    }
    ```
___

## homePage.html
* After succesful login user can see all the detail entered during registration process. 

#### homePage.js
* In Homepage user data will fetch from session storage store during registration process.
For ex:
    ```javascript
    // for get data from session storage
    sessionStorage.getItem(key, value);
    ```
* There is also a logout button by clicking on it all the data from session storage will clear and user succesfully logOut.

    ```javascript
    function logOut() {
        // clear all the data from session Storage
        sessionStorage.clear();
        return false
    }
    ```

### global.css

* global.css file contain common style for all the pages.
* contain many classes for styling button, form, etc.

