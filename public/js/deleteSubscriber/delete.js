async function deleteSubscriber(email) {
    //ask confirmation to delete user email
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce contact ? Cette action sera irréversible.")) {
        
        //new variable with delete-subscriber page as parameter and user email to delete
        let req = new Request(`index.php?page=deleteSubscriber&email=${email}`, { method: 'GET'});

        // throw the request and wait for the response
        let response = await fetch(req);
        response = await response.json();
        
        let wrong = document.getElementById('error_delete_user');
        let success = document.getElementById('success_delete_user');
        wrong.style.display = 'none';
        success.style.display = 'none';

        //in case of error
        if (response.error) {
        
        //show the error text
        wrong.style.display = "block";
        wrong.innerHTML = `Erreur : L'utilisateur n'a pas pu être supprimé.`
        
        } 
        
        else {
            
            // Dans le cas où c'est un succès, je récupère la ligne du tableau qui correspond à l'email de l'utilisateur en utilisant encore une fois le data-id.
            const row = document.querySelector(`tr[data-email="${email}"]`);
            
            // Je remove pour supprimer l'element du DOM.
            row.remove();
            
            //add the success text
            success.style.display = 'block';
             success.innerHTML = `L'utilisateur a bien été supprimé.`
        }
    }
    else {
        event.preventDefault();
    }
}