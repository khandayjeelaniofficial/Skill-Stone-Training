function checkdept() {
    dept = document.dept.d_name.value;

    if (dept == "mechanical" || dept == "Mechanical" || dept == "MECHANICAL") {
        document.getElementById("result").innerHTML = "Choosen Mechanical Department";
    } else if (dept == "computer" || dept == "Computer" || dept == "COMPUTER") {
        document.getElementById("result").innerHTML = "Choosen Computer Department";
    } else if (dept == "electronics" || dept == "Electronics" || dept == "ELECTRONICS") {
        document.getElementById("result").innerHTML = "Choosen Electronics Department";
    } else {
        document.getElementById("result").innerHTML = "No Department Found of Such Type";
    }
}