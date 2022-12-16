
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnOpen = document.querySelector('button[data-start]')
const btnClose = document.querySelector('button[data-data-stop]')
const body = document.querySelector('body')
const colorSpan = document.querySelector('.color');

let timeId = null;

const getChangeColorBg = function () {
body.style.backgroundColor = getRandomHexColor() ;
body.style.color = getRandomHexColor();
colorSpan.textContent =getRandomHexColor();
}

btnOpen.addEventListener("click" , ()=>{
timeId = setInterval(getChangeColorBg, 1000);
btnOpen.disabled=true;
})

btnClose.addEventListener("click",()=>{
clearInterval(timeId);
btnClose.disabled= false;
})
