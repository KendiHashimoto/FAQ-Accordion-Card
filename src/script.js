const questions = document.querySelectorAll(".question")
const answers = document.querySelector(".answer")
const arrows = document.querySelectorAll(".arrow")

const questionToBold = (question) => {
  question.classList.toggle("question-active")
}

const rotateArrow = (question) => {
  let arrow = question.parentElement.lastElementChild
  arrow.classList.toggle("arrow-to-top")
}

const showAnswers = (question) => {
  let answer = question.parentElement.nextElementSibling
  answer.classList.toggle("answer-active")
}

// EVENTS
for (let question of questions) {
  question.addEventListener("click", () => {
    questionToBold(question)
    showAnswers(question)
    rotateArrow(question)
  })
}