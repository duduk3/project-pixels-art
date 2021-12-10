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
selectedBlack.classList.add('selected');

let selectedSecond = document.querySelector(".second");

let selectedThird = document.querySelector(".third");

let selectedFourth = document.querySelector(".fourth");


selectedBlack.addEventListener('click', selectColor);
selectedSecond.addEventListener('click', selectColor);
selectedThird.addEventListener('click', selectColor);
selectedFourth.addEventListener('click', selectColor);


function selectColor(event) {
    if (event.target.classList.length === 2){
        event.target.classList.add('selected');
    }
    else {
        event.target.classList.remove('selected');
    }
}

