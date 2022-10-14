

//vowelOrCon
function vowelOrCon(){
    let a = (document.getElementById("number2").value).toLowerCase();
    let show2 = document.getElementById("show2");
switch (a) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    show2.innerHTML = "the letter is vowel";
    break;
    default:
    show2.innerHTML = "the letter is consonant";
    break;
}

}

//Machine Problem 2
var body = document.getElementById("body");
var number1 = document.getElementById("input1");
var number2 = document.getElementById("input2");
var output = document.getElementById("result");
var result;
function add() {
console.log(result = parseInt(number1.value) + parseInt(number2.value));
}
function minus() {
console.log(result = parseInt(number1.value) - parseInt(number2.value));
}
function divide() {
console.log(result = parseInt(number1.value) / parseInt(number2.value));
}
function multiply() {
console.log(result = parseInt(number1.value) * parseInt(number2.value));
}
function eq() {
output.innerHTML = result;
}
function cl() {
location.reload();
number1.value = "";
number2.value = "";
output.value = "";

}

//show date 
var date_output = document.querySelector(".date-output");
var date = new Date();
var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
date_output.innerHTML = "The current month is " + monthNames[date.getMonth()];



