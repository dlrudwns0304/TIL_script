// 프로젝트소개 팝업 알고리즘
// 1. 팝업 숨기기 (popup_bg)
// 2. 썸네일 이미지(a) 클릭 시 팝업 보이기 (popup_bg)
// 3. (팝업 실행 기준) 배경(popup_bg)클릭시 팝업 숨기기(popup_bg)
// 알고리즘 기준 반복해야하는 데이터를 변수로 생성

// 프로젝트 팝업 실행 시 클릭한 대상의 이미지가 출력되는 알고리즘
// 1. 클릭한 대상의 이미지 경로 확인
// 2. 위 경로를 팝업 이미지의 경로에 대입
const popupBg = document.querySelector('.popup_bg');
console.log(popupBg);
const thumbNaila = document.querySelectorAll('.design a');
console.log(thumbNaila);
// 1. 팝업 숨기기
popupBg.style.display = 'none' ;
// 변수로 만든 dom요소가 여러개일 경우 이벤트를 위해 접근할때는 인덱스를 사용해서 하나씩 개별 접근해야한다
thumbNaila[0].addEventListener('click',function() {
    console.log(0); // 작동테스트
    console.log(this); // 이벤트객체자동인식하는지 확인
    console.log(this.children[0].src);
    console.log(popupBg.children[0].children[0].src); // popupBg의 자식의 자식의 src
    popupShow (); // 팝업 출력 함수
    popupBg.children[0].children[0].src = this.children[0].src
})
thumbNaila[1].addEventListener('click',function(){
    popupShow (this); // 팝업 출력 함수
})
thumbNaila[2].addEventListener('click',function(){
    popupShow (this);
})
thumbNaila[2].addEventListener('click',function(){
    popupShow (this);
})
function popupShow (target) {
    console.log('-------------함수시작위치체크와 에러체크')
    //console.log(popupBg.children[0].children[0]);
    popupBg.style.display = 'flex' ;
    popupBg.children[0].children[0].src = target.children[0].src;
    return; // 함수 종료
}
popupBg.addEventListener('click',popupNo )
function popupNo () {
    return  popupBg.style.display = 'none';
}
