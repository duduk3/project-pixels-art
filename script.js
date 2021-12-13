/* eslint-disable no-unreachable */
/* eslint-disable use-isnan */
/* eslint-disable no-restricted-globals */
/* eslint-disable func-names */
/* eslint-disable sonarjs/no-extra-arguments */
/* eslint-disable radix */
/* eslint-disable prefer-template */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
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

window.onload = createPixels(5);

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

let changeFirst = document.querySelector(".blue");
let changeSecond = document.querySelector(".red");
let changeThird = document.querySelector(".yellow");
let rgbColor1 = Math.random() * 255;
let rgbColor2 = Math.random() * 255;
let rgbColor3 = Math.random() * 255;
rgbColor1 = Math.round(rgbColor1);
rgbColor2 = Math.round(rgbColor2);
rgbColor3 = Math.round(rgbColor3);
let rgb1String = 'rgb( ' + rgbColor1 + ',' + rgbColor2 + ',' + rgbColor3 + ')';
let rgb2String = 'rgb( ' + rgbColor2 + ',' + rgbColor3 + ',' + rgbColor1 + ')';
let rgb3String = 'rgb( ' + rgbColor3 + ',' + rgbColor1 + ',' + rgbColor2 + ')';

function createColors(c1, c2, c3){
    changeFirst.style.backgroundColor = c1;
    changeSecond.style.backgroundColor = c2;
    changeThird.style.backgroundColor = c3;
}

createColors(rgb1String, rgb2String, rgb3String);


//*= =============================================
//* Requisito 10
//*= =============================================
let btnSize = document.querySelector("#generate-board");
let boardSize = document.querySelector("#board-size").value;

btnSize.addEventListener('click', takeValue);

function takeValue(){
    boardSize = document.querySelector("#board-size").value;
    isPixelExist = document.getElementsByClassName("pixel");

    
    if (boardSize === '' || parseInt(boardSize) < 1 || boardSize === undefined){
        alert('Board inválido!');
        document.querySelector("#board-size").value = '';
        return;
    }
    if (boardSize > 50) {
        boardSize = '50';
    } 
    if (boardSize < 5) {
        boardSize = '5';
    }
    if (boardSize === NaN) {
        alert('Board inválido!');
        document.querySelector("#board-size").value = '';
        boardSize = '5';
    } else {
        //*= Essa linha abaixo foi sugestão encontrada em : https://pt.stackoverflow.com/questions/441373/como-remover-todos-os-elementos-de-uma-div-em-javascript
        //limpa o quadro existente para criar outro
        document.querySelector("#pixel-board").innerText = "";

        createPixels(boardSize);
        document.querySelector("#board-size").value = '';
    }
}


function createPixels(tamanho){
    let paiBoard = document.querySelector("#pixel-board");
    let filhoPixel = '';
    paiBoard.style.width = (tamanho * 42) + 'px';
    paiBoard.style.height = (tamanho * 42) + 'px';
    for (let i = 0; i < tamanho ** 2; i += 1) {
        filhoPixel = document.createElement('div');
        filhoPixel.className = "pixel background-white";
        paiBoard.appendChild(filhoPixel);
    }





    //seleciona os pixels no quardo
    let selectedPixel = document.querySelectorAll(".pixel");

    //adiciona evento em cada pixel
    for (let index = 0; index < selectedPixel.length; index += 1) {
        selectedPixel[index].addEventListener('click', selectPixel);
    }

    function selectPixel(event) {
        if (selectorBlack.classList.length > 2 ) {
            event.target.className = 'pixel black';   
            event.target.style.backgroundColor = 'black';   
        }
        if (selectorBlue.classList.length > 2 ) {
            event.target.className = 'pixel background-white';   
            event.target.style.backgroundColor = rgb1String;   
        }
        if (selectorRed.classList.length > 2 ) {
            event.target.className = 'pixel background-white';   
            event.target.style.backgroundColor = rgb2String;   
        }
        if (selectorYellow.classList.length > 2 ) {
            event.target.className = 'pixel background-white';   
            event.target.style.backgroundColor = rgb3String;   
        }
    }

    //*= =============================================
    //* Requisito 9
    //*= =============================================
    let btnLimpar = document.querySelector("#clear-board");

    btnLimpar.addEventListener('click', clearAll);

    function clearAll(){
        for (let index = 0; index < selectedPixel.length; index += 1) {
            selectedPixel[index].style.backgroundColor = 'white';
        }
    }
}