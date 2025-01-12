// 카카오 SDK 초기화
Kakao.init('415ebc10470dc04c0d0dcdc6d7e1aa37'); // YOUR_APP_KEY를 카카오 디벨로퍼스에서 발급받은 JavaScript 키로 변경하세요.

// 초기화 확인
if (Kakao.isInitialized()) {
  console.log('Kakao SDK 초기화 성공!');
} else {
  console.error('Kakao SDK 초기화 실패. JavaScript 키를 확인하세요.');
}

// 운세 배열
const fortunes = [
  "행운이 당신을 찾아올 거예요.",
  "곧 새로운 시작이 다가올 거예요.",
  "당신의 꿈이 현실이 될 거예요!",
  "긍정적인 마음가짐이 필요해요.",
  "준비된 사람에게 기회가 온답니다.",
  "작은 친절이 큰 변화를 만들어요.",
  "오늘은 당신의 날이에요!",
  "곧 사랑이 찾아올 거예요.",
  "모험을 두려워하지 마세요.",
  "행복은 당신의 선택이에요."
];

let tapCount = 0;

function showCookiePage() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("cookie-page").classList.remove("hidden");
}

function tapCookie() {
  const cookie = document.getElementById("cookie");
  cookie.classList.add("cookie-tapped");
  setTimeout(() => cookie.classList.remove("cookie-tapped"), 200);
  tapCount++;
  
  if (tapCount === 3) {
    cookie.src = "assets/fortune-cookie-open.png";
    document.getElementById("cookie-message").textContent = "무슨 내용이 적혀있을까요?";
    document.getElementById("reveal-btn").classList.remove("hidden");
  }
}

function showResultPage() {
  document.getElementById("cookie-page").classList.add("hidden");
  document.getElementById("result-page").classList.remove("hidden");
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  document.getElementById("fortune-text").textContent = randomFortune;
}

function resetPage() {
  tapCount = 0;
  document.getElementById("result-page").classList.add("hidden");
  document.getElementById("intro").classList.remove("hidden");
  const cookie = document.getElementById("cookie");
  cookie.src = "assets/fortune-cookie-closed.png";
  document.getElementById("cookie-message").textContent = "쿠키를 열어보세요!";
  document.getElementById("reveal-btn").classList.add("hidden");
}

function shareFortune() {
  const currentFortune = document.getElementById("fortune-text").textContent;
  Kakao.Link.sendDefault({
    objectType: "text",
    text: `오늘의 운세: ${currentFortune}`,
    link: {
      webUrl: "https://gonyani.github.io/fortune-cookie-site/", // 실제 웹사이트 URL로 변경하세요
      mobileWebUrl: "https://gonyani.github.io/fortune-cookie-site/" // 모바일용 URL도 같은 값으로 설정
    }
  });
}
