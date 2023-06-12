var carouselItems = document.querySelectorAll('.carousel-item');
var currentIndex = 0;

function showItem(index) {
    carouselItems.forEach(function(item) {
        item.classList.remove('active');
    });
    carouselItems[index].classList.add('active');
}

function changeSlide(n) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    } else if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }
    showItem(currentIndex);
}

setInterval(function() {
    changeSlide(1);
}, 5000);


const chk = document.getElementById('chk');

chk.addEventListener('change', function() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('text-white');

  const blackBorders = document.querySelectorAll('.black-border');

  blackBorders.forEach(border => {
    border.classList.toggle('white-border');
  });
});

//! Função para mudar a cor da borda das divs
function changeDivBorderColor() {
  var divs = document.querySelectorAll('.sobre_mim, .botões, .conteúdos_pp, .conteúdos_vtd, .conteúdos_lp, .conteúdos_fse, .conteúdos_ed, .conteúdos_ec, .conteúdos_teste');

  divs.forEach(function(div) {
    if (chk.checked) {
      div.style.borderColor = 'white';
    } else {
      div.style.borderColor = 'black';
    }
  });
}

document.addEventListener('DOMContentLoaded', changeDivBorderColor);
chk.addEventListener('change', changeDivBorderColor);


   const botao = document.getElementById('botao');
   const texto = document.getElementById('texto');

   botao.addEventListener('click', function() {
       if (texto.style.display === 'none') {

           texto.style.display = 'block';
       } else {

           texto.style.display = 'none';
       }
   });

   var btn = (getElementById('button').value)
   btn           

