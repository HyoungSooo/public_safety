$(document).ready(function () {
  $(".trigger").on("click", function () {
    $(".modal-wrapper").toggleClass("open");
    $(".page-wrapper").toggleClass("blur-it");
    return false;
  });
});
$(document).ready(function () {
  $(".trigger1").on("click", function () {
    $(".modal-wrapper1").toggleClass("open");
    $(".page-wrapper1").toggleClass("blur-it");
    return false;
  });
});
$(document).ready(function () {
  $(".trigger2").on("click", function () {
    $(".modal-wrapper2").toggleClass("open");
    $(".page-wrapper2").toggleClass("blur-it");
    return false;
  });
});

const slides = document.querySelector(".slides"); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll(".slides li"); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector(".prev"); //이전 버튼
const next = document.querySelector(".next"); //다음 버튼
const slideWidth = 300; //한개의 슬라이드 넓이
const slideMargin = 100; //슬라이드간의 margin 값
//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + "px";
function moveSlide(num) {
  slides.style.left = -num * 332 + "px";
  currentIdx = num;
}
prev.addEventListener("click", function () {
  if (currentIdx !== 0) {
    moveSlide(currentIdx - 1);
  }
});
next.addEventListener("click", function () {
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});

const slides1 = document.querySelector(".slides1"); //전체 슬라이드 컨테이너
const slideImg1 = document.querySelectorAll(".slides1 li"); //모든 슬라이드들
let currentIdx1 = 0; //현재 슬라이드 index
const slideCount1 = slideImg1.length; // 슬라이드 개수
const prev1 = document.querySelector(".prev1"); //이전 버튼
const next1 = document.querySelector(".next1"); //다음 버튼
const slideWidth1 = 300; //한개의 슬라이드 넓이
const slideMargin1 = 100; //슬라이드간의 margin 값
//전체 슬라이드 컨테이너 넓이 설정
slides1.style.width = (slideWidth1 + slideMargin1) * slideCount1 + "px";
function moveSlide1(num) {
  slides1.style.left = -num * 332 + "px";
  currentIdx1 = num;
}
prev1.addEventListener("click", function () {
  if (currentIdx1 !== 0) {
    moveSlide1(currentIdx1 - 1);
  }
});
next1.addEventListener("click", function () {
  if (currentIdx1 !== slideCount1 - 1) {
    moveSlide1(currentIdx1 + 1);
  }
});

const slides2 = document.querySelector(".slides2"); //전체 슬라이드 컨테이너
const slideImg2 = document.querySelectorAll(".slides2 li"); //모든 슬라이드들
let currentIdx2 = 0; //현재 슬라이드 index
const slideCount2 = slideImg2.length; // 슬라이드 개수
const prev2 = document.querySelector(".prev2"); //이전 버튼
const next2 = document.querySelector(".next2"); //다음 버튼
const slideWidth2 = 300; //한개의 슬라이드 넓이
const slideMargin2 = 300; //슬라이드간의 margin 값
//전체 슬라이드 컨테이너 넓이 설정
slides2.style.width = (slideWidth2 + slideMargin2) * slideCount2 + "px";
function moveSlide2(num) {
  slides2.style.left = -num * 332 + "px";
  currentIdx2 = num;
}
prev2.addEventListener("click", function () {
  if (currentIdx2 !== 0) {
    moveSlide2(currentIdx2 - 1);
  }
});
next2.addEventListener("click", function () {
  if (currentIdx2 !== slideCount2 - 1) {
    moveSlide2(currentIdx2 + 1);
  }
});
