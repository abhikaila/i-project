
// load the data from sessionStorage
if (typeof (Storage) !== "undefined") {

    document.getElementById("firstName1").innerHTML = ": " + sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName");
    var dob = sessionStorage.getItem("birthDate");
    var birthday = dob.slice(8, 10) + "-" + dob.slice(5, 7) + "-" + dob.slice(0, 4);
    document.getElementById("birthDate").innerHTML = ": " + birthday;
    document.getElementById("gender").innerHTML = ": " + sessionStorage.getItem("gender");
    document.getElementById("address").innerHTML = ": " + sessionStorage.getItem("Address");
    document.getElementById("userCity").innerHTML = ": " + sessionStorage.getItem("userCity");
    document.getElementById("userState").innerHTML = ": " + sessionStorage.getItem("userState");
    document.getElementById("userCountry").innerHTML = ": " + sessionStorage.getItem("userCountry");
    document.getElementById("mobileNo").innerHTML = ": " + sessionStorage.getItem("mobileNo");
    document.getElementById("clgName").innerHTML = ": " + sessionStorage.getItem("clgName");
    document.getElementById("clgCity").innerHTML = ": " + sessionStorage.getItem("clgCity");
    document.getElementById("clgState").innerHTML = ": " + sessionStorage.getItem("clgState");
    document.getElementById("clgCountry").innerHTML = ": " + sessionStorage.getItem("clgCountry");
    document.getElementById("userEmail").innerHTML = ": " + sessionStorage.getItem("userEmail");

} else {
    alert("Sorry, your browser does not support Web Storage...");
}
// load Profile image
document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataURL = sessionStorage.getItem("user-Image");
    if (recentImageDataURL) {
        document.querySelector("#userImage").setAttribute("src", recentImageDataURL);
    } else {
        console.log("No image found..!!1");
    }
});


// clear the sessioStorage data and logOut user
function logOut() {
    sessionStorage.clear();
    window.history.back();
    return false
}