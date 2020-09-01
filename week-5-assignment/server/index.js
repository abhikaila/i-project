const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { spawn } = require('child_process');

//middleware
app.use(cors());
app.use(express.json()); //req.body

// signUp
app.post("/signUp", async (req, res) => {
    try {
        const { name, age, city, state, role, mobileno, email, password } = req.body;

        const isUserExist = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );
        if (isUserExist.rows.length > 0) {
            res.json("-1");
        } else {
            const data = await pool.query(
                "INSERT INTO users (name, age, city, state, mobileno,role, email, password) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
                [name, age, city, state, mobileno, role, email, password]
            );
            console.log(data.rows[0]);
            res.json("1");
        }
    } catch (err) {
        console.error(err.message);
    }
    res.json("0");

});

// signIn
app.post("/signIn", async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const isUserExist = await pool.query(
            "SELECT * FROM users WHERE email = $1 and password= $2 and role=$3",
            [email, password, role]
        );
        if (isUserExist.rows.length > 0) {
            res.json({
                status: "1",
                id: isUserExist.rows[0].id,
                role: role
            });
            console.log("Login Successful.");
        } else {
            res.json("0");
            console.log("Login Failed.");
        }
    } catch (err) {
        console.log(err.message);
    }
});

// get one user data
app.get("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const userData = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

        res.json(userData.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all user data
app.get("/users", async (req, res) => {
    try {
        const allUsersData = await pool.query("SELECT * FROM users ORDER BY role ASC, name ASC");
        res.json(allUsersData.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// update a user data
app.put("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, city, state, mobileno, email } = req.body;
        const updatedUserData = await pool.query(
            "UPDATE users SET name = $1, age = $2,city = $3,state = $4,mobileno = $5,email = $6 WHERE id = $7",
            [name, age, city, state, mobileno, email, id]
        );
        console.log("Data was updated succesfully.");
        res.json("Data was updated succesfully.");
    } catch (err) {
        console.error(err.message);
    }
});

// delete a user data
app.delete("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUserData = await pool.query("DELETE FROM users WHERE id = $1",
            [id]
        );
        res.json("User data was deleted succesfully.");
    } catch (err) {
        console.log(err.message);
    }
});

// send data to github repo
app.get("/sendDataToGithubRepo", async (req, res) => {
    try {

        const studentData = await pool.query("SELECT * FROM users WHERE role='Student'");
        const teacherData = await pool.query("SELECT * FROM users WHERE role='Teacher'");

        const sData = JSON.stringify(studentData.rows);
        const tData = JSON.stringify(teacherData.rows);

        const res1 = spawn('python', ['githubAuto.py', sData, tData]);

        res1.stdout.on('data', function (data) {
            console.log(data.toString());
            res.json(data.toString());
        });
    } catch (error) {
        console.log(error);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");

})