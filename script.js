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
let selectedBlack = document.querySelector(".black");
let selectedSecond = document.querySelector(".second");
let selectedThird = document.querySelector(".third");
let selectedFourth = document.querySelector(".fourth");

selectedBlack.classList.add('selected');

selectedBlack.addEventListener('click', selectColor);
selectedSecond.addEventListener('click', selectColor);
selectedThird.addEventListener('click', selectColor);
selectedFourth.addEventListener('click', selectColor);

function selectColor(event) {
    event.target.classList.add('selected');

    if (event.target !== selectedBlack && selectedBlack.classList.length > 2) {
        selectedBlack.classList.remove('selected');
    }
    if (event.target !== selectedSecond && selectedSecond.classList.length > 2) {
        selectedSecond.classList.remove('selected');
    }
    if (event.target !== selectedThird && selectedThird.classList.length > 2) {
        selectedThird.classList.remove('selected');
    }
    if (event.target !== selectedFourth && selectedFourth.classList.length > 2) {
        selectedFourth.classList.remove('selected');
    }
}

let selectedPixel = document.querySelectorAll(".pixel");

for (let index = 0; index < selectedPixel.length; index += 1) {
    selectedPixel[index].addEventListener('click', selectPixel);
}


function selectPixel(event) {
    if (selectedBlack.classList.length > 2 ) {
        event.target.className = 'pixel black';   
        event.target.classList.add('black');   
    }
    if (selectedSecond.classList.length > 2 ) {
        event.target.className = 'pixel second';   
        event.target.classList.add('second');   
    }
    if (selectedThird.classList.length > 2 ) {
        event.target.className = 'pixel third';   
        event.target.classList.add('third');   
    }
    if (selectedFourth.classList.length > 2 ) {
        event.target.className = 'pixel fourth';   
        event.target.classList.add('fourth');   
    }
}



