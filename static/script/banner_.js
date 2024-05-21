document.addEventListener('DOMContentLoaded', function() {

    // click_events : index -> otherPages
    document.getElementById('toGithub').addEventListener('click', function() {
        window.location.href = 'github.html';
    });
    document.getElementById('toMymail').addEventListener('click', function() {
        window.location.href = 'mymail.html';
    });
    document.getElementById('toNotion').addEventListener('click', function() {
        window.location.href = 'notion.html';
    });
});