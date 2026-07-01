<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Agro Forte • Futuro Sustentável</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>

  <!-- MENU -->
  <nav class="navbar">
    <div class="logo">🌱 AgroTech</div>

    <ul class="menu">
      <li><a href="#inicio">Início</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#tecnologia">Tecnologia</a></li>
      <li><a href="#impacto">Impacto</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section class="hero" id="inicio">

    <div class="overlay"></div>

    <div class="hero-content">
      <h1>Agro Forte, Futuro Sustentável</h1>

      <p>
        Equilíbrio entre produção, tecnologia e preservação ambiental.
      </p>

      <button onclick="mostrarMensagem()">
        Conheça o Futuro do Agro
      </button>

      <h2 id="mensagem"></h2>
    </div>

  </section>

  <!-- SOBRE -->
  <section class="sobre" id="sobre">

    <h2>🌾 Sobre o Projeto</h2>

    <p>
      O agronegócio sustentável utiliza inovação, tecnologia e consciência
      ambiental para produzir alimentos preservando os recursos naturais.
    </p>

    <div class="cards">

      <div class="card">
        <h3>🌱 Sustentabilidade</h3>

        <p>
          Produção agrícola com responsabilidade ambiental,
          preservando florestas e rios.
        </p>
      </div>

      <div class="card">
        <h3>🤖 Tecnologia</h3>

        <p>
          Robótica, inteligência artificial e programação
          auxiliando o campo moderno.
        </p>
      </div>

      <div class="card">
        <h3>💧 Meio Ambiente</h3>

        <p>
          Uso consciente da água e práticas ecológicas
          para um futuro melhor.
        </p>
      </div>

    </div>

  </section>

  <!-- TECNOLOGIA -->
  <section class="tecnologia" id="tecnologia">

    <div class="texto">
      <h2>🚜 Tecnologia no Campo</h2>

      <p>
        Sensores inteligentes, drones e automação ajudam
        produtores a aumentar a eficiência e reduzir impactos ambientais.
      </p>

      <ul>
        <li>✔ Monitoramento climático</li>
        <li>✔ Irrigação inteligente</li>
        <li>✔ Uso de drones agrícolas</li>
        <li>✔ Inteligência Artificial</li>
      </ul>
    </div>

    <div class="imagem">
      <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop" alt="Campo sustentável">
    </div>

  </section>

  <!-- CONTADOR -->
  <section class="impacto" id="impacto">

    <h2>📊 Impacto Sustentável</h2>

    <div class="numeros">

      <div class="numero">
        <h3 id="contador1">0</h3>
        <p>Árvores preservadas</p>
      </div>

      <div class="numero">
        <h3 id="contador2">0</h3>
        <p>Litros de água economizados</p>
      </div>

      <div class="numero">
        <h3 id="contador3">0</h3>
        <p>Produtores conscientes</p>
      </div>

    </div>

  </section>

  <!-- GALERIA -->
  <section class="galeria">

    <h2>🖼 Agro Sustentável</h2>

    <div class="grid">

      <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop">

      <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop">

      <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop">

      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop">

    </div>

  </section>

  <!-- CONTATO -->
  <section class="contato" id="contato">

    <h2>📩 Entre em Contato</h2>

    <form id="formulario">

      <input type="text" placeholder="Seu nome" required>

      <input type="email" placeholder="Seu e-mail" required>

      <textarea placeholder="Digite sua mensagem"></textarea>

      <button type="submit">Enviar</button>

    </form>

  </section>

  <!-- FOOTER -->
  <footer>
    <p>
      Projeto Front-End • HTML • CSS • JavaScript • Ensino Médio
    </p>
  </footer>

</body>
</html>