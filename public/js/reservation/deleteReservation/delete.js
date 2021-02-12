async function deleteReservation(ok) {
    //ask confirmation to archive reservation
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette réservation ? Cette action sera irréversible.")) {
        
        //new variable with deleteReservation page as parameter and ok to change
        let req = new Request(`index.php?page=deleteReservation&ok=${ok}`, { method: 'GET'});

        // throw the request and wait for the response
        let response = await fetch(req);
        response = await response.json();
        
        let wrong = document.getElementById('errorDeleteReservation');
        let success = document.getElementById('successDeleteReservation');
        wrong.style.display = 'none';
        success.style.display = 'none';

        //in case of error
        if (response.error) {
        
        //show the error text
        wrong.style.display = "block";
        wrong.innerHTML = `Erreur : La réservation n'a pas pu être supprimée.`
        
        } 
        
        else {
            
            // Dans le cas où c'est un succès, je récupère la ligne du tableau qui correspond à l'email de l'utilisateur en utilisant encore une fois le data-id.
            //refresh mon tableau toutes les secondes
            
            const row = document.querySelector(`tr[data-ok="${ok}"]`);
            
            // Je remove pour supprimer l'element du DOM.
            row.remove();
            
            //add the success text
            success.style.display = 'block';
            success.innerHTML = `La réservation a bien été supprimée.`;
            
            
        }
    }
    else {
        event.preventDefault();
    }
}