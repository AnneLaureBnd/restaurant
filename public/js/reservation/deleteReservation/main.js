//declare a constante variable with the beginning of the link
/*const baseUrl ='https://annelaurebon.sites.3wa.io/FINAL%20PROJECT/';*/


document.addEventListener('DOMContentLoaded', function(){
    //get all buttons with "archiveReservation" class
    const deleteReservationButtons = document.querySelectorAll('.deleteReservation');
    //loop on the buttons list
    deleteReservationButtons.forEach((button) => {
        //for each buttons, add an EventListener on the click
        button.addEventListener('click', (event) => {
            //get user id with the dataset (data-id)
            const ok = event.target.dataset.ok;
            //throw deleteSubscriber function with user email we got
            deleteReservation(ok);            
        });
    });
})