// 显示赏析模态框
function showPoemAnalysis(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add('show');
}

// 关闭赏析模态框
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove('show');
}

// 点击模态框外部区域关闭模态框
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
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




