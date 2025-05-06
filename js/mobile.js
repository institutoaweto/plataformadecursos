// SISTEMA DE MENU

const clickmenu = document.getElementById('click-menu');
const fundomenumob = document.querySelector('.back-quadromenu');
const fecharmenu = document.getElementById('close-quadromenu');

clickmenu.addEventListener('click', function(){
    fundomenumob.classList.add('ativar-quadromenu')
})

fecharmenu.addEventListener('click', function(){
    fundomenumob.classList.remove('ativar-quadromenu')
})