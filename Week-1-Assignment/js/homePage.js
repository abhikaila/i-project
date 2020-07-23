
userData = ["gender", "address", "userCity", "userState", "userCountry", "mobileNo", "clgName", "clgCity", "clgState",
    "clgCountry", "userEmail"]
// load the data from sessionStorage
if (typeof (Storage) !== "undefined") {

    // getValues from session storage
    getValuesFromSessionStorage(userData);

    document.getElementById("firstName1").innerHTML = ": " + sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName");
    var dob = sessionStorage.getItem("birthDate");
    var birthday = dob.slice(8, 10) + "-" + dob.slice(5, 7) + "-" + dob.slice(0, 4);
    document.getElementById("birthDate").innerHTML = ": " + birthday;

    const recentImageDataURL = sessionStorage.getItem("user-Image");
    if (recentImageDataURL) {
        document.getElementById("userImage").src = recentImageDataURL;
    } else {
        console.log("No image found..!!1");
    }
} else {
    alert("Sorry, your browser does not support Web Storage...");
}

// get Values from sessionStorage
function getValuesFromSessionStorage(userData) {
    for (const key of userData) {
        console.log(key);
        document.getElementById(key).innerHTML = ": " + sessionStorage.getItem(key);
    }
}

// clear the sessioStorage data and logOut user
function logOut() {
    sessionStorage.clear();
    window.history.back();
    return false
}