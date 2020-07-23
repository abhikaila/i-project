// check input email and password is correct or not
function check() {
    if (typeof (Storage) !== "undefined") {
        // Store
        var inputEmail = document.getElementById('inputEmail').value;
        var inputPassword = document.getElementById('inputPassword').value;

        if (inputEmail === sessionStorage.getItem("userEmail") &&
            inputPassword === sessionStorage.getItem("userPassword")) {
            return true;
        } else if (inputEmail === sessionStorage.getItem("userEmail")) {
            alert("Password is wrong, Please enter correct Password.");
            return false;
        } else {
            alert("EmailId is wrong, Please enter correct email.");
            return false;
        }

    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
}