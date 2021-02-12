document.addEventListener('DOMContentLoaded', function(){
    //get all buttons with "archiveReservation" class
    const archiveReservationButtons = document.querySelectorAll('.archive_reservation');
    //loop on the buttons list
    archiveReservationButtons.forEach((button) => {
        //for each buttons, add an EventListener on the click
        button.addEventListener('click', (event) => {
            //get user id with the dataset (data-id)
            const id = event.target.dataset.id;
            const ok = event.target.dataset.ok;
            //throw deleteSubscriber function with user email we got
            archiveReservation(id);            
        });
    });
})