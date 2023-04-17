function validateFirst() {
    let firstName = document.getElementById("firstName").value;
    if (firstName == '') {
        alert("Invalid Name");
        document.getElementById('disp1').innerHTML = "Empty Username Entered";
    }
}

function validateSecond() {
    let lastName = document.getElementById('lastName').value;
    let txt = "";

    if (confirm("You Have Entered " + lastName + ". Press OK to Continue") == true) {
        document.getElementById('disp2').innerHTML = "You Have Confirmed To Continue.";
    } else {
        document.getElementById('disp2').innerHTML = "Cannot Proceed Further, You Cancelled it.";
    }
}