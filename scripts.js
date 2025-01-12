// 인트로 화면에서 쿠키 페이지로 이동
function showCookiePage() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("cookie-page").classList.remove("hidden");
}

// 쿠키 탭 동작 및 애니메이션
function tapCookie() {
  const cookie = document.getElementById("cookie");
  const cookieMessage = document.getElementById("cookie-message");

  if (!cookie.classList.contains("open")) {
    cookie.classList.add("cookie-tapped");
    setTimeout(() => {
      cookie.classList.remove("cookie-tapped");
    }, 200);

    // 쿠키 열기 상태로 변경
    if (!cookie.classList.contains("open")) {
      cookie.classList.add("open");
      cookie.src = "assets/fortune-cookie-open.png"; // 열린 쿠키 이미지
      cookieMessage.textContent = "무슨 내용이 적혀있을까요?"; // 문구 변경
      document.getElementById("reveal-btn").classList.remove("hidden");
    }
  }
}

// 결과 페이지로 이동
function showResultPage() {
  document.getElementById("cookie-page").classList.add("hidden");
  document.getElementById("result-page").classList.remove("hidden");

  // 랜덤 운세 텍스트 추가
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
    "행복은 당신의 선택이에요.",
  ];
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  document.getElementById("fortune-text").textContent = randomFortune;
}

// 초기화
function resetPage() {
  document.getElementById("intro").classList.remove("hidden");
  document.getElementById("cookie-page").classList.add("hidden");
  document.getElementById("result-page").classList.add("hidden");

  const cookie = document.getElementById("cookie");
  cookie.classList.remove("open");
  cookie.src = "assets/fortune-cookie-closed.png"; // 닫힌 쿠키 이미지
  document.getElementById("reveal-btn").classList.add("hidden");
  document.getElementById("cookie-message").textContent = "쿠키를 열어보세요!"; // 초기 문구로 복구
}

// 공유하기 버튼 동작
function shareFortune() {
  const fortuneText = document.getElementById("fortune-text").textContent;

  // 카카오톡 공유 API
  if (window.Kakao) {
    Kakao.Share.sendCustom({
      templateId: 12345, // 등록한 템플릿 ID를 사용
      templateArgs: {
        fortune: fortuneText,
      },
    });
  } else {
    alert("공유 기능을 사용할 수 없습니다.");
  }
}
