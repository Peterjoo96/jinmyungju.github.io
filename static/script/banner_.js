document.addEventListener('DOMContentLoaded', function() {

    // click_events : banner -> otherPages
    document.getElementById('toGithub').addEventListener('click', function() {
        window.location.href = 'https://github.com/Peterjoo96';
    });
    document.getElementById('toMymail').addEventListener('click', function() {
        var mailTo = 'mailto:jujin1996@gmail.com';
        window.location.href = mailTo;
    });
    document.getElementById('toNotion').addEventListener('click', function() {
        window.location.href = 'https://www.notion.so/b045faef258e47d4a8187097a2070caa';
    });
});