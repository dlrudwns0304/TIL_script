// 정규표현식 RegEx
// 필터 시작과 끝 표시 /
// 필터.test('검사문자')
// 상황1. 쇼핑몰 리뷰작성시 리뷰내용에 '별로' 라는 단어 입력금지
const userTxt = '구매하지마세요 별로에요';
const regexFilter = /별로/
let result = regexFilter.test(userTxt)
console.log(result) // true

// 상황2 쇼핑몰 리뷰 작성 시 리뷰내용 '별로' '최악 단어 입력금지
// 필터예시 (별로 | 최악)
const reviewTxt = '별로에요 최악이에요'
const reviewFilter = /(별로|최악)/
result = reviewFilter.test(reviewTxt);
console.log(result);
// 회원가입 알고리즘
// 아이디에 영어만 입력가능한(정규표현식) 조건 생성
const userId = document.querySelector('input[name*=id]');
const useridErr = document.querySelector('.error_id');
console.log(userId, useridErr);
//userId.addEventListener('input',idChk);
//function inputTest () 
//return console.log('입력확인')}
/* function idChk () {
    if(!/^[a-zA-Z]+$/.test(userId.value)) {                                                                                                                                                                                                                                                                                                                                                                                                                                  )) {
        return useridErr.textContent = '영어만 입력가능합니다'
}else {
    return useridErr.textContent=''
}
}  */
    

// 숫자만 입력가능한 정규표현식 활용 사용자 나이 받기
const userAge = document.querySelector('input[name=user_age]')
const userageErr = document.querySelector('.error_age')
console.log(userAge, userageErr)
userAge.addEventListener('input', ageChk)
function ageChk () {
    if(!/^\d+$/.test(userAge.value)) {
        return userageErr.textContent = '숫자만 입력가능합니다'
}else {
    return userageErr.textContent='';
}
}


const userPw = document.querySelector('input[name=user_pw]')
const userpwErr = document.querySelector('.error_pw')
console.log(userPw, userpwErr)
userPw.addEventListener('input', pwChk)
function pwChk () {
    if(!/^[a-zA-Z0-9]+$/.test(userPw.value)) {
        return userpwErr.textContent = '알파벳과 숫자 조합만 가능합니다'
}else {
    return userpwErr.textContent = '';
}
}

// 리뷰 글자 수 제한 알고리즘
// 리뷰 작성 시 입력 글자 수 실시간 출력 .current
// 현재 포맷에 맞는 최대 글자수 초기 표시 .max
// 리뷰 작성 시 최대글자수를 오버하면 출력 메시지 출력
const userReview = document.querySelector('textarea[name=review]');
const reviewCurrentNum = document.querySelector('.current');
const reviewMax = document.querySelector('.max');
const reviewErr = document.querySelector('.error_msg');
const reviewmaxNum = 100;
console.log(userReview,reviewCurrentNum, reviewMax, reviewErr, reviewmaxNum)
reviewMax.textContent = reviewmaxNum;
userReview.addEventListener('input', reviewFunc)
function reviewFunc () {
    // 글자 수 속성 length
    if(/^.{0,100}$/.test(userReview.value)) {
        // 0~100자 입력 사이 일때 (참결과)
        reviewCurrentNum.textcontet = userReview.value.lenth
    }else {
        // 100자보다 클때 (거짓결과)
        reviewErr.textContent = '100자까지만 입력할수 있습니다'
        // 입력비활성화
        //userReview.disabled = true;
    }
}