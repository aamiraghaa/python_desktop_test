function submitData() {
    var timeSelection = document.getElementById('timeSelection').value;
    var amountSelection = document.getElementById('amountSelection').value;

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Specify the request type and URL
    xhr.open('POST', '/submit_data', true);

    // Set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Set up a callback function to handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(JSON.parse(xhr.responseText));
                // You can handle the response from the server here
            } else {
                console.error('Error:', xhr.status);
            }
        }
    };

    // Create the data to be sent to the server
    var data = 'time=' + encodeURIComponent(timeSelection) + '&amount=' + encodeURIComponent(amountSelection);

    // Send the request
    xhr.send(data);
}
