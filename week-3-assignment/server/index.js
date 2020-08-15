const express = require("express");
const app = express();
var fs = require("fs");
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //req.body

// save data
app.post("/registration", async (req, res) => {
    try {
        //Writing form data into file//
        // Reading JSON file 
        const users = require("./user");
        let user = req.body;

        users[0] = user;

        fs.writeFile("user.json", JSON.stringify(users), err => {

            // Checking for errors 
            if (err) throw err;

            console.log("Data saved successfully."); // Success 
        });

    } catch (err) {
        console.error(err.message);
    }
});

// get data
app.get("/homePage", async (req, res) => {
    try {
        // Read user data//
        fs.readFile("user.json", function (err, data) {

            // Check for errors 
            if (err) throw err;

            // Converting to JSON 
            const users = JSON.parse(data);
            res.json(users[0]);
        });
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
})