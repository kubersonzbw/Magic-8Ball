const input = document.querySelector("input");
const pAnswer = document.querySelector(".answer");
const pError = document.querySelector(".error");
const ball = document.querySelector(".ball-img");
const ballImg = document.querySelector("img");

const answers = [
  "Tak.",
  "Nie.",
  "Nie mam ochoty odpowiadać na to pytanie.",
  "Możliwe.",
  "Jak odpowiem to się procesor spali.",
];

const showAnswer = () => {
  pAnswer.innerHTML = `<span>Odpowiedź:</span> ${
    answers[Math.floor(Math.random() * answers.length)]
  }`;
  pError.textContent = "";
};

const shakeBall = () => {
  ballImg.classList.add("shake-animation");
};

const checkInput = () => {
  if (input.value === "") {
    changeTextContent("empty");
  } else if (!input.value.endsWith("?")) {
    changeTextContent("noQuestionMark");
  } else {
    shakeBall();
    setTimeout(showAnswer, 1000);
    changeTextContent("clearInput");
  }
};

const changeTextContent = (errorType) => {
  if (errorType === "empty") {
    pError.textContent = "Musisz zadać pytanie!!!";
    pAnswer.textContent = "";
  } else if (errorType === "noQuestionMark") {
    pError.textContent = "Pytanie musi zawierać znak zapytania!";
    pAnswer.textContent = "";
  } else if (errorType === "clearInput") {
    input.value = "";
  }
};

ballImg.addEventListener("click", checkInput);
ballImg.addEventListener("animationend", () => {
  ballImg.classList.remove("shake-animation");
});
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});
