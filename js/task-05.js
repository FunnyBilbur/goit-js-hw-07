function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const change_color = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');
console.dir(color);
change_color.addEventListener('click', onClick);

function onClick() {
  const randomColor = getRandomHexColor();
  body.setAttribute('style', `background-color:${randomColor}`);
  color.textContent = randomColor;
}