
// Verifique a distância da primeira imagem
// em relaçã ao topo da pagina
const primeiraImg = document.querySelector('img');

const height = primeiraImg.offsetTop;
console.log(height);


// Retorne a soma da largura de todas as imagens
function somaimg() {
 const todasImg = document.querySelectorAll('img');
 let soma = 0;
 todasImg.forEach((img) => {
   soma += img.offsetWidth;
 });
 console.log(soma);
}
 window.onload = function() {
  somaimg();
 }

// Verifique se os links da página possuem 
//o minimo recomendado para telas utilazadas
//com o dedo.(48px/48px de acordo com o google)

const links = document.querySelectorAll('a')
links.forEach((link) => {
  const linkHeight =  link.offsetWidth;
  const linkWidth =  link.offsetHeight;
 if(linkWidth >= 48 && linkHeight >= 48) {
   console.log(link,'possui acessibilidade')
 } else {
   console.log(link,'Não possui boa acessibilidade')
 }
});

console.log(links);


// Se o browser for menor que 720px,
//adicione a classe menu-mobile ao menu

const Small = window.matchMedia('(max-width: 720px').matches;

if(Small) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile')
}
