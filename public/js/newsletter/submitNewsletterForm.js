async function submitNewsletterForm(){
    //create an object for php with datas from the form
    let datasForm = new FormData(document.getElementById('newsletter_form'));
    //post
    let req = new Request('index.php?page=newsletter', {
        method: 'POST',
        body: datasForm,
    });
    //php response
    let response = await fetch(req);
    response = await response.json();
    
    //declare variables with all the html elements of the form
    let form = document.getElementById('newsletter_form');
    let input = document.getElementById('subscriber_email');
    let button = document.getElementById('submit_newsletter_form');
    let wrong = document.getElementById('incorrect_email');
    let success = document.getElementById('valid_newsletter_form');
    
    //if the user is already registered, throw this error
    if (response.error) {
        //remove the success text
        success.style.display = 'none';
        //add the error css
        input.classList.add('error_input');
        button.classList.add('error_form');
        wrong.classList.add('error_email');
        //throw error
        wrong.innerHTML = response.error;
        
    } 
    //if the user subscribed for the first time, throw this success
    else {
        //remove the error text
        wrong.style.display = 'none';
        //remove the subscribe form
        form.style.display = 'none';
        //add the success text
        success.style.display = 'block';
        //throw success
        success.innerHTML= response.success;
    }

}

