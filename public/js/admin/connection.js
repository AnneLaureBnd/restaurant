async function submitConnection(){
    //create an object for php with datas from the form
    let datasForm = new FormData(document.getElementById('connection_form'));
    //post
    let req = new Request('index.php?page=login', {
        method: 'POST',
        body: datasForm,
    });
    //php response
    let response = await fetch(req);
    //if email or password are wrongs
    if (response.status === 401) {
        response = await response.json();
        
        //declare variables with all the html elements of the form
        let form = document.getElementById('connection_form');
        let inputs = document.querySelectorAll('input');
        
        let wrong = document.getElementById('incorrect_email');
        //throw error
        wrong.innerHTML = response.error;
        //add the css errors
        form.classList.add('error_form');
        for(let i=0; i<inputs.length; i++) {
            inputs[i].classList.add('error_input');
        }
        
    }
    else {
        window.location.reload(true);
    }
}