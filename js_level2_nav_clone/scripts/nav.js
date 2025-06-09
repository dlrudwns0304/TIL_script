// 데스크탑 메뉴 복제 -> 모바일 메뉴 붙여넣기
const mNavOpne = document.querySelector('.m_nav_open')
const gnb = document.querySelector('.gnb')
const gnbClone = gnb.cloneNode(true);
console.log(mNavOpne,gnb,gnbClone)
mNavOpne.appendChild(gnbClone);
// 데스크탑 nav-lnb 숨기기
// 모바일 m_nav_wrap 숨기기
const navLnb = document.querySelectorAll('nav .lnb')
const mnavWrap = document.querySelector('.m_nav_wrap')
console.log(navLnb,mnavWrap)
// navLnb 5개이고 5번 똑같은값 반복해서 작성하지 않으려면 반복문사용
for(let i=0; i<5; i++) {
    navLnb[i].style.display = 'none'
}
mnavWrap.style.display = 'none' // 1개 dom으로 반복문 없이 바로 사용

// nav 마우스 올렸을 때 lnb(navLnb), lnb_bg 보이기
const lnbBg = document.querySelector('.lnb_bg')
const nav = document.querySelector('nav')
console.log(lnbBg,nav)
lnbBg.style.display = 'none'; // 마우스 올리기전 숨기기
nav.addEventListener('mouseover',()=>{
    lnbBg.style.display = 'block';
    for(let i=0; i<navLnb.length; i++) {
        navLnb[i].style.display = 'block';
    }
})
nav.addEventListener('mouseout',()=> {
    lnbBg.style.display = 'none';
    for(let i=0; i<navLnb.length; i++) {
        navLnb[i].style.display = 'none';
    }
})

// 모바일 메뉴 클릭시 m_nav_wrap 보이기
const mNav = document.querySelector('.m_nav')
console.log(mNav)
mNav.addEventListener('click',()=>{
    mnavWrap.style.display = 'block';
    //mnavWarp.style.height = '500px'
})
// x 클릭 시 m_nav_wrap 숨기기
const mnavClone = document.querySelector('.m_nav_wrap .clone')
mnavClone.addEventListener('click', ()=>{
    mnavWrap.style.display = 'none'
    //mnavWarp.style.height = '0
})