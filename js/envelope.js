document.addEventListener('DOMContentLoaded', function() {
    const bg = document.querySelector('.background');
    const numSpans = 20;
    const formulaImages = ['url(../src/bg1.png)', 'url(../src/bg2.png)', 'url(../src/bg3.png)', 'url(../src/bg4.png)','url(../src/bg5.png)','url(../src/bg6.png)','url(../src/bg7.png)',];

    for (let i = 0; i < numSpans; i++) {
        const span = document.createElement('span');
        span.style.animationDuration = `${Math.random() * 50 + 5}s`;
        span.style.animationDelay = `${-Math.random() * 50}s`;
        span.style.color = 'transparent';
        span.style.backgroundImage = formulaImages[Math.floor(Math.random() * formulaImages.length)];
        bg.appendChild(span);
    }

    document.getElementById('center-circle').addEventListener('click', function() {
        this.classList.add('animate__animated', 'animate__fadeOutUp');
        setTimeout(() => {
            document.getElementById('envelope').classList.add('animate__animated', 'animate__fadeOut');
            setTimeout(() => {
                document.getElementById('envelope').classList.add('d-none');
                document.getElementById('main').classList.remove('d-none');
                document.getElementById('main').classList.add('animate__animated', 'animate__fadeIn');
            }, 1000);
        }, 1000);
    });
});