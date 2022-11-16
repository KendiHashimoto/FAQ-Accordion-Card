const questions = document.querySelectorAll(".question")
const answers = document.querySelectorAll(".answer")

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    questions.classList.add("question-active")
  })
}