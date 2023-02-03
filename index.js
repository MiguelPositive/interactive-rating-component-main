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

const buttons = {
  button1: false,
  button2: false,
  button3: false,
  button4: false,
  button5: false,
};

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

const detectButton = (number) => {
  for (let index = 1; index <= 5; index++) {
    switch (number) {
      case 1:
        buttons.button1 = true;
        buttons.button2 = false;
        buttons.button3 = false;
        buttons.button4 = false;
        buttons.button5 = false;
        break;

      case 2:
        buttons.button1 = false;
        buttons.button2 = true;
        buttons.button3 = false;
        buttons.button4 = false;
        buttons.button5 = false;
        break;

      case 3:
        buttons.button1 = false;
        buttons.button2 = false;
        buttons.button3 = true;
        buttons.button4 = false;
        buttons.button5 = false;

        break;

      case 4:
        buttons.button1 = false;
        buttons.button2 = false;
        buttons.button3 = false;
        buttons.button4 = true;
        buttons.button5 = false;
        break;
      case 5:
        buttons.button1 = false;
        buttons.button2 = false;
        buttons.button3 = false;
        buttons.button4 = false;
        buttons.button5 = true;
        break;

      default:
        break;
    }
  }
};

const button1Selected = () => {
  detectButton(1);

  number1.style.cssText = "transition: 0.3s; opacity: 1; background: gray";
  number2.style.cssText = "background: #262F38; opacity: 0.4;";
  number3.style.cssText = "background: #262F38; opacity: 0.4;";
  number4.style.cssText = "background: #262F38; opacity: 0.4;";
  number5.style.cssText = "background: #262F38; opacity: 0.4;";

  view2Text1.textContent = "You selected 1 out 5";
};
const button2Selected = () => {
  detectButton(2);

  number1.style.cssText = "background: #262F38; opacity: 0.4;";
  number2.style.cssText = "transition: 0.3s; opacity: 1; background: gray";
  number3.style.cssText = "background: #262F38; opacity: 0.4;";
  number4.style.cssText = "background: #262F38; opacity: 0.4;";
  number5.style.cssText = "background: #262F38; opacity: 0.4;";

  view2Text1.textContent = "You selected 2 out 5";
};

const button3Selected = () => {
  detectButton(3);
  number1.style.cssText = "background: #262F38; opacity: 0.4;";
  number2.style.cssText = "background: #262F38; opacity: 0.4;";
  number3.style.cssText = "transition: 0.3s; opacity: 1; background: gray";
  number4.style.cssText = "background: #262F38; opacity: 0.4;";
  number5.style.cssText = "background: #262F38; opacity: 0.4;";

  view2Text1.textContent = "You selected 3 out 5";
};

const button4Selected = () => {
  detectButton(4);

  number1.style.cssText = "background: #262F38; opacity: 0.4;";
  number2.style.cssText = "background: #262F38; opacity: 0.4;";
  number3.style.cssText = "background: #262F38; opacity: 0.4;";
  number4.style.cssText = "transition: 0.3s; opacity: 1; background: gray";
  number5.style.cssText = "background: #262F38; opacity: 0.4;";

  view2Text1.textContent = "You selected 4 out 5";
};

const button5Selected = () => {
  detectButton(5);

  number1.style.cssText = "background: #262F38; opacity: 0.4;";
  number2.style.cssText = "background: #262F38; opacity: 0.4;";
  number3.style.cssText = "background: #262F38; opacity: 0.4;";
  number4.style.cssText = "background: #262F38; opacity: 0.4;";
  number5.style.cssText = "transition: 0.3s; opacity: 1; background: gray";
};

const handleClickSelect = (e) => {
  switch (e.target.id) {
    case "number1":
      button1Selected();

      break;

    case "number2":
      button2Selected();
      break;

    case "number3":
      button3Selected();
      break;

    case "number4":
      button4Selected();
      break;

    case "number5":
      button5Selected();
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
    if (buttons.button1) {
      button1Selected();
    } else {
      number1.style.cssText = `
      
       `;

      view2Text1.textContent = "You selected 1 out 5";
    }
  } else if (e.target.matches("#number2")) {
    if (buttons.button2) {
      button2Selected();
    } else {
      number2.style.cssText = MOUSEOUT_STYLES;

      view2Text1.textContent = "You selected 1 out 5";
    }
  } else if (e.target.matches("#number3")) {
    if (buttons.button3) {
      button3Selected();
    } else {
      number3.style.cssText = MOUSEOUT_STYLES;
    }
  } else if (e.target.matches("#number4")) {
    if (buttons.button4) {
      button4Selected();
    } else {
      number4.style.cssText = MOUSEOUT_STYLES;
    }
  } else if (e.target.matches("#number5")) {
    if (buttons.button5) {
      button5Selected();
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
