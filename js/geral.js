// SISTEMA CARROSSEL DE PRODUTOS UM
const btndireito = document.getElementById('btn-direito');
const btnesquerdo = document.getElementById('btn-esquerdo');
const fundovideos = document.querySelector('.rolagem-video');

btndireito.addEventListener('click', function(){
    fundovideos.classList.add('animaçao-rolagem')
    document.getElementById('btn-esquerdo').style.display = 'flex';
    document.getElementById('btn-direito').style.display = 'none';
})

btnesquerdo.addEventListener('click', function(){
    fundovideos.classList.remove('animaçao-rolagem');
    document.getElementById('btn-esquerdo').style.display = 'none';
    document.getElementById('btn-direito').style.display = 'flex';
})


// SISTEMA CARROSSEL DE PRODUTOS DOIS
const btndireitodois = document.getElementById('btn-direitodois');
const btnesquerdodois = document.getElementById('btn-esquerdodois');
const fundovideosdois = document.querySelector('.rolagem-videodois');

btndireitodois.addEventListener('click', function(){
    fundovideosdois.classList.add('animaçao-rolagem')
    document.getElementById('btn-esquerdodois').style.display = 'flex';
    document.getElementById('btn-direitodois').style.display = 'none';
})

btnesquerdodois.addEventListener('click', function(){
    fundovideosdois.classList.remove('animaçao-rolagem');
    document.getElementById('btn-esquerdodois').style.display = 'none';
    document.getElementById('btn-direitodois').style.display = 'flex';
})

// SISTEMA CARROSSEL DE PRODUTOS TRÊS
const btndireitotres = document.getElementById('btn-direitotres');
const btnesquerdotres = document.getElementById('btn-esquerdotres');
const fundovideostres = document.querySelector('.rolagem-videotres');

btndireitotres.addEventListener('click', function(){
    fundovideostres.classList.add('animaçao-rolagem')
    document.getElementById('btn-esquerdotres').style.display = 'flex';
    document.getElementById('btn-direitotres').style.display = 'none';
})

btnesquerdotres.addEventListener('click', function(){
    fundovideostres.classList.remove('animaçao-rolagem');
    document.getElementById('btn-esquerdotres').style.display = 'none';
    document.getElementById('btn-direitotres').style.display = 'flex';
})



// SISTEMA CARROSSEL DE PRODUTOS QUATRO
const btndireitoquatro = document.getElementById('btn-direitoquatro');
const btnesquerdoquatro = document.getElementById('btn-esquerdoquatro');
const fundovideosquatro = document.querySelector('.rolagem-videoquatro');

btndireitoquatro.addEventListener('click', function(){
    fundovideosquatro.classList.add('animaçao-rolagem')
    document.getElementById('btn-esquerdoquatro').style.display = 'flex';
    document.getElementById('btn-direitoquatro').style.display = 'none';
})

btnesquerdoquatro.addEventListener('click', function(){
    fundovideosquatro.classList.remove('animaçao-rolagem');
    document.getElementById('btn-esquerdoquatro').style.display = 'none';
    document.getElementById('btn-direitoquatro').style.display = 'flex';
})


// ATIVAÇÃO DO CARROSSEL
var slideIndex = 0;

showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 12000); // Change image every 2 seconds
}
 
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}