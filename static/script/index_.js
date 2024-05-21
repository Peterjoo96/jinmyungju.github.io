document.addEventListener('DOMContentLoaded', function() {

    // click_events : index -> otherPages
    document.getElementById('toRecent').addEventListener('click', function() {
        window.location.href = 'Recent.html';
    });
    document.getElementById('toCategory').addEventListener('click', function() {
        window.location.href = 'Category.html';
    });
    document.getElementById('toPortfolio').addEventListener('click', function() {
        window.location.href = 'Portfolio.html';
    });
});