// Script for Registration Form
function validateRegister() {
    let name = document.getElementById('name').value;
    let agreement = document.getElementById('agreement').value;
    var regex = /^[A-Za-z0-9 ]+$/;
    var isValid = regex.test(name);

    if (name == '') {
        alert('Please Fill All The Necessary Fields.');
        return false;
    } else if (agreement.value == false) {
        alert("Please Check The Agreement Below");
    } else {
        alert('You Have Successfully Registered On Talentelgia Technologies Pvt. Ltd. Welcome To Our Family!!');
        window.location = 'login.html';
    }
}


//Script for Login Page
function validateLogin() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pwd').value;

    if (email == '' || pass == '') {
        alert('Please fill the Email and Password Fields');
        return false;
    } else {
        alert('Welcome To The Talentelgia Technologies Pvt. Ltd. Login Successfully Done.');
        window.location = "personalPage.html";
    }

}