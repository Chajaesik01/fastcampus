const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    //Logic
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", '통합검색');
})

// 포커스가 해제된 경우
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
})

//document는 html을 의미
const badgeEl = document.querySelector('header .badges');

// window는 브라우저 창을의미
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500 ){
       //배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
           opacity: 0,
           display: 'none'
        })
    } else{
        //배지 보이기
        gsap.to(badgeEl, .6,{
            opacity: 1,
            display : 'block'
        })
        

    }
}, 300));
// _.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl, 1,{
        opacity: 1,
        // 순차처리를 위한 반복
        delay: (index + 1) * 0.7,// 0.7, 1.4, 2.1, 2.7
    })
});


