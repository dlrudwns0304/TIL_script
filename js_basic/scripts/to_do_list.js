// 오늘의 할일 JS
// 1. 오늘의 할일을 입력하고 
// 2. 등록버튼을 클릭하면 (클릭 이벤트 내에서 1번 입력값 인식)
// 3. "여기에 할 일이 등록됩니다" 기존 li의 다음 형제 위치에 입력한 정보 등록
// 위 알고리즘 3번 작업 시 주의사항
// ul 태그의 마지막 자식 위치(appendchild)로 li추가(문자열생성X creatElement 가능)
const toInput = document.querySelector('.to');
const toBtn = document.querySelector('#to_btn');
const ul = document.querySelector('ul');
console.log(toInput,toBtn,ul)
toBtn.addEventListener('click',()=>{
if(toInput.value == ''){ // input의 값이 입력되지 않았을 경우 경고창으로 '입력 후 등록해야 합니다' 메세지 출력
    window.alert('입력 후 등록해야 합니다')
}else{
    //console.log(toInput.value)
    //ul.appendChild("<li>abc</li>") // 문자열 삽입 에러
    let li  = document.createElement('li');
    li.innerHTML = `<span>${toInput.value}</span><button type="button" class="del_btn">X</button>`
    li.textContent = toInput.value
    console.log(li);
    ul.appendChild(li) 
    toInput.value = '' // 입력값 초기화

    // 등록된 할일 옆 x 클릭 시 부모 li 제거
    const close = document.querySelectorAll('.del_btn')
    
    for (let i of close) {
        console.log(i) //배열 형태가 아닌 객체형태로 출력되서 바로 사용가능한 형태인지 확인
        i.addEventListener('click',()=>{
            i.parentNode.remove();
            
        })
    }
    const span = document.querySelectorAll('span')
    for(let i of span) {
        i.addEventListener('click',()=>{
            i.parentNode.style.textDecoration = 'line-through'
        })
    } 
}// 조건문 else(거짓) 사용자가 값을 입력했을 때 블록 위치
})// toBtn 이벤트 종료(블록) 위치