// script.js – Quiz interativo com pegada woke + Y2K
const quizData = [
  {
    question: "🌍 Qual prática agroecológica sequestra mais carbono no solo?",
    options: ["Plantio direto", "Agrofloresta", "Uso de fertilizantes sintéticos", "Queima controlada"],
    answer: 1
  },
  {
    question: "💚 O que é 'economia circular' no agronegócio?",
    options: ["Descartar resíduos em aterros", "Reutilizar resíduos como insumos", "Exportar matéria-prima bruta", "Monocultura extensiva"],
    answer: 1
  },
  {
    question: "🌱 Qual dessas é uma fonte renovável de nutrientes para o solo?",
    options: ["Adubo químico NPK", "Compostagem e biofertilizantes", "Uso de agrotóxicos", "Queima de palhada"],
    answer: 1
  },
  {
    question: "💧 Qual técnica ajuda a preservar a água no campo?",
    options: ["Irrigação por aspersão intensiva", "Captação de água da chuva", "Drenagem de áreas úmidas", "Uso de canais de concreto"],
    answer: 1
  },
  {
    question: "✊ Por que a agroecologia é considerada uma 'revolução woke'?",
    options: ["Porque usa tecnologia de ponta", "Porque valoriza saberes tradicionais e justiça ambiental", "Porque foca em exportação", "Porque ignora comunidades locais"],
    answer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let isAnswered = false;
let userAnswers = [];

const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const resultBox = document.getElementById('result');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
  // reset do estado da pergunta
  isAnswered = false;
  selectedOptionIndex = null;
  resultBox.innerHTML = '';
  nextBtn.disabled = true;

  const currentQ = quizData[currentQuestionIndex];
  questionEl.textContent = currentQ.question;

  // limpar opções
  optionsContainer.innerHTML = '';

  // criar botões
  currentQ.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
    btn.dataset.index = idx;
    btn.addEventListener('click', () => selectOption(idx));
    optionsContainer.appendChild(btn);
  });

  // exibe progresso
  const progress = document.createElement('div');
  progress.style.marginTop = '0.8rem';
  progress.style.fontSize = '0.9rem';
  progress.style.fontWeight = '600';
  progress.style.opacity = '0.7';
  progress.textContent = `Pergunta ${currentQuestionIndex + 1} de ${quizData.length}`;
  optionsContainer.appendChild(progress);

  // se for a última pergunta, mudar texto do botão
  if (currentQuestionIndex === quizData.length - 1) {
    nextBtn.textContent = '✨ ver resultado final ✨';
  } else {
    nextBtn.textContent = 'próxima questão →';
  }
}

function selectOption(index) {
  if (isAnswered) return; // já respondeu

  const optionsBtns = document.querySelectorAll('.option-btn');
  // remove seleção anterior
  optionsBtns.forEach(btn => btn.classList.remove('selected'));

  // marca a opção
  optionsBtns[index].classList.add('selected');
  selectedOptionIndex = index;
  // habilita o botão next
  nextBtn.disabled = false;
}

function handleNext() {
  if (selectedOptionIndex === null) return;

  const currentQ = quizData[currentQuestionIndex];
  const isCorrect = selectedOptionIndex === currentQ.answer;
  if (isCorrect) score++;

  // guarda resposta do usuário
  userAnswers.push({
    question: currentQ.question,
    selected: selectedOptionIndex,
    correct: currentQ.answer,
    isCorrect: isCorrect
  });

  // mostra feedback na pergunta atual
  isAnswered = true;
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach((btn, idx) => {
    btn.classList.remove('selected');
    if (idx === currentQ.answer) {
      btn.classList.add('correct-answer');
    } else if (idx === selectedOptionIndex && idx !== currentQ.answer) {
      btn.classList.add('wrong-answer');
    }
    btn.style.pointerEvents = 'none'; // bloqueia clique
  });

  // exibe resultado parcial ou final
  if (currentQuestionIndex === quizData.length - 1) {
    // fim do quiz
    let message = '';
    if (score === quizData.length) message = '🌿 AgroWoke total! Você é um agente de transformação! ✊';
    else if (score >= 3) message = '🌱 Bom caminho! Continue se aprofundando na agroecologia.';
    else message = '📚 Hora de estudar mais! A sustentabilidade começa com conhecimento.';
    resultBox.innerHTML = `<span style="font-size:1.8rem;">✨</span> Você acertou ${score} de ${quizData.length} <br> ${message}`;
    nextBtn.disabled = true;
    nextBtn.textContent = '🏁 quiz concluído';
    // mostra um resumo no result
    let detail = '<div style="font-size:0.9rem; margin-top: 0.6rem; text-align:left;">';
    userAnswers.forEach((item, i) => {
      const correctOpt = quizData[i].options[item.correct];
      const userOpt = quizData[i].options[item.selected];
      const icon = item.isCorrect ? '✅' : '❌';
      detail += `<div>${icon} ${quizData[i].question.substring(0, 30)}... <br> <span style="opacity:0.7;">sua: ${userOpt} | correta: ${correctOpt}</span></div>`;
    });
    detail += '</div>';
    resultBox.innerHTML += detail;
    // desabilita botão
    return;
  }

  // vai para próxima questão
  currentQuestionIndex++;
  loadQuestion();
}

// evento do botão
nextBtn.addEventListener('click', handleNext);

// carrega primeira pergunta
loadQuestion();

// reiniciar o quiz (caso queira, mas sem botão de reset explícito – apenas recarregar)
console.log('🌱 AgroWoke quiz carregado com sucesso!');
