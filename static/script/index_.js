document.addEventListener('DOMContentLoaded', function() {

    // click_events : index -> otherPages
    document.getElementById('toRecent').addEventListener('click', function() {
        window.location.href = 'recent.html';
    });
    document.getElementById('toCategory').addEventListener('click', function() {
        window.location.href = 'category.html';
    });
    document.getElementById('toPortfolio').addEventListener('click', function() {
        window.location.href = 'portfolio.html';
    });
});