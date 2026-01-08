const input_display = document.querySelector(".input-display");
const result_display = document.querySelector(".result-display");

let numbers = []; // Gunakan satu nama saja agar konsisten
let symbols = [];
let start = true;
let number = "";

function display_input(input) {
    if (start) {
        input_display.textContent = "";
        start = false;
    }
    input_display.textContent += input;
    number += input.toString(); 
}

function add() {
    if (number !== "") {
        input_display.textContent += "+";
        numbers.push(Number(number)); 
        symbols.push("+");
        number = ""; 
    }
}
function min() {
    if (number !== "") {
        input_display.textContent += "-";
        numbers.push(Number(number)); 
        symbols.push("-");
        number = ""; 
    }
}
function divide() {
    if (number !== "") {
        input_display.textContent += "/";
        numbers.push(Number(number)); 
        symbols.push("/");
        number = ""; 
    }
}
function time() {
    if (number !== "") {
        input_display.textContent += "x";
        numbers.push(Number(number)); 
        symbols.push("x");
        number = ""; 
    }
}

function equal() {

    if (number !== "") {
        numbers.push(Number(number));
        number = "";
    }

    if (numbers.length === 0) return;


    let calc = numbers[0];


    for (let i = 1; i < numbers.length; i++) {
        let operator = symbols[i - 1];

        if (operator === "+") {
            calc += numbers[i];
        } else if (operator === "-") {
            calc -= numbers[i];
        } else if (operator === "x") {
            calc *= numbers[i];
        } else if (operator === "/") {
            calc /= numbers[i];
        }
    }

    result_display.textContent = "=" + calc;
    

    numbers = [];
    symbols = [];
    start = true;
}