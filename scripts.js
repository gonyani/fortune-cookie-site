document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.getElementById("intro-screen");
    const cookieScreen = document.getElementById("cookie-screen");
    const resultScreen = document.getElementById("result-screen");
    const startButton = document.getElementById("start-button");
    const cookieImage = document.getElementById("cookie-image");
    const fortuneText = document.getElementById("fortune-text");
    const homeButton = document.getElementById("home-button");

    const fortunes = [
        "작은 행운이 찾아옵니다",
        "기대하는 일이 이루어집니다",
        "마음이 가는 대로 행동하세요",
        "주위 사람들을 살펴보세요"
    ];

    let clickCount = 0;

    // 시작하기 버튼 클릭
    startButton.addEventListener("click", () => {
        introScreen.classList.add("hidden");
        cookieScreen.classList.remove("hidden");
    });

    // 쿠키 이미지 클릭
    cookieImage.addEventListener("click", () => {
        clickCount++;
        if (clickCount === 3) {
            cookieImage.src = "assets/fortune-cookie-open.png";
            setTimeout(() => {
                cookieScreen.classList.add("hidden");
                resultScreen.classList.remove("hidden");
                const randomFortune =
                    fortunes[Math.floor(Math.random() * fortunes.length)];
                fortuneText.textContent = randomFortune;
            }, 500);
        }
    });

    // 홈으로 버튼 클릭
    homeButton.addEventListener("click", () => {
        resultScreen.classList.add("hidden");
        introScreen.classList.remove("hidden");
        cookieImage.src = "assets/fortune-cookie-closed.png";
        clickCount = 0;
    });
});
