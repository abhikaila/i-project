
// save the form data into sessionStorage
function saveData() {

    var firstName, lastName, birthDate, gender, Address, userCity, userState, userCountry, mobileNO,
        clgName, clgCity, clgState, clgCountry, userEmail, userPassword, t_cCheckBox;

    // get values from form input 
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    birthDate = document.getElementById('birthDate').value;
    var g = document.getElementsByName('gender');
    var gender;
    for (var i = 0; i < g.length; i++) {
        if (g[i].checked) {
            gender = g[i].value;
        }
    }
    Address = document.getElementById('Address').value;
    userCity = document.getElementById('userCity').value;
    userState = document.getElementById('userState').value;
    userCountry = document.getElementById('userCountry').value;
    mobileNO = document.getElementById('mobileNo').value;
    clgName = document.getElementById('clgName').value;
    clgCity = document.getElementById('clgCity').value;
    clgState = document.getElementById('clgState').value;
    clgCountry = document.getElementById('clgCountry').value;
    userEmail = document.getElementById('userEmail').value;
    userPassword = document.getElementById('userPassword').value;
    confirmPassword = document.getElementById('confirmPassword').value;
    t_cCheckBox = document.getElementById('termsAndCondiCheckBox');

    // validate user input
    if (!validateData(firstName, lastName, birthDate, gender, Address, userCity, userState, userCountry, mobileNO,
        clgName, clgCity, clgState, clgCountry, userEmail, userPassword, confirmPassword, t_cCheckBox)) {
        return false;
    }

    if (typeof (Storage) !== "undefined") {
        // Store data into sesssion storage

        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("lastName", lastName);
        sessionStorage.setItem("birthDate", birthDate);
        sessionStorage.setItem("gender", gender);
        sessionStorage.setItem("Address", Address);
        sessionStorage.setItem("userCity", userCity);
        sessionStorage.setItem("userState", userState);
        sessionStorage.setItem("userCountry", userCountry);
        sessionStorage.setItem("mobileNo", mobileNO);
        sessionStorage.setItem("clgName", clgName);
        sessionStorage.setItem("clgCity", clgCity);
        sessionStorage.setItem("clgState", clgState);
        sessionStorage.setItem("clgCountry", clgCountry);
        sessionStorage.setItem("userEmail", userEmail);
        sessionStorage.setItem("userPassword", userPassword);
        // sessionStorage.setItem("confirmPassword", confirmPassword);
        alert("data saved..")
        document.getElementById("signUp-form").reset();
        return true;

    } else {
        alert("Sorry, your browser does not support Web Storage...");
        return false;
    }
}

// validate the user input
function validateData(firstName, lastName, birthDate, gender, Address, userCity, userState, userCountry, mobileNO,
    clgName, clgCity, clgState, clgCountry, userEmail, userPassword, confirmPassword, t_cCheckBox) {

    // check if given data is empty or not
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == null || arguments[i] == "" || arguments[i] === "Choose...") {
            alert("please fill all details..");
            return false;
        }

    }

    //  Personal Details

    if (!checkfirstName(firstName)) {
        return false;
    }

    if (!checkLastName(lastName)) {
        return false;
    }

    if (!checkAddress(Address)) {
        return false;
    }
    if (!checkUserCity(userCity)) {
        return false;
    }

    if (!checkUserState(userState)) {
        return false;
    }

    if (!checkMobileNo(mobileNO)) {
        return false;
    }
    // Educational Details

    if (!checkClgName(clgName)) {
        return false;
    }

    if (!checkClgCity(clgCity)) {
        return false;
    }

    if (!checkClgState(clgState)) {
        return false;
    }

    if (!checkEmail(userEmail)) {
        return false;
    }

    if (!checkPassword(userPassword)) {
        return false;
    }

    if (!checkConfirmPassword(userPassword, confirmPassword)) {
        return false;
    }
    if (t_cCheckBox.checked != true) {
        alert("please select the checkbox, Accept all terms and condition..");
        return false;
    }
    return true;
}

function checkfirstName(firstName) {
    var regexFirstName = /^[a-zA-z]+$/;
    if (!regexFirstName.test(firstName)) {
        alert("enter valid firstName....");
        return false;
    }
    return true;
}

function checkLastName(lastName) {
    var regexLastName = /^[a-zA-z]+$/;
    if (!regexLastName.test(lastName)) {
        alert("enter valid lastName....");
        return false;
    }
    return true;

}

function checkAddress(Address) {
    var regexAddress = /^[#.0-9a-zA-Z\s, -]+$/;
    if (!regexAddress.test(Address)) {
        alert("enter valid Address....");
        return false;
    }
    return true;
}

function checkUserCity(userCity) {
    var regexUserCity = /^[.a-zA-Z]+$/;
    if (!regexUserCity.test(userCity)) {
        alert("enter valid userCity....");
        return false;
    }
    return true;
}

function checkUserState(userState) {
    var regexUserState = /^[.a-zA-Z]+$/;

    if (!regexUserState.test(userState)) {
        alert("enter valid userState....");
        return false;
    }
    return true;
}

function checkMobileNo(mobileNO) {
    var regexMobileNo = /^[0-9]{10}$/;
    if (!regexMobileNo.test(mobileNO)) {
        alert("enter valid MobileNo....");
        return false;
    }
    return true;
}

function checkClgName(clgName) {
    var regexclgName = /^[. a-zA-Z]+$/;
    if (!regexclgName.test(clgName)) {
        alert("enter valid clgName....");
        return false;
    }
    return true;
}

function checkClgCity(clgCity) {
    var regexclgCity = /^[. a-zA-Z]+$/;

    if (!regexclgCity.test(clgCity)) {
        alert("enter valid clgCity....");
        return false;
    }

    return true;
}

function checkClgState(clgState) {
    var regexclgState = /^[. a-zA-Z]+$/;
    if (!regexclgState.test(clgState)) {
        alert("enter valid clgState....");
        return false;
    }
    return true;
}

function checkEmail(userEmail) {
    var regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!regexEmail.test(userEmail)) {
        alert("enter valid Email....");
        return false;
    }
    return true;
}

function checkPassword(userPassword) {
    var regexPassword = /^([a-zA-Z0-9@*#]{8,20})$/;

    var regexPassLetter, regexPassDigit, regexPassSY;
    regexPassLetter = /[a-zA-z]/;
    regexPassDigit = /[0-9]/;
    regexPassSY = /[@#*]/;
    if (!regexPassword.test(userPassword)) {
        alert("enter valid Password....");
        return false;
    }
    if (userPassword.match(regexPassLetter) == null) {
        alert("Please enter atleast 1 character...");
        return false;
    }
    if (userPassword.match(regexPassDigit) == null) {
        alert("Please enter atleast 1 digit...");
        return false;
    }
    if (userPassword.match(regexPassSY) == null) {
        alert("Please enter atleast 1 special symbol from @, #, *...");
        return false;
    }
    return true;
}

function checkConfirmPassword(password, confirmPassword) {
    if (password != confirmPassword) {
        alert("confirm password not matched....");
        return false;
    }
    return true;
}