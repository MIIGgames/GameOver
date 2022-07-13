/*       Menu        */
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  //Fazendo aparecer os itens
  const navLinks = document.querySelectorAll('.nav-links li');
  
  //Fazendo o clique do menu funcionar
  burger.addEventListener('click', ()=>{
       nav.classList.toggle('nav-active');

       //Animações links
  navLinks.forEach((link, index) => { 
      if(link.style.animation){
          link.style.animation = '';
      }else{
          link.style.animation = `navlinkFade 0.5s ease forwards ${index/7+1.5}s`  

      }
  });
  //Transformando em X
  burger.classList.toggle('toggle');
  });
}

navSlide();

/*Parte do efeito maquina*/
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

const titulo = document.querySelector('h1');
typeWriter(titulo);

/*Parte do Menu ancora*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


/*video loop*/
var v = document.getElementById(
  "video");

function Enable_Loop() {
    v.loop = true;
    v.load();
}

function Check_Loop() {
    alert(v.loop);
}
