// 회원가입 버튼 클릭 시 join_msg에 가입 축하합니다 출력
const joinBtn = document.querySelector('#join')
const joinMsg = document.querySelector('.join_msg')
joinMsg.classList.add('hide'); // 초기상태(숨기기)
joinBtn.addEventListener('click',()=>{
    joinMsg.classList.remove('hide')
    joinMsg.textContent = '가입 축하합니다'
    // (메세지 출력 후) 3초후 메세시 자동으로 사라지기
    const hideMsg = setTimeout(()=>{
        joinMsg.classList.add('hide');
    },3000)
})
const payBtn = document.querySelector('#pay')
const payMsg = document.querySelector('.pay_msg')
const payresetBtn = document.querySelector('#pay_reset')
let paymsgOut;
payMsg.classList.add('hide')
payresetBtn.classList.add('hide')
console.log(payBtn,payMsg)
payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide')
    payresetBtn.classList.remove('hide')
    payMsg.textContent = '결제완료되었습니다 5초 후 광고사이트로 이동합니다'
    paymsgOut = setTimeout(()=>{
        window.location.href = "./timer3.html"
    },5000)
})
payresetBtn.addEventListener('click',()=>{
        clearTimeout(paymsgOut)
},)
