//declare en constante variable with the beginning of the link
const baseUrl ='https://annelaurebon.sites.3wa.io/FINAL%20PROJECT/';

document.addEventListener('DOMContentLoaded', function(){
    
    let picture = document.querySelectorAll("img");
    
    picture.forEach((img) => {
        
        img.addEventListener('click', (event) => {
            let id = event.target.dataset.id;
            pictureZoom(id, event.target);
        });
    });
    
    let cross = document.getElementById('img_cross');
    cross.addEventListener('click', escapeFullScreenImg)
    
    let screen = document.getElementById('full_screen_img');
    
    if(event.target != screen) {
        screen.addEventListener('click', escapeFullScreenImg);
    }
})