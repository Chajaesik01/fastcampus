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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
console.log(thisYear.textContent);