document.addEventListener('DOMContentLoaded', function() {

    // click_events : index -> otherPages
    document.getElementById('toRecent').addEventListener('click', function() {
        window.location.href = 'board_list.html';
    });
    document.getElementById('toCategory').addEventListener('click', function() {
        window.location.href = 'category.html';
        // 클릭 시,  categoy.html로 이동
        // 전환된 div에는 검색창이 포함됨
        // 여기에서 카테고리 선택을 통해 
    });
    document.getElementById('toPortfolio').addEventListener('click', function() {
        window.location.href = 'portfolio.html';
    });
});