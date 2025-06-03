// main, lang_group 기준
// 초기설정 : 한국어~중국어 옵션 숨기기
// #lang_select 클릭 시 .lang_opne 보이기
// .lang_open이 보이는 상태라면 #lang-select 클릭 시 .lang_open 숨기기
const langOpne = document.querySelector('.lang_open')
const langSelect = document.querySelector('#lang_select')
console.log(langOpne,langSelect)
langOpne.style.display = 'none'
// 참(보이기), 거짓(숨기기) 상태
let openB = false;
langSelect.addEventListener('click', ()=>{
    if(openB == false){
        langOpne.style.display = 'flex'
        openB = true;
    }else if(openB == true) {
        langOpne.style.display = 'none'
        openB = false;
    }
})

    

