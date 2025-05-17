document.addEventListener('DOMContentLoaded', function() {
    const templifyText = document.querySelector('.templify-26ecf95855a6');
    
    if (templifyText) {
        templifyText.style.cursor = 'pointer';
        templifyText.addEventListener('click', function() {
            window.location.href = './landingpage.html';
        });
    }
});