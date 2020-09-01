# Server for react app

* This a server which contain the backend code for our app.
* For server side code expressJs is used. ExpressJs a web framework that let's you structure a web application to handle multiple different http requests at a specific url. Express is a minimal, open source and flexible Node. js web app framework designed to make developing websites, web apps, & API's much easier.
* For store user data PostgreSql is used.

## database.sql
* This file contain database scehema for store user data.

## githubAuto.py
* This file will send all user data to the github repository.
* For that PyGithub library is used.

    ```
    pip install PyGithub
    ```
* Here Student and teacher data is passed as argument as store into student.json and teacher.json file in github repository respectively.

    ```python
    # Enter your username and password of github
    g = Github("username", "password")
    user = g.get_user()

    # Create a repo wherer you want to save data
    # and create two files
    # 1. studentData.json
    # 2. teacherData.json
    # Enter path to your repository where this files are created
    repo = g.get_repo("username/repo-name")
    
    studentFile = repo.get_contents("studentData.json")
    teacherFile = repo.get_contents("teacherData.json")
    
    # get the student and teacher data
    sData = sys.argv[1]
    tData = sys.argv[2]
    
    # update a file content
    repo.update_file("studentData.json","initial commit1",sData,studentFile.sha)
    repo.update_file("teacherData.json","initial commit1",tData,teacherFile.sha)

    ```
### SignUp:

* When user submit form data that data will submitted using post method to "/signUp" url from client side.
* So at server side all the data are store in user table.
* Here also checK that user is exist with entered email id or not.
    ```javascript
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
    ```

### SignIn

* USer submit form data that data will submitted using post method to "/signIn" url from client side.
    ```javascript
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
    ```

### Retrive a one user Data

* For retrive data client make a get request to url "/user/:id" and server will send data from user.json file to client.

    ```javascript
    app.get("/user/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const userData = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

            res.json(userData.rows[0]);
        } catch (err) {
            console.error(err.message);
        }
    });
    ```

### Retrive all user Data

* Here all the data from user table will send as a response to client.
* Only admin can make this request.
    ```javascript
    app.get("/users", async (req, res) => {
        try {
            const allUsersData = await pool.query("SELECT * FROM users ORDER BY role ASC, name ASC");
            res.json(allUsersData.rows);
        } catch (err) {
            console.error(err.message);
        }
    });
    ```

### Update a user data
* Admin can send request for update a existing user data.
    ```javascript
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
    ```

### Delete a User data

* Admin can send request for delete a existing user data.
    ```javascript
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
    ```
### Send data to Github Repository
* Admin can send for store all data from user table to the github repostory.
    ```javascript
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
    ```