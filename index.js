const main = document.querySelector("main");
const view1 = document.getElementById("view1");
const view2 = document.getElementById("view2");
const view2Text1 = document.getElementById("view-2-text-1");
const btnSubmit = document.querySelector(".btn-submit");

const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const n4 = document.querySelector(".n4");
const n5 = document.querySelector(".n5");

const number1 = document.getElementById("1");
const number2 = document.getElementById("2");
const number3 = document.getElementById("3");
const number4 = document.getElementById("4");
const number5 = document.getElementById("5");

let selected1 = false;
let selected2 = false;
let selected3 = false;
let selected4 = false;
let selected5 = false;

const handleClickSelect = (e) => {
  switch (e.target.classList[1]) {
    case "n1":
      selected1 = true;

      number1.style.transition = "0.3s";

      number1.style.opacity = "1";
      number1.style.background = "gray";
      number2.style.background = "#262F38";
      number3.style.background = "#262F38";
      number4.style.background = "#262F38";
      number5.style.background = "#262F38";

      view2Text1.textContent = "You selected 1 out 5";

      break;

    case "n2":
      selected2 = true;

      number2.style.transition = "0.3s";

      number1.style.background = "#262F38";
      number2.style.background = "gray";
      number3.style.background = "#262F38";
      number4.style.background = "#262F38";
      number5.style.background = "#262F38";

      view2Text1.textContent = "You selected 2 out 5";

      break;

    case "n3":
      selected3 = true;

      number3.style.transition = "0.3s";

      number1.style.background = "#262F38";
      number2.style.background = "#262F38";
      number3.style.background = "gray";
      number4.style.background = "#262F38";
      number5.style.background = "#262F38";

      view2Text1.textContent = "You selected 3 out 5";

      break;

    case "n4":
      selected4 = true;

      number4.style.transition = "0.3s";

      number1.style.background = "#262F38";
      number2.style.background = "#262F38";
      number3.style.background = "#262F38";
      number4.style.background = "gray";
      number5.style.background = "#262F38";

      view2Text1.textContent = "You selected 4 out 5";

      break;

    case "n5":
      selected5 = true;

      number5.style.transition = "0.3s";

      number1.style.background = "#262F38";
      number2.style.background = "#262F38";
      number3.style.background = "#262F38";
      number4.style.background = "#262F38";
      number5.style.background = "gray";

      view2Text1.textContent = "You selected 5 out 5";

      break;

    default:
      break;
  }
};

const handleSubmit = () => {
  view1.style.display = "none";
  view2.style.display = "flex";
  view2.style.justifyContent = "center";
  view2.style.alignItems = "center";
  view2.style.flexWrap = "wrap";

  main.className = "animate__animated animate__backInDown";
};

n1.addEventListener("click", handleClickSelect);
n2.addEventListener("click", handleClickSelect);
n3.addEventListener("click", handleClickSelect);
n4.addEventListener("click", handleClickSelect);
n5.addEventListener("click", handleClickSelect);

n1.addEventListener("mouseover", () => {
  number1.style.background = "#ff7512";
  number1.style.opacity = "1";
});

n2.addEventListener("mouseover", () => {
  number2.style.background = "#ff7512";
  number2.style.opacity = "1";
});

n3.addEventListener("mouseover", () => {
  number3.style.background = "#ff7512";
  number3.style.opacity = "1";
});

n4.addEventListener("mouseover", () => {
  number4.style.background = "#ff7512";
  number4.style.opacity = "1";
});

n5.addEventListener("mouseover", () => {
  number5.style.background = "#ff7512";
  number5.style.opacity = "1";
});

n1.addEventListener("mouseout", () => {
  if (selected1) {
    number1.style.transition = "0.3s";

    number1.style.opacity = "1";
    number1.style.background = "gray";
    number2.style.background = "#262F38";
    number3.style.background = "#262F38";
    number4.style.background = "#262F38";
    number5.style.background = "#262F38";

    view2Text1.textContent = "You selected 1 out 5";
  } else {
    number1.style.transition = "0.4s";

    number1.style.background = "#262f38";
    number1.style.cursor = "pointer";
    number1.style.fontWeight = "bold";
    number1.style.opacity = "0.4";

    number1.style.width = "calc(1.5em + 1.5vw)";
    number1.style.height = "calc(1.5em + 1.5vw)";
    number1.style.borderRadius = "1000rem";

    number1.style.display = "flex";
    number1.style.justifyContent = "center";
    number1.style.alignItems = "center";

    view2Text1.textContent = "You selected 1 out 5";
  }
});

n2.addEventListener("mouseout", () => {
  if (selected2) {
    number2.style.transition = "0.3s";

    number1.style.background = "#262F38";
    number2.style.background = "gray";
    number3.style.background = "#262F38";
    number4.style.background = "#262F38";
    number5.style.background = "#262F38";

    view2Text1.textContent = "You selected 2 out 5";
  } else {
    number2.style.transition = "0.4s";

    number2.style.background = "#262f38";
    number2.style.cursor = "pointer";
    number2.style.fontWeight = "bold";
    number2.style.opacity = "0.4";

    number2.style.width = "calc(1.5em + 1.5vw)";
    number2.style.height = "calc(1.5em + 1.5vw)";
    number2.style.borderRadius = "1000rem";

    number2.style.display = "flex";
    number2.style.justifyContent = "center";
    number2.style.alignItems = "center";
  }
});

n3.addEventListener("mouseout", () => {
  if (selected3) {
    number3.style.transition = "0.3s";

    number1.style.background = "#262F38";
    number2.style.background = "#262F38";
    number3.style.background = "gray";
    number4.style.background = "#262F38";
    number5.style.background = "#262F38";

    view2Text1.textContent = "You selected 3 out 5";
  } else {
    number3.style.transition = "0.4s";

    number3.style.background = "#262f38";
    number3.style.cursor = "pointer";
    number3.style.fontWeight = "bold";
    number3.style.opacity = "0.4";

    number3.style.width = "calc(1.5em + 1.5vw)";
    number3.style.height = "calc(1.5em + 1.5vw)";
    number3.style.borderRadius = "1000rem";

    number3.style.display = "flex";
    number3.style.justifyContent = "center";
    number3.style.alignItems = "center";
  }
});

n4.addEventListener("mouseout", () => {
  if (selected4) {
    number4.style.transition = "0.3s";

    number1.style.background = "#262F38";
    number2.style.background = "#262F38";
    number3.style.background = "#262F38";
    number4.style.background = "gray";
    number5.style.background = "#262F38";

    view2Text1.textContent = "You selected 4 out 5";
  } else {
    number4.style.transition = "0.4s";

    number4.style.background = "#262f38";
    number4.style.cursor = "pointer";
    number4.style.fontWeight = "bold";
    number4.style.opacity = "0.4";

    number4.style.width = "calc(1.5em + 1.5vw)";
    number4.style.height = "calc(1.5em + 1.5vw)";
    number4.style.borderRadius = "1000rem";

    number4.style.display = "flex";
    number4.style.justifyContent = "center";
    number4.style.alignItems = "center";
  }
});

n5.addEventListener("mouseout", () => {
  if (selected5) {
    number5.style.transition = "0.3s";

    number1.style.background = "#262F38";
    number2.style.background = "#262F38";
    number3.style.background = "#262F38";
    number4.style.background = "#262F38";
    number5.style.background = "gray";

    view2Text1.textContent = "You selected 5 out 5";
  } else {
    number4.style.transition = "0.4s";

    number5.style.background = "#262f38";
    number5.style.cursor = "pointer";
    number5.style.fontWeight = "bold";
    number5.style.opacity = "0.4";

    number5.style.width = "calc(1.5em + 1.5vw)";
    number5.style.height = "calc(1.5em + 1.5vw)";
    number5.style.borderRadius = "1000rem";

    number5.style.display = "flex";
    number5.style.justifyContent = "center";
    number5.style.alignItems = "center";
  }
});

btnSubmit.addEventListener("click", handleSubmit);
