let num = 0; // 0, 400, 800 출력을 위한 변수
const slideContainer = document.querySelector('.slide_container')
slideContainer.style.transition = 'transform 0.5s '
console.log(slideContainer)
const slideTimer = setInterval(()=>{
    num++
    if(num<3){num=1}
    slideContainer.style.transform= `translateX(-${400*num}px)`
    console.log(`현재 num:${num}, x축값:${num*400}`)
}, 3000)
/* setInterval(numTimer, 2000)
function numTimer() {
    num++
    console.log(num)
} */
/* const numTimer = setInterval(function(){
    num++
    console.log(num)
}, 1000) */
/* const numTimer = setInterval(()=>{
    num++
    console.log(num)
}, 1000)
console.log(num) */
// 타이머의 다양한 함수 작성방법
//setInterval(콜백함수, 밀리초);
// (위) 특징 : 콜백함수를 재사용할 수 있다
//const 변수명 = setInterval(익명함수, 밀리초)
// (위) 특징 : 타이머를 담은 변수명으로 타이머 정지, 다시재생 등의 제어를 할 수 있다.
