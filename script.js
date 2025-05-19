// --- Interactive Quiz ---
const quizData = [
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    correct: 0
  },
  {
    question: "What does CSS stand for?",
    choices: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correct: 1
  }
];

const quizContainer = document.getElementById("quiz-container");

quizData.forEach((q, i) => {
  const questionDiv = document.createElement("div");
  questionDiv.innerHTML = `<p><strong>${q.question}</strong></p>`;
  
  q.choices.forEach((choice, index) => {
    questionDiv.innerHTML += `
      <label>
        <input type="radio" name="q${i}" value="${index}" />
        ${choice}
      </label><br/>
    `;
  });

  quizContainer.appendChild(questionDiv);
});

document.getElementById("submitQuiz").addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, i) => {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer && parseInt(answer.value) === q.correct) {
      score++;
    }
  });

  const result = `You got ${score} out of ${quizData.length} correct!`;
  document.getElementById("quizResult").textContent = result;
});

// --- Fetch from Joke API ---
document.getElementById("getJoke").addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("jokeOutput").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(err => {
      document.getElementById("jokeOutput").textContent = "Failed to load joke.";
    });
});
