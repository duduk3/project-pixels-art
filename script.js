/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
/* eslint-disable space-in-parens */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable eqeqeq */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-use-before-define */
/* eslint-disable spaced-comment */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable space-before-blocks */
/* eslint-disable no-param-reassign */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
window.onload = console.log('carregado'); 

let selectorBlack = document.querySelector(".black");
let selectorSecond = document.querySelector(".second");
let selectorThird = document.querySelector(".third");
let selectorFourth = document.querySelector(".fourth");

selectorBlack.classList.add('selected');

selectorBlack.addEventListener('click', selectColor);
selectorSecond.addEventListener('click', selectColor);
selectorThird.addEventListener('click', selectColor);
selectorFourth.addEventListener('click', selectColor);

function selectColor(event) {
    event.target.classList.add('selected');

    if (event.target !== selectorBlack && selectorBlack.classList.length > 2) {
        selectorBlack.classList.remove('selected');
    }
    if (event.target !== selectorSecond && selectorSecond.classList.length > 2) {
        selectorSecond.classList.remove('selected');
    }
    if (event.target !== selectorThird && selectorThird.classList.length > 2) {
        selectorThird.classList.remove('selected');
    }
    if (event.target !== selectorFourth && selectorFourth.classList.length > 2) {
        selectorFourth.classList.remove('selected');
    }
}

let selectedPixel = document.querySelectorAll(".pixel");

for (let index = 0; index < selectedPixel.length; index += 1) {
    selectedPixel[index].addEventListener('click', selectPixel);
}


function selectPixel(event) {
    if (selectorBlack.classList.length > 2 ) {
        event.target.className = 'pixel black';   
        event.target.classList.add('black');   
    }
    if (selectorSecond.classList.length > 2 ) {
        event.target.className = 'pixel second';   
        event.target.classList.add('second');   
    }
    if (selectorThird.classList.length > 2 ) {
        event.target.className = 'pixel third';   
        event.target.classList.add('third');   
    }
    if (selectorFourth.classList.length > 2 ) {
        event.target.className = 'pixel fourth';   
        event.target.classList.add('fourth');   
    }
}



