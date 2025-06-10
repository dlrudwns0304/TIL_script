const webDate = document.querySelector('#webdate')
const dateBtn = document.querySelector('#date_btn')
const resultDate = document.querySelector('.date em')
const resultTime = document.querySelector('.time em')
console.log(webDate,dateBtn,resultDate,resultTime)
dateBtn.addEventListener('click',datebtnClick)
function datebtnClick (){
    const birth = new Date(webDate.value)
    const today = new Date()
    console.log(birth,today)
    const birthToday = today.getTime() - birth.getTime()
    console.log(birthToday)
    const birthFlow = Math.floor(birthToday / (1000*60*60*24))
    const todayFlow = Math.floor(birthToday / (1000*60*60))
    console.log(birthFlow,todayFlow)
    resultDate.textContent = birthFlow;
    resultTime.textContent = todayFlow;
}