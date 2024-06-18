const comments = document.querySelectorAll('.coments blockquote');
const prevCommentBtn = document.querySelector('.prev-coment-btn');
const nextCommentBtn = document.querySelector('.next-coment-btn');
let currentCommentIndex = 0;

function showComment(index) {
    comments.forEach((comment, i) => {
        comment.style.display = i === index ? 'flex' : 'none';
    });
}

function nextComment() {
    currentCommentIndex = (currentCommentIndex + 1) % comments.length;
    showComment(currentCommentIndex);
}

function prevComment() {
    currentCommentIndex = (currentCommentIndex - 1 + comments.length) % comments.length;
    showComment(currentCommentIndex);
}

let commentAutoplayInterval = setInterval(nextComment, 10000);

document.querySelector('.coments').addEventListener('mouseenter', () => {
    clearInterval(commentAutoplayInterval);
});

document.querySelector('.coments').addEventListener('mouseleave', () => {
    commentAutoplayInterval = setInterval(nextComment, 10000);
});

prevCommentBtn.addEventListener('click', prevComment);
nextCommentBtn.addEventListener('click', nextComment);

showComment(currentCommentIndex);

function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
}