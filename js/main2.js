const mainMenuEl = document.querySelector('.main-menu')
const mainBgEl = document.querySelector('.menu-bg')
// console.log(mainBgEl);
mainMenuEl.addEventListener('mouseover',function(){
    mainBgEl.classList.add('on')
});
mainMenuEl.addEventListener('mouseout',function(){
    mainBgEl.classList.remove('on')
});
mainBgEl.addEventListener('mouseover',function(){
    mainBgEl.classList.add('on')
    mainMenuEl.classList.add('on')
})
mainBgEl.addEventListener('mouseout',function(){
    mainBgEl.classList.remove('on')
    mainMenuEl.classList.remove('on')
})

const mobileMenuEl = document.querySelector('.mobile-menu');
const mobileboxEl = document.querySelector('.mobile-box');
const mobilecloseEl = document.querySelector('.close');
mobileMenuEl.addEventListener('click',function(){
    mobileboxEl.classList.add('show');
});
mobilecloseEl.addEventListener('click',function(){
    mobileboxEl.classList.remove('show');
});