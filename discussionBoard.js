const questionOne = document.querySelector(".q1");
const questionTwo = document.querySelector(".q2");
const questionThree = document.querySelector(".q3");

const discussionQuestions = document.querySelector(".discussion-questions");
const questionCards = document.querySelectorAll(".question-card");
const answers = document.querySelectorAll(".answers-box .question");
console.log([...answers]);

const removeActive = () => {
  questionCards.forEach((card) => card.classList.remove("active"));
};
const addActive = (card) => {
  card.classList.add("active");
};
// const toggleAnswer = (ans) => {
//   ans.style.display = ans.style.display === "none" ? "block" : "none";
// };
// const hideAnswer = (index) => {
//   [...answers].forEach((answer) => {
//     if (index === 1) {
//       toggleAnswer(answer);
//     } else if (index === 2) {
//       toggleAnswer(answer);
//     } else if (index === 3) {
//       toggleAnswer(answer);
//     }
//   });
// };
const showAnswer = (index) => {
  answers.forEach((answer, i) => {
    answer.style.display = i === index ? "block" : "none";
  });
};

//event delegation to which card is clicked:
discussionQuestions.addEventListener("click", (event) => {
  const clickedQuestion = event.target.closest(".question-card");
  if (clickedQuestion) {
    removeActive();
    addActive(clickedQuestion);

    const questionIndex = parseInt(clickedQuestion.dataset.id) - 1;
    console.log("index: ", questionIndex);
    showAnswer(questionIndex);
  }
});
