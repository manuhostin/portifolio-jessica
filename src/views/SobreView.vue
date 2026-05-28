<template>
  <main class="sobre">
    <div class="sobre-content">
      <section class="intro">
        <div class="texto">
          <p class="bio"><strong>Jess Wilbert</strong></p>
          <p class="bio">
            Designer e diretora de arte com mais de 15 anos de experiência na área criativa, atuando
            com comunicação visual, ilustração e motion design.
          </p>
          <p class="bio2">
            Desenvolvo materiais digitais e peças audiovisuais que unem
            <strong>estética, clareza e impacto visual</strong>, com atenção aos detalhes técnicos e
            consistência nas entregas.
          </p>

          <p class="bio2">
            Com perfil <strong>multidisciplinar e fluência em inglês</strong>, tenho experiência em
            colaborar com <strong>equipes e projetos de diferentes áreas e escalas</strong>,
            garantindo resultados
            <strong>visualmente sólidos, criativos e alinhados ao propósito de cada marca</strong>.
          </p>
        </div>
      </section>

      <section class="habilidades-texto">
        <div class="card-texto">
          <div class="titulo-container">
            <font-awesome-icon :icon="['fas', 'eye']" class="icon-titulo" />
            <h3>Direção de Arte & Criação Visual</h3>
          </div>
          <p>
            Visão estética apurada, atenção aos detalhes e forte domínio dos critérios técnicos e
            criativos. Tenho facilidade em tomar decisões visuais com segurança.
          </p>
        </div>

        <div class="card-texto">
          <div class="titulo-container">
            <font-awesome-icon :icon="['fas', 'comment']" class="icon-titulo" />
            <h3>Comunicação com Clientes</h3>
          </div>
          <p>
            Experiência em traduzir ideias em propostas visuais claras e bem argumentadas. Tenho boa
            escuta e empatia para criar conexões de confiança.
          </p>
        </div>

        <div class="card-texto">
          <div class="titulo-container">
            <font-awesome-icon :icon="['fas', 'users']" class="icon-titulo" />
            <h3>Agilidade Técnica & Trabalho em Equipes</h3>
          </div>
          <p>
            Tenho domínio sólido de ferramentas e softwares e aprendo com facilidade o necessário
            para o avanço do projeto. No trabalho em equipe, atuo com atenção e abertura,
            incentivando trocas construtivas e garantindo entregas bem alinhadas e de qualidade.
          </p>
        </div>
      </section>

      <section class="card-habilidades">
        <h3>Softwares Dominados</h3>
        <div class="tags-container">
          <span class="tag">Adobe Illustrator</span>
          <span class="tag">Adobe Photoshop</span>
          <span class="tag">Adobe After Effects</span>
          <span class="tag">Premiere Pro</span>
          <span class="tag">Adobe Lightroom</span>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.sobre {
  color: white;
  padding: 50px 20px;
  font-family: 'Poppins', sans-serif;
  display: block;
}

.sobre-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card-texto {
  background-color: #2a2a2a;
  padding: 24px;
  border-radius: 12px;
  color: white;
  text-align: left;
}

.intro {
  text-align: left;
}

.bio:first-child {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  text-align: center;
  color: #fff;
}

.bio {
  color: #e0e0e0;
  font-size: 1.05rem;
  line-height: 1.75;
  margin-bottom: 0;
}

.bio2 {
  color: #bbb;
  font-size: 0.98rem;
  line-height: 1.8;
  border-left: 3px solid #949290;
  padding-left: 14px;
  margin-top: 16px;
  font-style: italic;
}

.habilidades-texto {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.titulo-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.icon-titulo {
  font-size: 1.2rem;
  color: #ccc;
}

h3 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
}

p {
  color: #bbb;
  line-height: 1.6;
  margin: 0;
}

.texto p + p,
.card-texto p + p {
  margin-top: 10px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background-color: #3d3d3d;
  color: #ccc;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  border: 1px solid #4a4a4a;
}

@media (max-width: 600px) {
  .sobre {
    padding: 28px 14px;
  }

  .card-texto,
  .card-habilidades {
    padding: 18px;
  }
}
</style>
