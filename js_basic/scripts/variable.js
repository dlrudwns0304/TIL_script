/* variable.js */
/* 템플릿 문자열 활용 - 월, 요일 출력 */
// new date();
// getfullyear()
// getmonth()
// getdate()
// 변수 생성 시 기존 변수와 같은위치에 작성하기
var test = new Date(); // 컴퓨터에 저장되어있는 시간 불러오기
var ye = test.getFullYear();
var mon = test.getMonth(); /* 컴퓨터는 0부터 인식하므로 mon뒤에 +1 해준다 */
var day = test.getDate();
// console.log(`${ye}년  ${mon+1}월 ${day}일`); //2025년 5월
// 객체의 개수를 체크할때는 보통 0부터 숫자를 인식하지만 특정 속성이나 함수는 1부터 인식하는 종류들도 있다 대표적으로 1부터 인식하는 속성은 문자열의 길이를 체크하는 length 속성이다
// hello.length; 결과 -> 5
//--------------------------------ES6 새로운 변수 let, const와 기존변수 var
var num1 = 10;
var num1 = 20;
// var는 중복 선언이 가능하다 하지만 실무에선 이미생성한 변수명을 또 중복선언하는 문제를 내면 안되기 때문에 var는 이를 오류로 선언하지 못해서 가능한 사용을 하지않거나 주의해서 사용해야한다.
let num2 = 30;
//let num2 = 40;
//let 변수 생성키워드는 이미 생성한 변수를 중복선언하지 못하도록 체크하기 때문에 개발자의 실수를 방지할 수있다
const num3 = 50;
// const num3; 중복 선언 불가
// num3 = 60; 값 변경 불가(처음 선언된 값을 끝까지 변하지않고 유지해야 한다)
//const num4; 상수는 생성과 대입이 반드시 동시에 진행되야 한다
const num4 = 60; // 생성과 대입이 동시에 된 올바른 경우
//------------------------------------객체 연습
// 1. 도형 정보 저장 (너비, 높이, 좌표, 모서리, 색상)
let ractagle = { // ractagle객체 변수명은 콜스택 저장
    width : 300, // {width~color} 객체 모든속성은 메모리힙 저장
    height:200,
    x:0, y:100,
    border:0,
    color:'red',
}
console.log(ractagle.x, ractagle.y);
// 2. 회원정보 저장(이름,나이,성별,지역)
let user_info = {
    name : 'lee',
    age : 24,
    gender : 'man',
    area : 'bucheon',
}
console.log(user_info.name , user_info.area);
// 3. 쇼핑몰 상품 저장(상품명, 가격, 재고수량, 색상)
let product = {
    name : 'coffee',
    price : 3000,
    quantity : 1,
    color : 'brown',
}
console.log(product.name, product.price);
// 커피의 재고수량은 1개이다
console.log(`${product.name}의 재고수량은${product.quantity}개이다`);
// 4. 영화관 좌석 지정(좌석명, 좌석위치, 좌석가격)
let movie_theater = {
    name : 'vip',
    position : 'a6',
    price : 20000
}
console.log(`오늘 ${movie_theater.name}좌석 ${movie_theater.position}번 ${movie_theater.price}원에 예약했다.`);
// 오늘 vip좌석 fl번 20000원에 예약했다.
// let 배열변수명 = [배열값,배열값,배열값...]
// const 배열변수명 = [배열값,배열값,배열값...]
const yoil = ['월','화','수','목','금','토','일' ]
console.log(yoil);
console.log(yoil[2]); // 배열변수명{호출인덱스 번호}
// 오늘은 ?요일 입니다
// 내일은 ?요일 입니다
console.log(`오늘은 ${yoil[2]} 요일 입니다`);
console.log(`내일은 ${yoil[3]} 요일 입니다`);