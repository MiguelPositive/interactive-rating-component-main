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

const MOUSEOUT_STYLES = `

opacity: 0.4;
background: #262f38;
cursor: pointer;
font-weight: bold;

width: calc(1.5em + 1.5vw);
height: calc(1.5em + 1.5vw);
border-radius: 1000rem;

display: flex;
justifyContent: center;
alignItems: center;`;

const number1Selected = () => {
  selected1 = true;
  selected2 = false;
  selected3 = false;
  selected4 = false;
  selected5 = false;

  number1.style.cssText = "transition: 0.3s; opacity: 1; background: gray";
  number2.style.cssText = "background: #262F38; opacity: 0.4;";
  number3.style.cssText = "background: #262F38; opacity: 0.4;";
  number4.style.cssText = "background: #262F38; opacity: 0.4;";
  number5.style.cssText = "background: #262F38; opacity: 0.4;";

  view2Text1.textContent = "You selected 1 out 5";
};

const number2Selected = () => {
  selected1 = false;
  selected2 = true;
  selected3 = false;
  selected4 = false;
  selected5 = false;

  number1.style.cssText = "background: #262F38; opacity: 0.4;";
  number2.style.cssText = "transition: 0.3s; opacity: 1; background: gray";
  number3.style.cssText = "background: #262F38; opacity: 0.4;";
  number4.style.cssText = "background: #262F38; opacity: 0.4;";
  number5.style.cssText = "background: #262F38; opacity: 0.4;";

  view2Text1.textContent = "You selected 2 out 5";
};

const number3Selected = () => {
  selected1 = false;
  selected2 = false;
  selected3 = true;
  selected4 = false;
  selected5 = false;

  number1.style.cssText = "background: #262F38; opacity: 0.4;";
  number2.style.cssText = "background: #262F38; opacity: 0.4;";
  number3.style.cssText = "transition: 0.3s; opacity: 1; background: gray";
  number4.style.cssText = "background: #262F38; opacity: 0.4;";
  number5.style.cssText = "background: #262F38; opacity: 0.4;";

  view2Text1.textContent = "You selected 3 out 5";
};

const number4Selected = () => {
  selected1 = false;
  selected2 = false;
  selected3 = false;
  selected4 = true;
  selected5 = false;

  number1.style.cssText = "background: #262F38; opacity: 0.4;";
  number2.style.cssText = "background: #262F38; opacity: 0.4;";
  number3.style.cssText = "background: #262F38; opacity: 0.4;";
  number4.style.cssText = "transition: 0.3s; opacity: 1; background: gray";
  number5.style.cssText = "background: #262F38; opacity: 0.4;";

  view2Text1.textContent = "You selected 4 out 5";
};

const number5Selected = () => {
  selected1 = false;
  selected2 = false;
  selected3 = false;
  selected4 = false;
  selected5 = true;

  number1.style.cssText = "background: #262F38; opacity: 0.4;";
  number2.style.cssText = "background: #262F38; opacity: 0.4;";
  number3.style.cssText = "background: #262F38; opacity: 0.4;";
  number4.style.cssText = "background: #262F38; opacity: 0.4;";
  number5.style.cssText = "transition: 0.3s; opacity: 1; background: gray";
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
    number1.style.cssText = "background :#ff7512; opacity: 1";
  } else if (e.target.matches("#number2")) {
    number2.style.cssText = "background :#ff7512; opacity: 1";
  } else if (e.target.matches("#number3")) {
    number3.style.cssText = "background :#ff7512; opacity: 1";
  } else if (e.target.matches("#number4")) {
    number4.style.cssText = "background :#ff7512; opacity: 1";
  } else if (e.target.matches("#number5")) {
    number5.style.cssText = "background :#ff7512; opacity: 1";
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.matches("#number1")) {
    if (selected1) {
      number1Selected();
    } else {
      number1.style.cssText = `
      
       `;

      view2Text1.textContent = "You selected 1 out 5";
    }
  } else if (e.target.matches("#number2")) {
    if (selected2) {
      number2Selected();
    } else {
      number2.style.cssText = MOUSEOUT_STYLES;

      view2Text1.textContent = "You selected 1 out 5";
    }
  } else if (e.target.matches("#number3")) {
    if (selected3) {
      number3Selected();
    } else {
      number3.style.cssText = MOUSEOUT_STYLES;
    }
  } else if (e.target.matches("#number4")) {
    if (selected4) {
      number4Selected();
    } else {
      number4.style.cssText = MOUSEOUT_STYLES;
    }
  } else if (e.target.matches("#number5")) {
    if (selected5) {
      number5Selected();
    } else {
      number5.style.cssText = MOUSEOUT_STYLES;
    }
  }
});

const handleSubmit = () => {
  view1.style.display = "none";

  view2.style.cssText = `
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;`;

  main.className = "animate__animated animate__backInDown";
};

btnSubmit.addEventListener("click", handleSubmit);
