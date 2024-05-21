document.addEventListener('DOMContentLoaded', function() {
    
    // load_data : title & bannerMessage
    document.getElementById('title').innerText = "What's your name? PeterJoo!";
    document.getElementById('bannerMessage').innerText = "Jinmyung's Blog";

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