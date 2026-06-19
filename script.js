// Banco de dados das perguntas do Quiz
const quizData = [
  {
    question: "Qual é a estimativa da safra recorde brasileira citada no site? 🌾",
    options: [
      "150 milhões de toneladas",
      "358 milhões de toneladas",
      "500 milhões de toneladas",
      "89 milhões de toneladas"
    ],
    correct: 1
  },
  {
    question: "Qual dessas tecnologias é usada para evitar desperdícios monitorando de perto o campo? 🤖",
    options: [
      "Enxada Manual",
      "Trator Antigo",
      "Agricultura de Precisão",
      "Combustão de Carvão"
    ],
    correct: 2
  },
  {
    question: "Qual é o principal e maior desafio ecológico do agronegócio moderno? 🧠",
    options: [
      "Produzir mais alimentos com menos impacto ambiental",
      "Comprar máquinas vindas de Marte",
      "Aumentar o uso exagerado de água pura",
      "Acabar totalmente com as fazendas familiares"
    ],
    correct: 0
  }
];

// Elementos capturados do DOM
const quizWrapper = document.getElementById('quiz-wrapper');
const resultWrapper = document.getElementById('result-wrapper');
const progressEl = document.getElementById('progress');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const scoreTextEl = document.getElementById('score-text');
const feedbackEmojiEl = document.getElementById('feedback-emoji');
const restartBtn = document.getElementById('restart-btn');

// Variáveis de Controle de Estado
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// Inicializa o Quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  hasAnswered = false;
  resultWrapper.classList.add('hide');
  quizWrapper.classList.remove('hide');
  showQuestion();
}

// Renderiza a pergunta atual
function showQuestion() {
  hasAnswered = false;
  nextBtn.classList.add('disabled');
  nextBtn.disabled = true;
  optionsContainer.innerHTML = ''; // Limpa botões antigos

  const currentQuestion = quizData[currentQuestionIndex];
  
  // Atualiza contagem de progresso e texto
  progressEl.innerText = `Pergunta ${currentQuestionIndex + 1} de ${quizData.length}`;
  questionTextEl.innerText = currentQuestion.question;

  // Cria os botões de alternativas
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('option-btn');
    button.addEventListener('click', () => selectOption(index, button));
    optionsContainer.appendChild(button);
  });
}

// Ação de clicar em uma alternativa
function selectOption(selectedIndex, selectedButton) {
  if (hasAnswered) return; // Evita clicar em múltiplos botões
  hasAnswered = true;

  const currentQuestion = quizData[currentQuestionIndex];
  const allButtons = optionsContainer.querySelectorAll('.option-btn');

  // Trava todos os botões após a resposta
  allButtons.forEach(btn => btn.disabled = true);

  // Validação se acertou ou errou
  if (selectedIndex === currentQuestion.correct) {
    selectedButton.classList.add('correct');
    score++;
  } else {
    selectedButton.classList.add('wrong');
    // Mostra visualmente onde estava a resposta certa
    allButtons[currentQuestion.correct].classList.add('correct');
  }

  // Desbloqueia o botão de avançar
  nextBtn.classList.remove('disabled');
  nextBtn.disabled = false;
}

// Controla o avanço das telas
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showResults();
  }
});

// Exibe a tela final com pontuação customizada Kidcore
function showResults() {
  quizWrapper.classList.add('hide');
  resultWrapper.classList.remove('hide');

  scoreTextEl.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;

  // Emojis customizados com base no rendimento
  if (score === quizData.length) {
    feedbackEmojiEl.innerText = "🌈 Perfeito! Você é um mestre supremo do Agro! ✨🏆";
  } else if (score >= 1) {
    feedbackEmojiEl.innerText = "🎈 Muito bem! Quase lá! Te vejo no campo! 💫🚜";
  } else {
    feedbackEmojiEl.innerText = "🍃 Ops! Vale a pena reler a página e tentar de novo! 🧩";
  }
}

// Botão de reinício
restartBtn.addEventListener('click', startQuiz);

// Inicia automaticamente o script ao abrir a página
startQuiz();
