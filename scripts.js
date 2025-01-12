// 화면 전환 함수
function showCookiePage() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('cookie-page').classList.remove('hidden');
}

function showResultPage() {
  document.getElementById('cookie-page').classList.add('hidden');
  document.getElementById('result-page').classList.remove('hidden');
}

// 쿠키 탭 애니메이션
function tapCookie() {
  const cookie = document.getElementById('cookie');
  if (!cookie.classList.contains('cookie-tapped')) {
    cookie.classList.add('cookie-tapped');
    setTimeout(() => cookie.classList.remove('cookie-tapped'), 200);
  }
  cookie.src = 'assets/fortune-cookie-open.png'; // 쿠키 열린 이미지로 변경
  document.getElementById('reveal-btn').classList.remove('hidden');
}

// 초기화 함수
function resetPage() {
  location.reload();
}

// 카카오톡 공유 기능 (예시)
function shareKakao() {
  alert('카카오톡 공유 기능은 구현 중입니다!');
}
