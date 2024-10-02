document.addEventListener('DOMContentLoaded', function(){
    const popups = document.querySelectorAll('.popup');
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const closeButtons = document.querySelectorAll('.close');

    popupTriggers.forEach((trigger, index) => {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            popups[index].style.display = 'block';
        });
    });
    
    closeButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            popups[index].style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        popups.forEach(popup => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
});