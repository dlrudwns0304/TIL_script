//BOM(browser object mode1) 내장함수
//const msg1 = window.alert('잠시 기다려 주세요');
//const msg2 = window.alert('잘못 접근하셨습니다');
//console.log(msg1);
//const userage = window.prompt('나이를 입력하세요');
//console.log(userage);
//const userprint = window.confirm('인쇄하시겠습니까');
//console.log(userprint);
//const userinfo = window.open('https://google.com', '_blank')
//const userwrite =  windwo.document.write('hello js');
//window.document.write('안녕하세요 자바스크립트');
// 실행함수가 변수에 대입하는 값이 없거나 일회성으로 한번 동자하고 끝나는 경우는 변수를 선언할 필요없이바로 내장함수를 작성해도 된다
// 변수 선인이 필요한 경우 BOM 내장함수 : prompt(), confirm()
// window 
// -------------------------------DOM - HTML Node
const pTag = document.getElementsByTagName ('p');
const h1Tag = document.getElementsByTagName ('h1');
const h2Tag = document.getElementsByTagName ('h2');
const spanTag = document.getElementsByTagName ('span');
const ulCls = document.getElementsByClassName ('group');
const liCls = document.getElementsByClassName ('list');
const liClss = document .getElementsByClassName('active');
const wrapId = document.getElementById ('wrap');
const defineId = document.getElementById ('define');
const titleId = document.getElementById('title');
const ddCls = document.getElementsByClassName('contents');
const dtTag = document.getElementsByTagName ('dt');

console.log(pTag);
console.log(h1Tag);
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(liClss);
console.log(wrapId);
console.log(defineId);
console.log(titleId);
console.log(ddCls);
console.log(dtTag);

// =================================DOM 객체 속성
// 객체.style = 'css속성:값';
pTag[0].style = 'background-color:yellow';
pTag[1].style = 'background-color:aqua';
ulCls[0].style = 'border:3px solid red';
liCls[0].style = 'border-bottom:3px solid blue';
liCls[1].style = 'border-bottom:3px solid blue';
liCls[2].style = 'border-bottom:3px solid blue';
liCls[3].style = 'border-bottom:3px solid blue';
liClss[0].style = 'color:blue';
liClss[1].style = 'color:green';
wrapId.style = 'padding:30px';
func.style = 'color:red';
defineId.style = 'background-color:pink';
titleId.style = 'background-color:green';
dtTag[1].style = 'background-color:aqua';
ddCls[0].style = 'background-color:brown';
ddCls[1].style = 'background-color:lime';
// 위와 같이 style 속성을 이용한 css 는 일반 css선택자와 다르게 가장 우선순위가 높은 개념으로적용된다 적용 후 모습은 웹브라우저 F12 개발자도구에서만 확인 가능하다
// css 우선순위 : 자바스크립트 style 속성 > ID > Class > Tag
console.log('-----------------------------------------------------------');
// ES6 querySelector 이용 DOM 선택하기
const orderOl = document.querySelector('.order');
const orderLi = document.querySelectorAll('.order li');
const orderToday = document.querySelector( '#today');
const orderItem = document.querySelector('.order .item');
const nav = document.querySelector('nav');
const gnbA = document.querySelectorAll('.gnb a');
const gnbLi = document.querySelectorAll('.gnb > li');
const lnbLi = document.querySelectorAll('.lnb > li');
const gnb = document.querySelector('.gnb');
const lnb = document.querySelector('.lnb');
console.log(orderOl);
console.log(orderLi);
console.log(orderToday);
console.log(orderItem);
console.log(nav);
console.log(gnbA);
console.log(gnbLi);
console.log(lnbLi);
console.log(gnb);
console.log(lnb);
orderLi[0].style = 'font-size:2rem';
orderToday.style = 'font-weight:700';
orderItem.style = 'color:red';
nav.style = 'background-color:aqua';
gnbA[0].style = 'color:#000';
gnbA[1].style = 'color:#000';
gnbA[2].style = 'color:#000';
gnbA[3].style = 'color:#000';
gnbLi[0].style = 'border:1px solid #000';
gnbLi[1].style = 'border:1px solid #000';
lnbLi[0].style = 'border:2px solid #ddd';
lnbLi[1].style = 'border:2px solid #ddd';
gnb.style = 'background-color:yellow';
lnb.style = 'background-color:green';
// lnb.style = 'background-color:yellow';
// 객체.속성 = '값';
// 객체.속성.속성 = '값';
// 모든 a의 글자색 검정
// nav 배경색
// gnb의 자식 li는 테두리두께1, lnb의 자식 li테두리 두께 2
// gnb,lnb 각각 다른 배경색
lnb.style.backgroundColor = 'lime';
lnb.style.padding = '30px';
lnb.style.borderTop = '2px solid red';
console.log('==========================================');
let a = 10;
let b = '10';
console.log(a, typeof a); // 10 number
console.log(b, typeof b); // 10 string
//let age = prompt ('당신의 나이는?');
//alrert(typeof age);
// prompt 로 사용자가 입력하는 값은 무조건 문자(string) 으로 처리
// 자동으로 형변환 된 데이터타입이 문자인 경우 숫자로 바꾸고 싶다면 명시적형변환 중 숫자로 변환해주는 number() 내장함수를 사용한다.
// number(슷자로 변환하고 싶은 데이터 또는 함수 작성)
//const age = prompt('당신의 나이는?');
// (위) 프로그래밍 동작 순서
// 1. prompt('당신의 나이는?') : 사용자가 입력한 값을 문자로 자동변환
// 2. number() : prompt가 문자로 변환한 값을 숫자로 명시적 변환
// 3. age = 변수 age에 숫자로 변환한 값을 대입
//console.log(`올해 당신의 나이는 ${age}살 입니다.`);
//console.log(`내년 당신의 나이는 ${Number(age)+1}살 입니다.`);
//console.log('=========================쇼핑몰 구입 알고리즘');
// 상품 1개 가격 기준 15700원
// 현재 이벤트중 1+1 
// 1. 사용자가 구입할 물건 개수 정하기 
// 2. 개수에 따라 최종 가격 구하기
// 결과 예시) 구입할 물건은 ?개 이고 이벤트상품 ?개가 추가됩니다 총 결제 가격은 ?원입니다
let price = 15700;
const productQa = Number(prompt('구입할 개수를 입력하세요'));
const eventNum= productQa;
const total = price*productQa;
console.log(`구입할 물건은 ${productQa}이고 이벤트상품 ${eventNum}개가 추가됩니다. 총 결제 가격은 ${total}원 입니다`);
