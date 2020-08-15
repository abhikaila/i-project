# Server for react app

* This a server which contain the data for our app.
* For server side code expressJs is used. ExpressJs a web framework that let's you structure a web application to handle multiple different http requests at a specific url. Express is a minimal, open source and flexible Node. js web app framework designed to make developing websites, web apps, & API's much easier.

## user.json

* This file contain user data into json formate.

### For save data:

* When user submit form data that data will submitted using post method to "/registration" url from client side.
* So at server side all the data are store in user.json file.

```javascript
app.post("/registration", async (req, res) => {
    try {
        //Writing form data into user.json file//
    } catch (err) {
        console.error(err.message);
    }
});
```

### For retrive Data:

* For retrive data client make a get request to url "/homePage" and server will send data from user.json file to client.

```javascript
app.get("/homePage", async (req, res) => {
    try {
        // Read user data from user.json file and send back to client//
    } catch (err) {
        console.error(err.message);
    }
});
```