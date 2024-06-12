function toggleComments() {
    const comments = document.getElementById('comments');
    const toggleButton = document.getElementById('toggle-comments');
    
    if (comments.style.left === '0px') {
        comments.style.left = '-300px'; // 隐藏
        toggleButton.innerText = '显示评论区';
    } else {
        comments.style.left = '0px'; // 显示
        toggleButton.innerText = '隐藏评论区';
    }
}

function submitComment() {
    const commentInput = document.getElementById('comment-input');
    const commentsContainer = document.getElementById('comments-container');

    if (commentInput.value.trim() === '') {
        alert('请填写评论内容');
        return;
    }

    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<p><strong>匿名用户:</strong> ${commentInput.value}</p>`;

    commentsContainer.appendChild(newComment);
    commentInput.value = ''; // 清空输入框
}