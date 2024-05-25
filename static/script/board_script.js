const categories = {
    '개발': ['Python', 'Java', 'JavaScript', 'Jquery', 'Spring', 'Sql'],
    '지식': ['개발환경', '도구', '알고리즘', '참고자료']
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('index.html')) {
        loadPosts();
        updateSubCategoryOptions();
    } else if (window.location.pathname.endsWith('write.html')) {
        updateSubCategoryOptions();
    } else if (window.location.pathname.endsWith('post.html')) {
        displayPostDetails();
    } else if (window.location.pathname.endsWith('edit.html')) {
        loadPostForEdit();
        updateSubCategoryOptions();
    }
});

function updateSubCategory() {
    const mainCategory = document.getElementById('main-category').value;
    const subCategorySelect = document.getElementById('sub-category');
    subCategorySelect.innerHTML = '<option value="">선택하세요</option>';
    if (mainCategory && categories[mainCategory]) {
        categories[mainCategory].forEach(sub => {
            const option = document.createElement('option');
            option.value = sub;
            option.textContent = sub;
            subCategorySelect.appendChild(option);
        });
    }
}

function updateSubCategoryOptions() {
    const mainCategorySelect = document.getElementById('main-category');
    const mainCategory = mainCategorySelect ? mainCategorySelect.value : '';
    const subCategorySelect = document.getElementById('sub-category');
    subCategorySelect.innerHTML = '<option value="">전체</option>';
    if (mainCategory && categories[mainCategory]) {
        categories[mainCategory].forEach(sub => {
            const option = document.createElement('option');
            option.value = sub;
            option.textContent = sub;
            subCategorySelect.appendChild(option);
        });
    }
}

function submitPost(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const mainCategory = document.getElementById('main-category').value;
    const subCategory = document.getElementById('sub-category').value;
    const content = document.getElementById('content').value;
    const date = new Date().toISOString().slice(0, 10);
    const author = 'PeterJoo';

    const post = { id: Date.now(), title, mainCategory, subCategory, content, date, author };
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = 'index.html';
}

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postListDiv = document.getElementById('post-list');
    if (posts.length === 0) {
        postListDiv.innerHTML = '<p>게시글이 없습니다</p>';
    } else {
        posts.sort((a, b) => new Date(a.date) - new Date(b.date));
        const table = document.createElement('table');
        const header = table.insertRow();
        header.innerHTML = '<th>대분류</th><th>소분류</th><th>제목</th><th>작성자</th><th>작성일</th>';
        posts.forEach(post => {
            const row = table.insertRow();
            row.innerHTML = `<td>${post.mainCategory}</td><td>${post.subCategory}</td><td><a href="post.html?id=${post.id}">${post.title}</a></td><td>${post.author}</td><td>${post.date}</td>`;
        });
        postListDiv.innerHTML = '';
        postListDiv.appendChild(table);
    }
}

function filterPosts() {
    const mainCategory = document.getElementById('main-category').value;
    const subCategory = document.getElementById('sub-category').value;
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const filteredPosts = posts.filter(post => 
        (mainCategory === '' || post.mainCategory === mainCategory) &&
        (subCategory === '' || post.subCategory === subCategory)
    );
    const postListDiv = document.getElementById('post-list');
    if (filteredPosts.length === 0) {
        postListDiv.innerHTML = '<p>게시글이 없습니다</p>';
    } else {
        filteredPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
        const table = document.createElement('table');
        const header = table.insertRow();
        header.innerHTML = '<th>대분류</th><th>소분류</th><th>제목</th><th>작성자</th><th>작성일</th>';
        filteredPosts.forEach(post => {
            const row = table.insertRow();
            row.innerHTML = `<td>${post.mainCategory}</td><td>${post.subCategory}</td><td><a href="post.html?id=${post.id}">${post.title}</a></td><td>${post.author}</td><td>${post.date}</td>`;
        });
        postListDiv.innerHTML = '';
        postListDiv.appendChild(table);
    }
}

function displayPostDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = posts.find(p => p.id === postId);
    if (!post) {
        document.getElementById('post-details').innerHTML = '<p>게시글을 찾을 수 없습니다.</p>';
        return;
    }
    const postDetailsDiv = document.getElementById('post-details');
    postDetailsDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>대분류:</strong> ${post.mainCategory}</p>
        <p><strong>소분류:</strong> ${post.subCategory}</p>
        <p><strong>작성자:</strong> ${post.author}</p>
        <p><strong>작성일:</strong> ${post.date}</p>
        <p>${post.content}</p>
    `;
}

function editPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    window.location.href = `edit.html?id=${postId}`;
}

function loadPostForEdit() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = posts.find(p => p.id === postId);
    if (!post) {
        alert('게시글을 찾을 수 없습니다.');
        window.location.href = 'index.html';
        return;
    }
    document.getElementById('post-id').value = post.id;
    document.getElementById('title').value = post.title;
    document.getElementById('main-category').value = post.mainCategory;
    updateSubCategory();
    document.getElementById('sub-category').value = post.subCategory;
    document.getElementById('content').value = post.content;
}

function updatePost(event) {
    event.preventDefault();
    const postId = parseInt(document.getElementById('post-id').value);
    const title = document.getElementById('title').value;
    const mainCategory = document.getElementById('main-category').value;
    const subCategory = document.getElementById('sub-category').value;
    const content = document.getElementById('content').value;

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts = posts.map(post => 
        post.id === postId ? { ...post, title, mainCategory, subCategory, content } : post
    );
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = `post.html?id=${postId}`;
}

function cancelEdit() {
    if (confirm('변경 내용을 취소하시겠습니까?')) {
        window.location.href = 'index.html';
    }
}

function deletePost() {
    if (confirm('이 게시글을 삭제하시겠습니까?')) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts = posts.filter(post => post.id !== postId);
        localStorage.setItem('posts', JSON.stringify(posts));
        window.location.href = 'index.html';
    }
}