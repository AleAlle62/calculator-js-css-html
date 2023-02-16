let result = document.getElementById('result');

function addNumber(number) {
    result.value += number;
}

function addOperator(operator) {
    result.value += operator;
}

function calculate() {
    result.value = eval(result.value);
}

function clearResult() {
    result.value = '';
}
