document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const cookieScreen = document.getElementById('cookie-screen');
    const resultScreen = document.getElementById('result-screen');
    const startButton = document.getElementById('start-button');
    const cookieImage = document.getElementById('cookie-image');
    const homeButton = document.getElementById('home-button');
    const shareButton = document.getElementById('share-button');
    const fortuneText = document.getElementById('fortune-text');

    const fortunes = [
        '작은 행운이 찾아옵니다',
        '기대하는 일이 이루어집니다',
        '마음이 가는 대로 행동하세요',
        '주위 사람들을 살펴보세요'
    ];

    let tapCount = 0;

    startButton.addEventListener('click', () => {
        introScreen.classList.add('hidden');
        cookieScreen.classList.remove('hidden');
    });

    cookieImage.addEventListener('click', () => {
        tapCount++;
        if (tapCount >= 3) {
            cookieImage.src = '사용 요소/fortune-cookie-open.png';
            setTimeout(() => {
                cookieScreen.classList.add('hidden');
                resultScreen.classList.remove('hidden');
                fortuneText.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
            }, 500);
        }
    });

    homeButton.addEventListener('click', () => {
        resultScreen.classList.add('hidden');
        introScreen.classList.remove('hidden');
        cookieImage.src = '사용 요소/fortune-cookie-closed.png';
        tapCount = 0;
    });

    shareButton.addEventListener('click', () => {
        const shareData = {
            title: '오늘의 포춘쿠키',
            text: `나의 운세: "${fortuneText.textContent}"`,
            url: window.location.href
        };

        if (navigator.share) {
            navigator.share(shareData).catch(err => console.error('공유 실패:', err));
        } else {
            alert('공유 기능이 지원되지 않는 브라우저입니다.');
        }
    });
});
