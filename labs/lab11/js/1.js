function addToRes(value) {
    document.getElementById('result').value += value;
}

function calcRes() {
    const result = document.getElementById('result').value;
    const calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
}

function clearRes() {
    document.getElementById('result').value = '';
}