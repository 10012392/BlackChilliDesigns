//Java Script 

//Validate Contact Form 
function validateForm(fname, lname, email, phnum) {

    if (fname.value == "") {
        window.alert("Please Enter Your First Name");
        fname.focus;
        return false;
    }

    if (email.value == "") {
        window.alert("Please Enter Email Address");
        email.focus;
        return false;
    }
    if (phnum.value == "" || isNaN(phnum.value)) {
        window.alert("Please Enter Your Phone Number");
        email.focus;
        return false
    }
    else 
    window.alert("Your message has been sent.")
    return true 
}

//Collects And Displays Data
function printData() {
    var fname = document.forms["ContactForm"]["firstname"];
    var lname = document.forms["ContactForm"]["lastname"];
    var email = document.forms["ContactForm"]["emailaddress"];
    var phnum = document.forms["ContactForm"]["phonenumber"];

    if (validateForm(fname, lname, email, phnum) == true) {
        var dataDiv = document.getElementById("data");
        dataDiv.innerHTML += "<br>First Name: " + fname.value;
        dataDiv.innerHTML += '<br>Last Name: ' + lname.value;
        dataDiv.innerHTML += '<br>Email Address: ' + email.value;
        dataDiv.innerHTML += '<br>Phone Number: ' + phnum.value;
        dataDiv.innerHTML += '<br>Message: ' + subject.value;
    }

}