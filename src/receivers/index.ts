
const receiversData = {
    "Receivers": [
        {
            "Name": "Jane Doe",
            "Address": "6775 Siwell Road Jackson, MS - 39272",
            "Quantity": "6",
            "Needed Items": "XL Coat, Blanket",
            "Alergies": "Peanut",
            "Bio": "Mom, 5 kids",
            "Pickup Times": {
                "Monday": null,
                "Tuesday": null,
                "Wednesday": null,
                "Thursday": null,
                "Friday": "8:30am-2:30pm",
                "Saturday": "8:30am-2:30pm",
                "Sunday": null
            }
        },
        {
            "Name": "John Smith",
            "Address": "1100 W Capitol St Jackson, MS - 39203",
            "Quantity": "3",
            "Needed Items": "XL Coat, Blanket",
            "Alergies": "Gluten",
            "Bio": "Dad, 2 kids",
            "Pickup Times": {
                "Monday": null,
                "Tuesday": null,
                "Wednesday": null,
                "Thursday": null,
                "Friday": "8:30am-2:30pm",
                "Saturday": null,
                "Sunday": null
            }
        },
        {
            "Name": "Jacob Hill",
            "Address": "1814 Shady Lane Drive Jackson, MS - 39204",
            "Quantity": "2",
            "Needed Items": "XL Coat, S Coat",
            "Alergies": null,
            "Bio": "Young Couple",
            "Pickup Times": {
                "Monday": null,
                "Tuesday": null,
                "Wednesday": null,
                "Thursday": null,
                "Friday": null,
                "Saturday": null,
                "Sunday": "8:30am-2:30pm"
            }
        },
        {
            "Name": "Denise Silverton",
            "Address": "1100 W Capitol St Jackson, MS - 39203",
            "Quantity": "1",
            "Needed Items": "1 Year Old Diapers, S Coat",
            "Alergies": null,
            "Bio": "Single Female",
            "Pickup Times": {
                "Monday": "5:00pm-9:00pm",
                "Tuesday": "9:00am-9:00pm",
                "Wednesday": null,
                "Thursday": null,
                "Friday": "5:00pm-9:00pm",
                "Saturday": "10:00am-3:00pm",
                "Sunday": null
            }
        },
        {
            "Name": "Louis Thompson",
            "Address": "1814 Shady Lane Drive Jackson, MS - 39204",
            "Quantity": "5",
            "Needed Items": "Toilet Paper, S Coat",
            "Alergies": "Eggs, Lactose Intolerant",
            "Bio": "Family of 5",
            "Pickup Times": {
                "Monday": "6:00pm-9:00pm",
                "Tuesday": "4:00am-9:00pm",
                "Wednesday": null,
                "Thursday": "8:00am-5:00pm",
                "Friday": "5:00pm-9:00pm",
                "Saturday": null,
                "Sunday": null
            }
        }
    ]
};

function displayReceivers(receivers: any[]) {
    const receiversList = document.getElementById("receivers-list");
    if (!receiversList) return;

    receivers.forEach(receiver => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow-xl";
        
        card.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${receiver.Name}</h2>
                <div class="space-y-2">
                    <div class="badge badge-primary">${receiver.Quantity} People</div>
                    ${receiver.Alergies ? `<div class="badge badge-warning">Allergies: ${receiver.Alergies}</div>` : ''}
                    
                    <p><span class="font-bold">Address:</span> ${receiver.Address}</p>
                    <p><span class="font-bold">Needed Items:</span> ${receiver["Needed Items"]}</p>
                    <p><span class="font-bold">Bio:</span> ${receiver.Bio}</p>
                    
                    <div class="collapse collapse-plus bg-base-200">
                        <input type="checkbox" /> 
                        <div class="collapse-title font-medium">
                            Pickup Times
                        </div>
                        <div class="collapse-content"> 
                            <div class="space-y-1">
                                ${Object.entries(receiver["Pickup Times"])
                                    .map(([day, time]) => `
                                        <p>${day}: <span class="font-medium">${time || 'Not available'}</span></p>
                                    `).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="card-actions justify-end mt-4">
                        <a href="https://www.google.com/maps?q=${encodeURIComponent(receiver.Address)}" 
                           target="_blank" 
                           class="btn btn-primary">
                            View on Maps
                        </a>
                    </div>
                </div>
            </div>
        `;

        receiversList.appendChild(card);
    });
}

// Initialize the display
displayReceivers(receiversData.Receivers);
