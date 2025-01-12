// 쿠키 클릭 횟수와 포춘 내용 설정
let cookieTaps = 0;
const fortunes = [
  "작은 행운이 찾아옵니다!",
  "기대하는 일이 이루어집니다!",
  "마음이 가는 대로 행동하세요!",
  "주위 사람들을 살펴보세요!"
];

// 화면 전환 함수
function showCookiePage() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("cookie-page").classList.remove("hidden");
}

function showResultPage() {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  document.getElementById("fortune-text").textContent = randomFortune; // 텍스트 설정
  document.getElementById("cookie-page").classList.add("hidden");
  document.getElementById("result-page").classList.remove("hidden");
}

function resetPage() {
  document.getElementById("result-page").classList.add("hidden");
  document.getElementById("intro").classList.remove("hidden");
  cookieTaps = 0; // 클릭 횟수 초기화
  document.getElementById("reveal-btn").classList.add("hidden");
  const cookieImage = document.getElementById("cookie");
  cookieImage.src = "assets/fortune-cookie-closed.png"; // 닫힌 쿠키로 초기화
  cookieImage.classList.remove("open"); // 열린 쿠키 클래스 제거
}

// 쿠키 탭 함수
function tapCookie() {
  cookieTaps++;
  const cookieImage = document.getElementById("cookie");

  if (cookieTaps >= 3) {
    cookieImage.src = "assets/fortune-cookie-open.png"; // 열린 쿠키 이미지로 변경
    cookieImage.classList.add("open"); // 열린 쿠키 클래스 추가
    document.getElementById("reveal-btn").classList.remove("hidden"); // 내용 확인 버튼 표시
  }
}

// 공유 버튼 함수 (알림만 출력)
function shareFortune() {
  alert("포춘쿠키 내용을 공유할 수 있는 기능은 준비 중입니다!");
}
