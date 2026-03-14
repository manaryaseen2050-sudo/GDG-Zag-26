let element = document.getElementById("elzero");
console.log(element);

let element2 = document.getElementsByClassName("element")[0];
console.log(element2);

let element3 = document.getElementsByTagName("div")[0];
console.log(element3);

let element4 = document.getElementsByName("js")[0];
console.log(element4);

let element5 = document.querySelector("#elzero");
console.log(element5);

let element6 = document.querySelector(".element");
console.log(element6);

let element7 = document.querySelector("[name='js']");
console.log(element7);

let element8 = document.querySelector("div");
console.log(element8);

let element9 = document.querySelectorAll("#elzero")[0];
console.log(element9);

let element10 = document.querySelectorAll(".element")[0];
console.log(element10);

let element11 = document.querySelectorAll("[name='js']")[0];
console.log(element11);

let element12 = document.querySelectorAll("div")[0];
console.log(element12);

let element13 = document.body.children[0];
console.log(element13);

let element14 = document.body.firstElementChild;
console.log(element14);

let element15 = document.body.childNodes[1];
console.log(element15);

let الصور = document.querySelectorAll("img");

for (let i = 0; i < الصور.length; i++) {
  الصور[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  الصور[i].alt = "Elzero Logo";
}
let input = document.querySelector("[name='dollar']");
let result = document.querySelector(".result");

input.oninput = function () {
  if (input.value === "") {
    result.innerHTML = "{0} USD Dollar = {0} Egyptian Pound";
  } else {
    let dollar = Number(input.value);
    let egp = (dollar * 15.6).toFixed(2);

    result.innerHTML = `${dollar} USD Dollar = ${egp} Egyptian Pound`;
  }
};
let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");

let firstText = firstDiv.textContent;
let secondText = secondDiv.textContent;

let firstTitle = firstDiv.title;
let secondTitle = secondDiv.title;

firstDiv.textContent = secondText;
secondDiv.textContent = firstText + " " + secondDiv.attributes.length;

firstDiv.title = firstTitle;
secondDiv.title = secondTitle;
let imgs = document.querySelectorAll("img");

for (let i = 0; i < imgs.length; i++) {
  if (imgs[i].hasAttribute("alt")) {
    imgs[i].alt = "Old";
  } else {
    imgs[i].alt = "Elzero New";
  }
}
let form = document.querySelector("form");
let elementsInput = document.querySelector("[name='elements']");
let textInput = document.querySelector("[name='texts']");
let typeInput = document.querySelector("[name='type']");
let results = document.querySelector(".results");

form.onsubmit = function (e) {
  e.preventDefault();

  results.innerHTML = "";

  let count = Number(elementsInput.value);
  let text = textInput.value;
  let type = typeInput.value;

  for (let i = 1; i <= count; i++) {
    let newElement = document.createElement(type);

    newElement.className = "box";
    newElement.title = "Element";
    newElement.id = `id-${i}`;
    newElement.textContent = text;

    results.appendChild(newElement);
  }
};

    //   Task 3

let userInput = prompt("Print Number From – To", "Example: 5-20");

if (userInput && userInput.includes("-")) {
  let numbers = userInput.split("-");

  let firstNum = Number(numbers[0]);
  let secondNum = Number(numbers[1]);

  let start = Math.min(firstNum, secondNum);
  let end = Math.max(firstNum, secondNum);

  for (let i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}
// function createPopup() {
//   let popup = document.createElement("div");
//   let heading = document.createElement("h2");
//   let paragraph = document.createElement("p");
//   let closeBtn = document.createElement("button");

//   heading.textContent = "Welcome";
//   paragraph.textContent = "Welcome To Elzero Web School";
//   closeBtn.textContent = "X";

//   popup.appendChild(closeBtn);
//   popup.appendChild(heading);
//   popup.appendChild(paragraph);

//   document.body.appendChild(popup);

//   // تنسيقات
//   popup.style.cssText = `
//     width: 400px;
//     padding: 20px;
//     background-color: #eee;
//     border: 1px solid #ccc;
//     position: fixed;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     text-align: center;
//     font-family: Arial;
//   `;

//   closeBtn.style.cssText = `
//     position: absolute;
//     top: -10px;
//     right: -10px;
//     background-color: red;
//     color: white;
//     border: none;
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     cursor: pointer;
//   `;

//   closeBtn.onclick = function () {
//     popup.remove();
//   };
// }

// setTimeout(createPopup, 5000);
// let div = document.querySelector("div");

// let counter = setInterval(function () {
//   div.innerHTML -= 1;

//   if (Number(div.innerHTML) === 0) {
//     clearInterval(counter);
//   }
// }, 1000);
// let div = document.querySelector("div");

// let counter = setInterval(function () {
//   div.innerHTML -= 1;

//   if (Number(div.innerHTML) === 0) {
//     clearInterval(counter);
//     window.location.href = "https://elzero.org";
//   }
// }, 1000);
let div = document.querySelector("div");

let counter = setInterval(function () {
  div.innerHTML -= 1;

  if (Number(div.innerHTML) === 5) {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=600,height=400,left=300,top=100"
    );
  }

  if (Number(div.innerHTML) === 0) {
    clearInterval(counter);
  }
}, 1000);
