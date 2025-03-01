document.addEventListener('DOMContentLoaded', function () {
    fetch('receivers.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var receiversContainer = document.getElementById('receivers-container');
        data.Receivers.forEach(function (receiver) {
            var receiverElement = document.createElement('div');
            receiverElement.classList.add('receiver');
            receiverElement.innerHTML = "\n                    <h2>".concat(receiver.Name, "</h2>\n                    <p><strong>Address:</strong> ").concat(receiver.Address, "</p>\n                    <p><strong>Quantity:</strong> ").concat(receiver.Quantity, "</p>\n                    <p><strong>Allergies:</strong> ").concat(receiver.Alergies, "</p>\n                ");
            receiversContainer.appendChild(receiverElement);
        });
    })
        .catch(function (error) { return console.error('Error fetching JSON:', error); });
});
