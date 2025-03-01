document.addEventListener('DOMContentLoaded', function () {
    fetch('receivers.json')
        .then(response => response.json())
        .then(data => {
            const receiversContainer = document.getElementById('receivers-container');

            if (receiversContainer) {
                data.Receivers.forEach((receiver: { Name: string; Address: string; Quantity: string; Alergies: string; Bio: string;}) => {
                    const receiverElement = document.createElement('div');
                    receiverElement.classList.add('receiver');

                    receiverElement.innerHTML = `
                        <h2>${receiver.Name}</h2>
                        <p><strong>Address:</strong> ${receiver.Address}</p>
                        <p><strong>Quantity:</strong> ${receiver.Quantity}</p>
                        <p><strong>Allergies:</strong> ${receiver.Alergies}</p>
                        <p><strong>Bio:</strong> ${receiver.Bio}</p>
                    `;

                    receiversContainer.appendChild(receiverElement);
                });
            }
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

