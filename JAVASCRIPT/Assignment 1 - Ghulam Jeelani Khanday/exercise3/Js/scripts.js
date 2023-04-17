function marksgrade() {
    grade = document.grade.text1.value;
    switch (grade) {
        case 'A++':
            document.getElementById("result").innerHTML = "Excellent Grade";
            break;
        case 'A':
            document.getElementById("result").innerHTML = "Good Grade";
            break;
        case 'B++':
            document.getElementById("result").innerHTML = "Satisfactory Grade";
            break;
        case 'B':
            document.getElementById("result").innerHTML = "Needs Improvement Grade";
            break;
        case 'a++':
            document.getElementById("result").innerHTML = "Excellent Grade";
            break;
        case 'a':
            document.getElementById("result").innerHTML = "Good Grade";
            break;
        case 'b++':
            document.getElementById("result").innerHTML = "Satisfactory Grade";
            break;
        case 'b':
            document.getElementById("result").innerHTML = "Needs Improvement Grade";
            break;
        default:
            document.getElementById("result").innerHTML = "Invalid Grade or Failed Grade Achieved";
    }
}