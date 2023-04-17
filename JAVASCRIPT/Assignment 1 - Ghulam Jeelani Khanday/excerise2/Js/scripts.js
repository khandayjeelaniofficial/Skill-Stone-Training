let res = "";
let num = 1;

while (num < 50) {
    res += num + "<br>";
    num += 2;
}

document.getElementById("oddNum").innerHTML = res;