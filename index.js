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

const handleClickSelect = (e) => {
  switch (e.target.classList[1]) {
    case "n1":
      number1.style.transition = "0.3s";

      number1.style.background = "gray";
      number2.style.background = "#262F38";
      number3.style.background = "#262F38";
      number4.style.background = "#262F38";
      number5.style.background = "#262F38";

      view2Text1.textContent = "You selected 1 out 5";
      document.getElementById("1").style.transition = "0.3s";

      break;

    case "n2":
      document.getElementById("2").style.transition = "0.3s";

      number1.style.background = "#262F38";
      number2.style.background = "gray";
      number3.style.background = "#262F38";
      number4.style.background = "#262F38";
      number5.style.background = "#262F38";

      view2Text1.textContent = "You selected 2 out 5";

      break;

    case "n3":
      document.getElementById("3").style.transition = "0.3s";

      document.getElementById("1").style.background = "#262F38";
      document.getElementById("2").style.background = "#262F38";
      document.getElementById("3").style.background = "gray";
      document.getElementById("4").style.background = "#262F38";
      document.getElementById("5").style.background = "#262F38";

      view2Text1.textContent = "You selected 3 out 5";

      break;

    case "n4":
      document.getElementById("4").style.transition = "0.3s";

      document.getElementById("1").style.background = "#262F38";
      document.getElementById("2").style.background = "#262F38";
      document.getElementById("3").style.background = "#262F38";
      document.getElementById("4").style.background = "gray";
      document.getElementById("5").style.background = "#262F38";

      view2Text1.textContent = "You selected 4 out 5";

      break;

    case "n5":
      document.getElementById("5").style.transition = "0.3s";

      document.getElementById("1").style.background = "#262F38";
      document.getElementById("2").style.background = "#262F38";
      document.getElementById("3").style.background = "#262F38";
      document.getElementById("4").style.background = "#262F38";
      document.getElementById("5").style.background = "gray";

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

btnSubmit.addEventListener("click", handleSubmit);
