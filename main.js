let color = `rgb(255,255,255)`;
let flag = "Empty";

const setAttribute = (length) => {
  const div = document.querySelector(".container");
  div.style["grid-template-columns"] = `repeat(${length},${100 / length}%)`;
  div.style["grid-template-rows"] = `repeat(${length},${100 / length}%)`;
};

const makeGrid = (length) => {
  setAttribute(length);
  let cnt = 1;
  const myDiv = document.querySelector(".container");
  myDiv.innerHTML = "";
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const content = document.createElement("div");
      content.classList.add("item");
      content.setAttribute("id", `box-${cnt}`);
      content.style["background-color"] = "#FFFFFF";
      cnt++;
      myDiv.appendChild(content);
    }
  }
};

let input = document.querySelector(".size");

input.addEventListener("change", (e) => {
  makeGrid(e.target.value);
});

makeGrid(10);

const changeColor = (id) => {
  const div = document.querySelector(`#${id}`);
  if (flag != "RGB") div.style.backgroundColor = color;
  else {
    div.style.backgroundColor = `rgb(${Math.random() * 256},${
      Math.random() * 256
    },${Math.random() * 256})`;
  }
};
let grid = document.querySelector(".container");

grid.addEventListener("mouseover", (e) => {
  changeColor(e.target.id);
});

let myColorDiv = document.querySelector("#myColor");
myColorDiv.addEventListener("change", (e) => {
  flag = "Color";
  color = myColorDiv.value;
});

let rgb = document.querySelector("#rgb");
rgb.addEventListener("click", (e) => {
  flag = "RGB";
});

let clearId = document.querySelector("#clear");
clearId.addEventListener("click", (e) => {
  let length = document.querySelector(".size").value;
  makeGrid(length);
});

let myEraser = document.querySelector("#eraser");
myEraser.addEventListener("click", (e) => {
  color = `#FFFFFF`;
  flag = "Erase";
});
