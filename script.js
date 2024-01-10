document.addEventListener('DOMContentLoaded', function () {
    var amountSelection = document.getElementById('amountSelection');
    var amountOutput = document.getElementById('amountOutput');

    amountSelection.addEventListener('input', function () {
        amountOutput.textContent = amountSelection.value + ' ml';
    });
});
