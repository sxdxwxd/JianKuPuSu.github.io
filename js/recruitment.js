$(document).ready(function(){
    // 获取模态框
    var modal = document.createElement('div');
    modal.id = "myModal";
    modal.className = "modal";
    document.body.appendChild(modal);

    // 在模态框中创建图片
    var modalImg = document.createElement('img');
    modalImg.className = "modal-content";
    modal.appendChild(modalImg);

    // 创建关闭按钮
    var close = document.createElement('span');
    close.className = "close";
    close.innerHTML = "&times;";
    modal.appendChild(close);

    // 创建说明文字
    var captionText = document.createElement('div');
    captionText.id = "caption";
    modal.appendChild(captionText);

    // 获取所有海报图片
    var posters = document.querySelectorAll('.poster img');

    // 绑定点击事件
    posters.forEach(function(poster) {
        poster.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;

            // 添加动画效果
            modal.classList.add('show');
            setTimeout(function() {
                modal.classList.remove('show');
            }, 500);
        };
    });

    // 绑定关闭按钮事件
    close.onclick = function() {
        modal.style.display = "none";
    };

    // 点击模态框外部关闭模态框
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});