document.addEventListener('DOMContentLoaded', function() {
    const portfolioButton = document.querySelector('.group-26e24313cf36');
    
    if (portfolioButton) {
        portfolioButton.style.cursor = 'pointer';
        
        portfolioButton.addEventListener('click', function() {
            window.location.href = 'portfolio.html';
        });
        
        // Add hover effect
        portfolioButton.addEventListener('mouseenter', function() {
            this.style.opacity = '0.8';
        });
        
        portfolioButton.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    }
});