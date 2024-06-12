const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        
        //添加音效
        //playSoundEffect();
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/*切换音效函数
function playSoundEffect() {
    sound.currentTime = 0; // 重置音效播放时间
    sound.play();
}
*/ 