$(document).ready(function () {
  let slides = $('#slider .slide');
  let current = 0;

  function mostrarSiguienteSlide() {
    $(slides[current]).removeClass('activo');
    current = (current + 1) % slides.length;
    $(slides[current]).addClass('activo');
  }

  setInterval(mostrarSiguienteSlide, 3000);
});
