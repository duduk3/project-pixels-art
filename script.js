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

let selectorBlack = document.querySelector(".black");
let selectorBlue = document.querySelector(".blue");
let selectorRed = document.querySelector(".red");
let selectorYellow = document.querySelector(".yellow");

selectorBlack.classList.add('selected');

selectorBlack.addEventListener('click', selectColor);
selectorBlue.addEventListener('click', selectColor);
selectorRed.addEventListener('click', selectColor);
selectorYellow.addEventListener('click', selectColor);

function selectColor(event) {
    event.target.classList.add('selected');

    if (event.target !== selectorBlack && selectorBlack.classList.length > 2) {
        selectorBlack.classList.remove('selected');
    }
    if (event.target !== selectorBlue && selectorBlue.classList.length > 2) {
        selectorBlue.classList.remove('selected');
    }
    if (event.target !== selectorRed && selectorRed.classList.length > 2) {
        selectorRed.classList.remove('selected');
    }
    if (event.target !== selectorYellow && selectorYellow.classList.length > 2) {
        selectorYellow.classList.remove('selected');
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
    if (selectorBlue.classList.length > 2 ) {
        event.target.className = 'pixel blue';   
        event.target.classList.add('blue');   
    }
    if (selectorRed.classList.length > 2 ) {
        event.target.className = 'pixel red';   
        event.target.classList.add('red');   
    }
    if (selectorYellow.classList.length > 2 ) {
        event.target.className = 'pixel yellow';   
        event.target.classList.add('yellow');   
    }
}



