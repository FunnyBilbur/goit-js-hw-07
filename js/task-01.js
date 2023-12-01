"use strict";

const categories_counter = document.querySelector("#categories");
// console.dir(categories_counter);
console.log("Number of categories: ", categories_counter.children.length);

[...categories_counter.children].forEach((item) => {
    console.log("Category: ", item.firstElementChild.innerText);
    console.log('Elements:', item.lastElementChild.children.length);

});