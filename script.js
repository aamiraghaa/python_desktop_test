document.addEventListener('DOMContentLoaded', function () {
    var timeSelection = document.getElementById('timeSelection');
    var amountSelection = document.getElementById('amountSelection');
    var amountOutput = document.getElementById('amountOutput');

    // Set default time value to the current hour
    var currentHour = new Date().getHours();
    timeSelection.value = currentHour;

    // Update the output for the time slider
    timeSelection.addEventListener('input', function () {
        var selectedTime = parseInt(timeSelection.value);
        timeSelection.value = selectedTime;
    });

    // Update the output for the amount slider
    amountSelection.addEventListener('input', function () {
        amountOutput.textContent = amountSelection.value + ' ml';
    });
});
