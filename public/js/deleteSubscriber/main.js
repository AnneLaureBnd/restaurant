//declare a constante variable with the beginning of the link
const baseUrl ='https://annelaurebon.sites.3wa.io/FINAL%20PROJECT/';


document.addEventListener('DOMContentLoaded', function(){
    //get all buttons with "deleteSubscriber" class
    const deleteSubscribersButtons = document.querySelectorAll('.delete_subscriber');
    //loop on the buttons list
    deleteSubscribersButtons.forEach((button) => {
        //for each buttons, add an EventListener on the click
        button.addEventListener('click', (event) => {
            //get user email with the dataset (data-id)
            const email = event.target.dataset.email;
            //throw deleteSubscriber function with user email we got
            deleteSubscriber(email);            
        });
    });
})