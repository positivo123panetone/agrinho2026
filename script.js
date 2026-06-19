<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agro Sustentável ✨ Futuro do Campo!</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Jua&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="main-header">
    <div class="header-container">
      <div class="logo">
        <i class="fas fa-leaf"></i>
        <h1>Agro Sustentável 🌾</h1>
      </div>
      <nav class="nav-menu">
        <a href="#producao">Produção</a>
        <a href="#sustentabilidade">Ecologia</a>
        <a href="#tecnologia">Tecnologia</a>
        <a href="#quiz-section">Super Quiz!</a>
      </nav>
      <button class="btn-top">Saiba Mais! 🚀</button>
    </div>
  </header>

  <section class="hero-section">
    <div class="hero-content">
      <h2>Agro forte,<br>futuro sustentável! 🚜🌈</h2>
      <p>Equilíbrio perfeito entre a nossa produção e a Mãe Natureza!</p>
      <a href="#producao" class="btn-main">Conheça o Projeto! ✨</a>
    </div>
  </section>

  <section class="intro-section">
    <div class="container text-center">
      <h2>O Agronegócio Brasileiro 🇧🇷</h2>
      <p>Um dos principais pilares da economia brasileira, atuando como motor de desenvolvimento nacional e grande fornecedor global de alimentos!</p>
      <div class="badge-stats">
        ⭐ US$ 159,09 bilhões em exportações em 2022! ⭐
      </div>
    </div>
  </section>

  <section id="producao" class="producao-section">
    <div class="container grid-2">
      <div class="info-block">
        <h3>Safra Recorde! 🌽</h3>
        <p>Estimada em <span class="highlight">358 milhões de toneladas</span>, o agronegócio continua sendo o carro-chefe da nossa economia!</p>
        <ul class="kid-list">
          <li><i class="fas fa-check-circle"></i> Soja, milho e carnes são os campeões!</li>
          <li><i class="fas fa-check-circle"></i> Forte presença da agricultura familiar!</li>
          <li><i class="fas fa-check-circle"></i> Gerando muitos empregos pelo país!</li>
        </ul>
      </div>
      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c0f" alt="Campo de soja">
      </div>
    </div>
  </section>

  <section id="sustentabilidade" class="sustentabilidade-section">
    <div class="container">
      <h2 class="section-title">Sustentabilidade no Campo ⚡🌱</h2>
      <div class="grid-3">
        <div class="kid-card card-blue">
          <h3>Agricultura de Precisão 🤖</h3>
          <p>Uso de super tecnologias para otimizar o manejo e sumir com os desperdícios!</p>
        </div>
        <div class="kid-card card-yellow">
          <h3>Energia Renovável ☀️</h3>
          <p>Produção de biodiesel e etanol como fontes de energia super limpas!</p>
        </div>
        <div class="kid-card card-pink">
          <h3>Biotecnologia 🧬</h3>
          <p>Bioinsumos artificiais protetores para maior produtividade sem derrubar matas!</p>
        </div>
      </div>
    </div>
  </section>

  <section class="desafios-section">
    <div class="container grid-2">
      <div>
        <h3>Desafios Ambientais ⚠</h3>
        <ul class="kid-list list-red">
          <li><span>🎈</span> Pressões climáticas malucas e mudanças de chuvas;</li>
          <li><span>🎈</span> Manejo esperto contra pragas chatas;</li>
          <li><span>🎈</span> Evitar perdas no meio do caminho.</li>
        </ul>
      </div>
      <div class="kid-quote">
        <p>"O grande desafio é produzir muito mais com bem menos impacto ambiental! 🧠"</p>
      </div>
    </div>
  </section>

  <section id="tecnologia" class="soluções-section">
    <div class="container">
      <h2 class="section-title">Soluções e Futuro 🛸</h2>
      <div class="grid-3 row-icons">
        <div class="icon-box">
          <i class="fas fa-robot"></i>
          <h3>Máquinas Inteligentes</h3>
        </div>
        <div class="icon-box">
          <i class="fas fa-seedling"></i>
          <h3>Agro Regenerativo</h3>
        </div>
        <div class="icon-box">
          <i class="fas fa-users"></i>
          <h3>Super Assistência</h3>
        </div>
      </div>
    </div>
  </section>

  <section class="curso-section">
    <div class="container text-center">
      <h2>Formação Profissional 🎒</h2>
      <p class="subtitle">Curso Técnico em Agronegócio</p>
      <p>Capacitar mentes brilhantes para um campo mais eficiente, consciente e mega sustentável.</p>
      <button class="btn-rainbow">Conheça o Curso! 💥</button>
    </div>
  </section>

  <section id="quiz-section" class="quiz-container-section">
    <div class="container">
      <div class="quiz-box">
        <div class="quiz-header">
          <h2>🧠 Super Agro Quiz! 🧠</h2>
          <p>Mostre que você aprendeu tudo sobre o campo sustentável!</p>
        </div>
        
        <div id="quiz-wrapper">
          <div class="quiz-progress" id="progress">Pergunta 1 de 3</div>
          <h3 id="question-text" class="question-title">Carregando pergunta...</h3>
          <div id="options-container" class="options-list">
            </div>
          <button id="next-btn" class="btn-main disabled" disabled>Próxima Pergunta ➔</button>
        </div>

        <div id="result-wrapper" class="result-box hide">
          <h3>🎉 Fim do Jogo! 🎉</h3>
          <p id="score-text">Você acertou 0 de 3!</p>
          <div id="feedback-emoji" style="font-size: 4rem; margin: 15px 0;">🌈</div>
          <button id="restart-btn" class="btn-rainbow">Jogar de Novo! 🔄</button>
        </div>
      </div>
    </div>
  </section>

  <footer class="main-footer">
    <div class="container grid-4">
      <div>
        <h4>Agro Sustentável 🍃</h4>
        <p>Equilíbrio perfeito entre produção e preservação!</p>
      </div>
      <div>
        <h5>Links Úteis</h5>
        <ul class="footer-links">
          <li><a href="#producao">Produção</a></li>
          <li><a href="#sustentabilidade">Sustentabilidade</a></li>
          <li><a href="#tecnologia">Tecnologias</a></li>
        </ul>
      </div>
      <div>
        <h5>Contato</h5>
        <p>📍 Curitiba, Paraná</p>
        <p>✉ agro.sustentavel@email.com</p>
      </div>
      <div>
        <h5>Redes Sociais</h5>
        <div class="social-icons">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      © 2026 Agro Sustentável - Feito com 💖 e estilo Kidcore!
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
