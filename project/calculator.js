function clearResult() {
    document.getElementById('result').value = '';
}

function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        var result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
