function collect_data() {
    // Reset error messages
    document.getElementById("FirstNameError").innerHTML = "";
    document.getElementById("LastNameError").innerHTML = "";
    document.getElementById("EmailError").innerHTML = "";
    document.getElementById("PhoneError").innerHTML = "";
    document.getElementById("QueryError").innerHTML = "";

    let fName = document.getElementById("FirstName").value;
    let lName = document.getElementById("LastName").value;
    let email = document.getElementById("Email").value;
    let phone = document.getElementById("Phone").value;
    let query = document.getElementById("Query").value;

    let isValid = true;

    if (fName == "") {
        document.getElementById("FirstNameError").innerHTML = "Field Value need to be filled up";
        isValid = false;
    }
    if (lName == "") {
        document.getElementById("LastNameError").innerHTML = "Field Value need to be filled up";
        isValid = false;
    }
    if (email == "") {
        document.getElementById("EmailError").innerHTML = "Field Value need to be filled up";
        isValid = false;
    }
    if (phone == "") {
        document.getElementById("PhoneError").innerHTML = "Field Value need to be filled up";
        isValid = false;
    }
    if (query == "") {
        document.getElementById("QueryError").innerHTML = "Field Value need to be filled up";
        isValid = false;
    }

    if (isValid) {
        console.log("First Name: " + fName);
        console.log("Last Name: " + lName);
        console.log("Email: " + email);
        console.log("Phone: " + phone);
        console.log("Query: " + query);
        alert("Form Submitted Successfully!");
        return true;
    }

    return false;
}