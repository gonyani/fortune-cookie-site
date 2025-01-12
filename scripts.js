// 결과 화면에 표시할 문구 리스트
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

// 쿠키를 탭한 횟수
let tapCount = 0;
const maxTaps = 3; // 쿠키를 열기 위해 필요한 탭 횟수

// 쿠키 열기 화면에서 쿠키를 클릭할 때
function tapCookie() {
  const cookie = document.getElementById('cookie');
  tapCount++; // 탭 횟수 증가
  cookie.classList.add('cookie-tapped');

  if (tapCount >= maxTaps) {
    // 쿠키 이미지 교체
    cookie.src = "assets/fortune-cookie-open.png";
    document.getElementById('reveal-btn').classList.remove('hidden'); // 버튼 표시
  }

  setTimeout(() => {
    cookie.classList.remove('cookie-tapped');
  }, 200);
}

// 결과 화면으로 이동
function showResultPage() {
  const cookiePage = document.getElementById('cookie-page');
  const resultPage = document.getElementById('result-page');
  const fortuneText = document.getElementById('fortune-text');

  // 랜덤으로 문구 선택
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneText.textContent = randomFortune;

  cookiePage.classList.add('hidden');
  resultPage.classList.remove('hidden');
}

// 초기 화면으로 리셋
function resetPage() {
  const intro = document.getElementById('intro');
  const resultPage = document.getElementById('result-page');
  const cookie = document.getElementById('cookie');

  tapCount = 0; // 탭 횟수 초기화
  cookie.src = "assets/fortune-cookie-closed.png"; // 닫힌 쿠키 이미지로 복구
  document.getElementById('reveal-btn').classList.add('hidden'); // 버튼 숨기기

  resultPage.classList.add('hidden');
  intro.classList.remove('hidden');
}

// 인트로에서 쿠키 열기 화면으로 이동
function showCookiePage() {
  const intro = document.getElementById('intro');
  const cookiePage = document.getElementById('cookie-page');

  intro.classList.add('hidden');
  cookiePage.classList.remove('hidden');
}

// 결과 공유하기
function shareFortune() {
  const fortuneText = document.getElementById('fortune-text').textContent;
  if (navigator.share) {
    navigator.share({
      title: '오늘의 포춘쿠키',
      text: fortuneText,
      url: window.location.href
    }).catch((error) => console.error('공유 실패:', error));
  } else {
    alert('공유 기능을 지원하지 않는 브라우저입니다.');
  }
}
