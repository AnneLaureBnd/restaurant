function pictureZoom(id, image) {
    
    let zoom = document.querySelector(`img[data-id="${id}"]`);
    
    if(image.width > image.height) {
        zoom.classList.add('big_img_width');
    }
    else {
        zoom.classList.add('big_img_height');
    }
    
    zoom.style.transform = "none";
    zoom.style.transition = "none";
    
    //qd je clique, le bg sombre arrive avec la croix
    let imgZoom = document.getElementById('full_screen_img');
    imgZoom.classList.add('full_screen_img_visible');
    
    let body = document.querySelector('body');
    body.style.position = "fixed";
    
}

function escapeFullScreenImg(id) {
    
    let image = document.querySelector('img[class*="big_img_"]');

    if (image) {
        image.classList.remove('big_img_width');
        image.classList.remove('big_img_height');
        image.style.transform = "";
        image.style.transition = "";
    }
    
    //le bg et la croix
    let imgZoom = document.getElementById('full_screen_img');
    imgZoom.classList.remove('full_screen_img_visible');
    
    let body = document.querySelector('body');
    body.style.position = "";
    
}