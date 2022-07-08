const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const items = document.querySelector('.items');

for (let i = 0; i < imagesArray.length; i++) {
    items.innerHTML += `<div class="item"><img class="img-slide" src="${imagesArray[i]}"/></div>`
}
const itemList = document.getElementsByClassName('item');
itemList[slideAttiva].classList.add ('show');
