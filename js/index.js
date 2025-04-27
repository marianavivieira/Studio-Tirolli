let indice = 0;

function mostrarSlide() {
  const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;
  slides.style.transform = `translateX(${-indice * 100}%)`;

  const indicadores = document.querySelectorAll('#indicadores span');
  indicadores.forEach((el, i) => {
    el.classList.toggle('ativo', i === indice);
  });
}

function mudarSlide(direcao) {
  const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;
  indice = (indice + direcao + totalSlides) % totalSlides;
  mostrarSlide();
}

function criarIndicadores() {
  const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;
  const indicadoresContainer = document.getElementById('indicadores');

  for (let i = 0; i < totalSlides; i++) {
    const span = document.createElement('span');
    span.addEventListener('click', () => {
      indice = i;
      mostrarSlide();
    });
    indicadoresContainer.appendChild(span);
  }

  mostrarSlide();
}

window.onload = criarIndicadores;
