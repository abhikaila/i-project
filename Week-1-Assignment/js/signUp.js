
// save the form data into sessionStorage
function saveData() {

    var userImage, firstName, lastName, birthDate, gender, Address, userCity, userState, userCountry, mobileNO,
        clgName, clgCity, clgState, clgCountry, userEmail, userPassword, t_cCheckBox;

    // get values from form input 
    userImage = document.getElementById('userImage').value;
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
    if (!validateData(userImage, firstName, lastName, birthDate, gender, Address, userCity, userState, userCountry,
        mobileNO, clgName, clgCity, clgState, clgCountry, userEmail, userPassword, confirmPassword, t_cCheckBox)) {
        return false;
    }

    if (typeof (Storage) !== "undefined") {
        // Store data into sesssion storage

        userInfo = {
            "firstName": firstName, "lastName": lastName, "birthDate": birthDate, "gender": gender,
            "address": Address, "userCity": userCity, "userState": userState, "userCountry": userCountry,
            "mobileNo": mobileNO, "clgName": clgName, "clgCity": clgCity, "clgState": clgState,
            "clgCountry": clgCountry, "userEmail": userEmail, "userPassword": userPassword
        };
        saveDataToSessionStorage(userInfo);

        alert("Data saved Successfully.")
        document.getElementById("signUp-form").reset();
        return true;

    } else {
        alert("Sorry, your browser does not support Web Storage.");
        return false;
    }
}

// validate the user input
function validateData(userImage, firstName, lastName, birthDate, gender, Address, userCity, userState, userCountry, mobileNO,
    clgName, clgCity, clgState, clgCountry, userEmail, userPassword, confirmPassword, t_cCheckBox) {

    // check if given data is empty or not
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] == null || arguments[i] == "" || arguments[i] === "Choose...") {
            alert("Please fill all details..");
            return false;
        }

    }

    //  Personal Details
    if (!checkfirstName(firstName)) return false;
    if (!checkLastName(lastName)) return false;
    if (!checkUserImage(userImage)) return false;
    if (!checkAddress(Address)) return false;
    if (!checkUserCity(userCity)) return false
    if (!checkUserState(userState)) return false;
    if (!checkMobileNo(mobileNO)) return false;

    // Educational Details
    if (!checkClgName(clgName)) return false;
    if (!checkClgCity(clgCity)) return false;
    if (!checkClgState(clgState)) return false;
    if (!checkEmail(userEmail)) return false;
    if (!checkPassword(userPassword)) return false;
    if (!checkConfirmPassword(userPassword, confirmPassword)) return false;
    if (t_cCheckBox.checked != true) {
        alert("Please select the checkbox, Accept all terms and condition..");
        return false;
    }
    return true;
}

// save data to session Storage
function saveDataToSessionStorage(userInfo) {
    for (const [key, value] of Object.entries(userInfo)) {
        sessionStorage.setItem(key, value);
    }
}

function checkfirstName(firstName) {
    var regexFirstName = /^[a-zA-z]+$/;
    if (!regexFirstName.test(firstName)) {
        alert("Enter valid firstName.");
        return false;
    }
    return true;
}

function checkLastName(lastName) {
    var regexLastName = /^[a-zA-z]+$/;
    if (!regexLastName.test(lastName)) {
        alert("Enter valid lastName.");
        document.getElementById('lastName').focus();
        return false;
    }
    return true;

}

function checkUserImage(userImage) {
    var extension = userImage.substr(userImage.lastIndexOf('.') + 1).toLowerCase();
    var allowedExtensions = ['jpg', 'png', 'jpeg', ''];

    if (allowedExtensions.indexOf(extension) === -1) {
        alert('Invalid file Format. Only ' + allowedExtensions.join(', ') + ' are allowed.');
        document.getElementById('userImage').value = ""
        return false;
    }

    if (!checkImageSize()) return false;
    try {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            sessionStorage.setItem("user-Image", reader.result);
        });
        reader.readAsDataURL(document.getElementById('userImage').files[0]);
    } catch (err) {
        console.log(err);
    }
    return true;

}

function checkImageSize() {
    const file = document.getElementById('userImage');
    // Check if any file is selected. 
    if (file.files.length > 0) {
        for (let i = 0; i <= file.files.length - 1; i++) {
            let fsize = file.files.item(i).size;
            let fileSize = Math.round((fsize / 1024));
            // The size of the file. 
            if (fileSize >= 2048) {
                alert("Image File too Big, please select a file less than 2mb.");
                return false;
            }
        }
    }
    return true;
}

function checkAddress(Address) {
    var regexAddress = /^[#.0-9a-zA-Z\s, -]+$/;
    if (!regexAddress.test(Address)) {
        alert("Enter valid Home Address.");
        return false;
    }
    return true;
}

function checkUserCity(userCity) {
    var regexUserCity = /^[.a-zA-Z ]+$/;
    if (!regexUserCity.test(userCity)) {
        alert("Enter valid Home City.");
        return false;
    }
    return true;
}

function checkUserState(userState) {
    var regexUserState = /^[.a-zA-Z ]+$/;

    if (!regexUserState.test(userState)) {
        alert("Enter valid Home State.");
        return false;
    }
    return true;
}

function checkMobileNo(mobileNO) {
    var regexMobileNo = /^[0-9]{10}$/;
    if (!regexMobileNo.test(mobileNO)) {
        alert("Enter valid MobileNo.");
        return false;
    }
    return true;
}

function checkClgName(clgName) {
    var regexclgName = /^[. a-zA-Z]+$/;
    if (!regexclgName.test(clgName)) {
        alert("Enter valid college Name.");
        return false;
    }
    return true;
}

function checkClgCity(clgCity) {
    var regexclgCity = /^[. a-zA-Z]+$/;

    if (!regexclgCity.test(clgCity)) {
        alert("Enter valid college City.");
        return false;
    }

    return true;
}

function checkClgState(clgState) {
    var regexclgState = /^[. a-zA-Z]+$/;
    if (!regexclgState.test(clgState)) {
        alert("Enter valid College State.");
        return false;
    }
    return true;
}

function checkEmail(userEmail) {
    var regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!regexEmail.test(userEmail)) {
        alert("EEter valid Email.");
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

    if (userPassword.match(regexPassLetter) == null) {
        alert("Please enter atleast 1 alphabetic character in Password...");
        return false;
    }
    if (userPassword.match(regexPassDigit) == null) {
        alert("Please enter atleast 1 digit in Password...");
        return false;
    }
    if (userPassword.match(regexPassSY) == null) {
        alert("Please enter atleast 1 special symbol from @, #, * in Password.");
        return false;
    }
    if (!regexPassword.test(userPassword)) {
        alert("please enter valid Password.");
        return false;
    }
    return true;
}

function checkConfirmPassword(password, confirmPassword) {
    if (password != confirmPassword) {
        alert("confirm password not matched.");
        return false;
    }
    return true;
}