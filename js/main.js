const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const items = document.querySelector('.items');
let slideAttiva = 0;

for (let i = 0; i < imagesArray.length; i++) {
    items.innerHTML += `<div class="item"><img class="img-slide" src="${imagesArray[i]}"/></div>`
}

const itemList = document.getElementsByClassName('item');
itemList[slideAttiva].classList.add ('show');

const next = document.querySelector('.next');
next.addEventListener("click",
    function () {
        itemList[slideAttiva].classList.remove('show');
        slideAttiva++;
        itemList[slideAttiva].classList.add('show');
        console.log(slideAttiva);
        if (slideAttiva == 4) {
            console.log(slideAttiva);
            next.classList.add('hide');
        } else {
            next.classList.remove('hide');        
        }
        if (slideAttiva == 0) {
            prev.classList.add('hide');
        } else {
            prev.classList.remove('hide');
        }
    }
)


const prev = document.querySelector('.prev');
prev.addEventListener("click",
    function () {
        itemList[slideAttiva].classList.remove('show');
        slideAttiva--;
        itemList[slideAttiva].classList.add('show');
        if (slideAttiva == 0) {
            prev.classList.add('hide');
        } else {
            prev.classList.remove('hide');
        }
        if (slideAttiva == 4) {
            console.log(slideAttiva);
            next.classList.add('hide');
        } else {
            next.classList.remove('hide');        
        }
    }
)


