function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const main_box = document.querySelector('#boxes');
const counter = document.querySelector('input[type = "number"]');
const create_btn = document.querySelector('button[data-create]');
const destroy_btn = document.querySelector('button[data-destroy]');

create_btn.addEventListener('click', () => {
  createBoxes(counter.value);
});

destroy_btn.addEventListener('click', () => {
  destroyBoxes();
})

main_box.setAttribute('style', `display: flex; align-items: baseline; flex-flow: wrap;`)

function createBoxes(amount) {
  counter.value = '';
  destroyBoxes();
  if (amount > 100) {
    return;
  }
  const divArray = []; // сюда закидываем каждый созданный див
  const eachStep = 10;
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();
    const div = document.createElement("div");
    div.setAttribute('style', `width:${width}px; height: ${height}px; background-color: ${randomColor}; margin: 5px;`);
    divArray.push(div);
    width += eachStep;
    height += eachStep;
  }
  // console.log(divArray);
  main_box.append(...divArray);
}

function destroyBoxes() {
  const divArray = main_box.childNodes;
  const divArrayLength = divArray.length;

  //первий способ удаляет каждый цикл нулевой элемент массива, то есть первый элемент, пока не закончится массив childNodes
  // for (let i = 0; i < divArray.length;) {
  //   divArray[i].remove();
  // }

  //второй способ делает тоже самое, только здесь мы используем ключевое слово firstElementChild 
  //и с помощью length прогоняем весь массив элементов удаляя каждый раз первый элемент
  for (let i = 0; i < divArrayLength; i++) {
    main_box.firstElementChild.remove();
  }
  // console.log(divArray);
}