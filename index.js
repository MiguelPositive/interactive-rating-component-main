const main = document.querySelector("main");
const view1 = document.getElementById("view1");
const view2 = document.getElementById("view2");
const view2Text1 = document.getElementById("view-2-text-1");
const btnSubmit = document.querySelector(".btn-submit");

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");

let selected1 = false;
let selected2 = false;
let selected3 = false;
let selected4 = false;
let selected5 = false;

const number1Selected = () => {
  selected1 = true;

  number1.style.transition = "0.3s";

  number1.style.opacity = "1";
  number1.style.background = "gray";
  number2.style.background = "#262F38";
  number3.style.background = "#262F38";
  number4.style.background = "#262F38";
  number5.style.background = "#262F38";

  view2Text1.textContent = "You selected 1 out 5";
};

const number2Selected = () => {
  selected2 = true;

  number2.style.transition = "0.3s";

  number1.style.background = "#262F38";
  number2.style.background = "gray";
  number3.style.background = "#262F38";
  number4.style.background = "#262F38";
  number5.style.background = "#262F38";

  view2Text1.textContent = "You selected 2 out 5";
};

const number3Selected = () => {
  selected3 = true;

  number3.style.transition = "0.3s";

  number1.style.background = "#262F38";
  number2.style.background = "#262F38";
  number3.style.background = "gray";
  number4.style.background = "#262F38";
  number5.style.background = "#262F38";

  view2Text1.textContent = "You selected 3 out 5";
};

const number4Selected = () => {
  selected4 = true;

  number4.style.transition = "0.3s";

  number1.style.background = "#262F38";
  number2.style.background = "#262F38";
  number3.style.background = "#262F38";
  number4.style.background = "gray";
  number5.style.background = "#262F38";

  view2Text1.textContent = "You selected 4 out 5";
};

const number5Selected = () => {
  selected5 = true;

  number5.style.transition = "0.3s";

  number1.style.background = "#262F38";
  number2.style.background = "#262F38";
  number3.style.background = "#262F38";
  number4.style.background = "#262F38";
  number5.style.background = "gray";

  view2Text1.textContent = "You selected 5 out 5";
};

const handleClickSelect = (e) => {
  switch (e.target.id) {
    case "number1":
      number1Selected();

      break;

    case "number2":
      number2Selected();
      break;

    case "number3":
      number3Selected();
      break;

    case "number4":
      number4Selected();
      break;

    case "number5":
      number5Selected();
      break;

    default:
      break;
  }
};

document.addEventListener("click", (e) => {
  if (
    e.target.matches("#number1") ||
    e.target.matches("#number2") ||
    e.target.matches("#number3") ||
    e.target.matches("#number4") ||
    e.target.matches("#number5")
  ) {
    handleClickSelect(e);
  }
});

document.addEventListener("mouseover", (e) => {
  if (e.target.matches("#number1")) {
    number1.style.background = "#ff7512";
    number1.style.opacity = "1";
  } else if (e.target.matches("#number2")) {
    number2.style.background = "#ff7512";
    number2.style.opacity = "1";
  } else if (e.target.matches("#number3")) {
    number3.style.background = "#ff7512";
    number3.style.opacity = "1";
  } else if (e.target.matches("#number4")) {
    number4.style.background = "#ff7512";
    number4.style.opacity = "1";
  } else if (e.target.matches("#number5")) {
    number5.style.background = "#ff7512";
    number5.style.opacity = "1";
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.matches("#number1")) {
    if (selected1) {
      number1Selected();
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
  } else if (e.target.matches("#number2")) {
    if (selected1) {
      number2Selected();
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

      view2Text1.textContent = "You selected 1 out 5";
    }
  } else if (e.target.matches("#number3")) {
    if (selected3) {
      number3Selected();
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
  } else if (e.target.matches("#number4")) {
    if (selected4) {
      number4Selected();
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
  } else if (e.target.matches("#number5")) {
    if (selected5) {
      number5Selected();
    } else {
      number5.style.transition = "0.4s";

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
  }
});

const handleSubmit = () => {
  view1.style.display = "none";
  view2.style.display = "flex";
  view2.style.justifyContent = "center";
  view2.style.alignItems = "center";
  view2.style.flexWrap = "wrap";

  main.className = "animate__animated animate__backInDown";
};

btnSubmit.addEventListener("click", handleSubmit);
