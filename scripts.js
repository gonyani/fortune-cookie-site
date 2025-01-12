// 변수 설정
let tapCount = 0; // 쿠키 탭 횟수
const maxTaps = 3; // 쿠키가 열리기까지 필요한 클릭 횟수
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

// 화면 전환 함수
function showCookiePage() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('cookie-page').classList.remove('hidden');
}

function showResultPage() {
  document.getElementById('cookie-page').classList.add('hidden');
  document.getElementById('result-page').classList.remove('hidden');

  // 랜덤 운세 텍스트 출력
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  document.getElementById('fortune-text').textContent = fortune;
}

// 쿠키 탭 애니메이션과 로직
function tapCookie() {
  const cookie = document.getElementById('cookie');
  tapCount++;

  // 애니메이션 추가
  if (!cookie.classList.contains('cookie-tapped')) {
    cookie.classList.add('cookie-tapped');
    setTimeout(() => cookie.classList.remove('cookie-tapped'), 200);
  }

  // 탭 횟수가 조건을 만족하면 쿠키 열림
  if (tapCount >= maxTaps) {
    cookie.src = 'assets/fortune-cookie-open.png'; // 열린 쿠키 이미지로 변경
    cookie.classList.add('open');
    document.getElementById('reveal-btn').classList.remove('hidden');
  }
}

// 초기화 함수
function resetPage() {
  location.reload();
}

// 카카오톡 공유 기능 (예시)
function shareKakao() {
  alert('카카오톡 공유 기능은 구현 중입니다!');
}
