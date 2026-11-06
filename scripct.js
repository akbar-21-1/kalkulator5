const result = document.getElementById("result");

let currentInput = "0";

function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = number;
    } else {
        currentInput += number;
    }

    result.value = currentInput;
}