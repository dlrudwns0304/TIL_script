// 인스타그램 알고리즘
// 1.프로필 클릭 시 개인 프로필 페이지로 이동 (o) - 페이지제작필요

const profileDom = document.querySelector('.profile');
console.log(profileDom);
profileDom.addEventListener ('click', profileGo);
function profileGo () {
    return window.location.href = 'insta_profile.html'
}
// 2.우측 ...메뉴 클릭 시 저장~신고 등 기능실행 (o) - 저장~신고 제작필요
// 3.게시물의 이미지를 한번 터치 시 반응없음 (x) 
// 4.게시물의 이미지를 두번누르면 좋아요 자동등록 (o)
const photo = document.querySelector('main > .photo');
const likeImg = document.querySelector('.like img')

console.log(photo, likeImg);
console.log(likeImg.src);
// 객체.속성 -  속성 읽기
// 객체.속성 = 값 - 속성 값 변경
photo.addEventListener('dblclick', likeOn );
function likeOn () {
    
    //console.log('test');
    return likeImg.src = './images/icons/like_on.png'
}
// 5.좋아요 아이콘 터치시 좋아요 (o) 다시 터치 시 좋아요 해제 반복 (x - 조건문공부필요)
// 이미지 더블클릭 하기 전 기준
//likeImg.addEventListener('click', likeOnOff);
// (위) likeImg 클릭 시 실행되는 콜백함수
//(아래) likeTimg 객체가 a태그로 클릭 시 새로고침되서 스크롤이 위로 올라가는 문제 해결을 위한 방법
// 콜백함수 호출이 아닌 익명함수 또는 화살표함수이용
// 익명함수 또는 화살표함수로 작성 시 이벤트 앞 객체정보가 함수의 매개변수로 자동으로 대입된다
// 위 매개변수가 받은 정보를 확인하려면 매개변수에 변수명을 작성하고 console.log()로 확인할 수 있다.
likeImg.addEventListener('click', function(e){
    //console.log(e);
    e.preventDefault(); //태그의 동적기능 취솜(a태그의 새로고침)
    likeOn();
});


function likeOnOff () {
    return likeImg.src = './images/icons/like_on.png'
}
// 6.댓글 아이콘 터치시 댓글입력창으로 넘어감 실행화면에서 바깥쪽 영역 터치 댓글입력창 닫힘 (O) - 제작필요 
// 7.공유 아이콘 버튼 터치시 공유가능 계정들 표시된 창 실행 (o) - 제작필요 , 바깥쪽 영역 터치 시 닫힘 
// 8.즐겨찾기 아이콘 버튼 클릭시 게시물이 저장됨 (x db필요) 과 동시에 컬렉션 선택 화면출력(o), 바깥쪽 영역 터치시 닫힘 (O)
// 9.글 1줄,날짜만 미리표시되고 , 글 터치시 전체내용(나머지 글 줄과 해시태그 포함) 펼치기 (O)
// 글 1줄 날짜만 미리표시
const storyDom = document.querySelector ('.story');
const dateDom = document.querySelector('.date');
const tagDOM = document.querySelector('.tag');
console.log(storyDom,dateDom);
// 함수를 생성하지 않고 바로 작성한 이유는? 반복이 아니고 즉시 실행되기 때문
tagDOM.style.display = 'none';
// 글 클릭시 태그 표시
storyDom.addEventListener('click', tagShow);
function tagShow () {
    return tagDOM.style.display = 'block';
}
// 10.해시태그 들을 누르면 각 해시태그에 주제에 맞는 추천의 게시물~장소 까지 볼수 있는 창으로 넘어감 (O)
console.log(tagDOM);
tagDOM.addEventListener ('click', tagGo );
function tagGo () {
    return window.location.href = 'insta_tag.html'
}
// 별도의 동적기능 없이 단순한 링크만 있는 경우는 js없이 a태그에 링크걸기
// 동적기능 예) 해외IP접속차단, 동일IP접속차단, 성인사이트접속인증, 로그인에 따른 접속가능 페이지일경우 로그인 유무확인
// 11.날짜 터치 기능 없음 (x) 
// 추가 페이지 목록) 1(개인프로필페이지)-insta_profile.html 2(저장~신고기능), 6(댓글입력창), 7(공유가능계정),8(컬렉션 선택 화면), 10(태그 사용 게시물) - insta_tag.html