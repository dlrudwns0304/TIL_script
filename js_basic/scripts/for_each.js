// forEach
// for~in 요소의 인덱스에 접근하는 반복문
// for ~ of 요소의 각 객체에 접근하는 반복문
// forEach 요소의 인덱스와 객체에 동시 접근 가능한 반복문
// forEach 문법(아래)
// 변수.forEach(function(객체, 인덱스, 배열){반복결과})
// 변수.forEach((객체, 인덱스, 배열)=>{반복결과})
const btn = document.querySelectorAll('.btn')
console.log(btn)
// 1. 반복문 없이 mouseover, mouseout 이벤트 작성
/* btn[0].addEventListener('mouseover',()=>eventColor('#ea2f14',btn[0] ))
btn[0].addEventListener('mouseout',()=>eventColor('#fcef91',bnt[0]))
btn[1].addEventListener('mouseout',()=>eventColor('#fcef91',bnt[1]))
btn[1].addEventListener('mouseout',()=>eventColor('#fcef91',bnt[1])) */

// 2. 반복문 for~of 활용 mouseover, mouseout 이벤트 작성
/* for(let i of btn) {
    console.log(i)
    i.addEventListener('mouseover', ()=>eventColor('#0abab5', i))
    i.addEventListener('mouseout', ()=>eventColor('#adeed9', i))
} */

// 3. 반복문 forEach 활용 mouseover, mouseout 이벤트 작성
btn.forEach((obj, ind, arr) => {
    console.log(obj,ind,arr)
    obj.addEventListener('mouseover', ()=>eventColor('#b6f500', obj))
    obj.addEventListener('mouseout', ()=>eventColor('#000', obj))
})
function eventColor(value, target) {
    return target.style.backgroundColor = value;
}
console.log('---------------전체약관js제작')
// 전체동의하기 클릭 시 나머지 필수 약관들 모두 선택하기
// 객체.checked
const lawallChk = document.querySelector('#all') // 전체동의1개
const lawChk = document.querySelectorAll('input[name^=law]') // 개별전체
console.log(lawallChk,lawChk)
lawallChk.addEventListener('click',function(){
    console.log(this.checked) // 활성화 (true) 비활성화(false)
    if(this.checked == true)
        for(let i of lawChk) { // 모든 lawChk에 반복접근해 그이름을 i로ㅗ 사용
        i.checked = true; // 모든 i(lawChk)의 선택상태(checked)는 참(true)이다
    }else{ // 위 if 조건이 거짓이라면(선택안된상태라면)
        for(let i of lawChk){
        i.checked = false;
        }
        
    }
})

// -------------------탭(카테고리) JS
// 탭 제목 클릭 시 해당되는 내용만 보이기(나머지 내용 숨기기)
// 초기설정) 내용1만 보이기
// 탭 제목1  -> 탭 내용 1
// 탭 제목2  -> 탭 내용 2
const tabTitle = document.querySelectorAll('aside a')
const tabContents = document.querySelectorAll('.tab_c')
console.log(tabTitle,tabContents)
// 모든 내용 숨기고 첫번째 내용만 보이기(반복문 활용)
    for(let i of tabContents){i.style.display = 'none'}
    tabContents[0].style.display = 'block'  

// forEach로 객체와 인덱스 동시 활용
// 객체(제목 접근)
tabTitle.forEach((obj, ind)=>{
    //console.log(obj, ind)
    obj.addEventListener('click',()=>{
        // 클릭한 대상과 동일한 인덱스의 내용보이기
        for(let i of tabContents){i.style.display = 'none'}
        tabContents[ind].style.display = 'block'
    })
    
})

