function calculateSalary(num1, num2) {
    var res = num1 + num2;
    return res;
}

function displaySal() {
    const n1 = 10000;
    const n2 = 5000;

    document.getElementById('show').innerHTML = n1 + " + " + n2 + " = " + calculateSalary(n1, n2);
}