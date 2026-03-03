// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {

    var button = document.getElementById('cta-button')
var image=document.getElementById('dog-image')
var buttonPressed = 0; 
    button.addEventListener('click', function(){
       button.classList.add('animate__wobble');
       image.classList.add(opacity-0);
    })
if (buttonPressed ===0) {
    buttonPressed=1
    image.classList. add('opacity-0');
    else {
        buttonPressed=0
        image.classList.remove('opacity=0')
    }
}

});