function validate() {
    let name = document.getElementById('name').value;
    //let gender = document.getElementById('gender').value;
    //let home = document.getElementById('hometown').value;
    //let address = document.getElementById('address').value;
    //let skill = document.getElementById('skill').value;
    let pwd = document.getElementById('pwd').value;
    var regex = /^[A-Za-z0-9 ]+$/;
    var isValid = regex.test(name);

    if (name == '') {
        alert('Name Cannot Be Empty.')
    } else if (/\d/.test(name)) {
        alert('Name cannot have Numbers');
    } else if (!isValid) {
        alert("Name Can't Contain Any Special Character");
    } else if (name.length >= 2 && name.length <= 30) {
        alert("Name Length Should Be Between 2 To 30 Characters Long.");
    } else if (pwd == '') {
        alert('Password cannot be empty.')
    } else {
        alert('Details Submitted Successfully!');
    }
}