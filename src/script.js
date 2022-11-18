this.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question")
  const answers = document.querySelectorAll(".answer")
  const arrows = document.querySelectorAll(".arrow")
  questions.forEach((question) =>
    question.addEventListener("click", () => {
      if (question.parentNode.classList.contains("question-active")) {
        let arrow = question.parentElement.lastElementChild
        let answer = question.parentElement.nextElementSibling

        question.parentNode.classList.toggle("question-active")
        arrow.classList.toggle("arrow-to-top")
        answer.classList.toggle("answer-active")
      } else {
        questions.forEach((question) =>
          question.parentNode.classList.remove("question-active")
        )
        answers.forEach((answer) => answer.classList.remove("answer-active"))
        arrows.forEach((arrow) => arrow.classList.remove("arrow-to-top"))

        let arrow = question.parentElement.lastElementChild
        let answer = question.parentElement.nextElementSibling
        question.parentNode.classList.add("question-active")
        arrow.classList.add("arrow-to-top"),
          answer.classList.add("answer-active")
      }
    })
  )
})
