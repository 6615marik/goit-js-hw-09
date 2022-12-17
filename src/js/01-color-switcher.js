function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');


let timeId = null;



const backgroundColourChange = function () {
  body.style.backgroundColor = getRandomHexColor();
  body.style.color = getRandomHexColor();

};


btnStart.addEventListener('click', () => {
  timeId = setInterval(backgroundColourChange, 1000);
  btnStart.disabled = true;
});


btnStop.addEventListener('click', () => {
  clearInterval(timeId);
  btnStart.disabled = false;
});
