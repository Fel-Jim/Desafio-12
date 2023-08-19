// cambio de color borde

const appletop = document.getElementById("appletop");

function borderapple() {
  if (appletop.style.border == "") {
    appletop.style.border = "2px solid red";
  } else {
    appletop.style.border = "";
  }
}

//conteo stickers

const input01 = document.getElementById("input01");
const input02 = document.getElementById("input02");
const input03 = document.getElementById("input03");
const textCalculator = document.getElementById("textcalculator");

function calculatorBotton() {
  const total =
    Number(input01.value) + Number(input02.value) + Number(input03.value);

  if (total <= 10) {
    textCalculator.innerHTML = `llevas ${total} stickers`;
    textCalculator.style.color = "green";
  } else {
    textCalculator.innerHTML = "Llevas demasiados stickers";
    textCalculator.style.color = "red";
  }
}

//password

function passwordbutton() {
  const pass1 = document.getElementById("pass1").value;
  const pass2 = document.getElementById("pass2").value;
  const pass3 = document.getElementById("pass3").value;
  const passwordAnswer = document.getElementById("passwordanswer");

  if (pass1 == 9 && pass2 == 1 && pass3 == 1) {
    passwordAnswer.innerHTML = "password 1 correcto";
  } else if (pass1 == 7 && pass2 == 1 && pass3 == 4) {
    passwordAnswer.innerHTML = "password 2 es correcto";
  } else {
    passwordAnswer.innerHTML = "password incorrecto";
  }
}
