const mainhover = document.querySelector('#head_layout');
const subhover = document.querySelector('.sub_menu');
mainhover.addEventListener('mouseover', function () {
    // console.log('111')
    if (subhover.classList.contains('unvisible')) { //unvisible (안보이게)
        subhover.classList.remove('unvisible');
    } else { //visible (보이게)
        subhover.classList.add('unvisible');
    }
});
mainhover.addEventListener('mouseout', function () {
    // console.log('333')
    if (!subhover.classList.contains('unvisible')) {
        subhover.classList.add('unvisible')
    }
});

// 버튼 클릭시 색깔 바뀌게 하기

const btnEls = document.querySelectorAll('.ticket input[type="button"]');
for (let i = 0; i < btnEls.length; i++) {
    // console.log(btnEls[i]);
    btnEls.forEach(function (btnEl, index) {
        // console.log(btnEls);
        btnEls[i].addEventListener('click', function () {
            //클릭시 변화
            if (!btnEls[i].classList.contains('active')) {
                btnEls[i].classList.add('active')
            } else {
                for (let j = 0; j < btnEls.length; j++) {
                    if (j != i) {
                        btnEls[j].classList.remove('active')
                    }
                }
                btnEls[i].classList.remove('active') //다시 클릭해도 해제 되겠금 일부러 만듦
            }
        });
    });
}

//content_menu 클릭시 색 변화

const menuEls = document.querySelectorAll('.ul_menu')
const ticketEls = document.querySelectorAll('.ticket')
// console.log(ticketEls)
for (let i = 0; i < menuEls.length; i++) {
    menuEls.forEach(function (menuEl, index) {
        ticketEls.forEach(function(ticketEl,index){
            menuEls[i].addEventListener('click', function () {
                if (!menuEls[i].classList.contains('open')) {
                    menuEls[i].classList.add('open')
                    ticketEls[i].classList.add('open')
                } else {
                    for (let j = 0; j < menuEls.length; j++) {
                        if (j != i) {
                            menuEls[j].classList.remove('open')
                            ticketEls[j].classList.remove('open')
                        }
                    }   
                }
            });
        });
    });
}