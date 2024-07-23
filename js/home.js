document.addEventListener('DOMContentLoaded', function() {
    // 为页面元素添加淡入效果
    const fadeInElements = document.querySelectorAll('.text-center, .lead, h1, h2, .concept');

    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease-in-out';
            el.style.opacity = 1;
        }, index * 200); // 依次淡入，每个元素间隔 200ms
    });

    // 给 "学会理念" 标题添加点击事件，触发一个小动画
    const header = document.querySelector('#home h2');

    header.addEventListener('click', () => {
        header.style.transition = 'transform 0.3s ease-in-out';
        header.style.transform = 'scale(1.1)';

        setTimeout(() => {
            header.style.transform = 'scale(1)';
        }, 300);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});