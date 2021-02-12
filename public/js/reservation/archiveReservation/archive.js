async function archiveReservation(id) {
    //ask confirmation to archive reservation
    if (window.confirm("Êtes-vous sûr de vouloir archiver cette réservation ?")) {
        
        //new variable with archiveReservation page as parameter and id to change
        let req = new Request(`index.php?page=archiveReservation&id=${id}`, { method: 'GET'});
        /*let reqSec = new Request(`index.php?page=deleteReservation&ok=${ok}`, {method: 'GET'});*/

        // throw the request and wait for the response
        let response = await fetch(req);
        response = await response.json();
        
        console.log(response)
        
        /*let responseSec = await fetch(reqSec);
        responseSec = await responseSec.json();*/
        
        let wrong = document.getElementById('error_archive_reservation');
        let success = document.getElementById('success_archive_reservation');
        wrong.style.display = 'none';
        success.style.display = 'none';

        //in case of error
        if (response.error /*|| responseSec.error*/) {
        
        //show the error text
        wrong.style.display = "block";
        wrong.innerHTML = `Erreur : La réservation n'a pas pu être archivée.`;
        
        } 
        
        else {
            
            //in success case, take row in table with id_reservation with using data-id
            
            let row = document.querySelector(`tr[data-id="${id}"]`);
            
            let table = document.querySelector('#archive_reservations');
            
            row.removeAttribute('data-id');
            row.setAttribute('data-ok', id);
            
            // move the row to the archived reservations
            table.appendChild(row);
            
            //dernier bouton est un check, on veut que ça soit une trash en le déplaçant, on sélectionne la dernière colonne
            let removeButton = row.lastElementChild;
            
            // replace the check button with a remove button
            removeButton.innerHTML = `
                <button class="delete_reservation" type="button" data-ok="${id}">
                    <i class="fas fa-trash" data-ok="${id}"></i>
                </button>
            `;
            
            row.classList.add('new_archive_row');
            
            // add an eventListener on the new button
            removeButton.children[0].addEventListener('click', (event) => {
                deleteReservation(id);            
            });
            
            //add the success text
            success.style.display = 'block';
            success.innerHTML = `La réservation a bien été archivée.`;
        }
    }
    
    else {
        event.preventDefault();
    }
}