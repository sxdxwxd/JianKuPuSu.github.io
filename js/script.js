// 显示赏析模态框
function showPoemAnalysis(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block'; // 使用display而不是class来控制显示
}

// 关闭赏析模态框
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none'; // 使用display而不是class来控制隐藏
}

// 点击模态框外部区域关闭模态框
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
};

// 点击播放音频
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        const allAudios = document.querySelectorAll('audio');
        allAudios.forEach(otherAudio => {
            if (otherAudio.id !== audioId) {
                otherAudio.pause();
            }
        });

        audio.play().catch(e => console.error("播放音频失败:", e));
    } else {
        console.error("找不到音频元素:", audioId);
    }
}

// 点击暂停音频
function pauseAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.pause();
    } else {
        console.error("找不到音频元素:", audioId);
    }
}


//导航栏
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    const currentButton = document.querySelector(`button[data-section="${sectionId}"]`);
    if (currentButton) {
        currentButton.classList.add('selected');
    }

    sections.forEach(function(section) {
        section.style.display = 'none'; // 隐藏所有部分
    });
    buttons.forEach(function(button) {
        if (button.getAttribute('onclick').includes(sectionId)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    var activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block'; // 显示选中的部分

    activeSection.style.opacity = 0;
    setTimeout(function() {
        activeSection.style.opacity = 1;
    }, 10); // 简单的渐变效果
}

