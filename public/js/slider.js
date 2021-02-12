function slider() {
    //pick the "visible" class from the first <li>, and change it by "novisible"
    let firstLi = document.querySelector('.visible');
    firstLi.classList.remove('visible');
    firstLi.classList.add('novisible');
    //add a loop because without it, it will end at the first round
    let secondLi = firstLi.nextElementSibling;
    if(secondLi == null){
        secondLi = document.querySelector('.slides>li');
    }
    secondLi.classList.remove('novisible');
    secondLi.classList.add('visible');
}
//wait the DOMContentLoaded and then, pick the first <li>, change the "visible" class to "novisible", after 2sec : start the slider function
document.addEventListener('DOMContentLoaded', function(){
    let firstSlide = document.querySelector('.slides>li');
    firstSlide.classList.remove('novisible');
    firstSlide.classList.add('visible');
    let timer = setInterval(slider, 5000);
});