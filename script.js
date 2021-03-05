// Retorne no console todas as imagens do site
const Img = document.querySelectorAll('img')
console.log(Img);

//Retorne no console apenas  as palavras que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);


//Selecione todos os links internos  (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos.href);

//Selecione o primeiro h2 dentro de .animais-descricao
const animaisH2 = document.querySelector('.animais-descricao h2');
console.log(animaisH2);

//Selecione o último p do site  
const todosP = document.getElementsByTagName('p')
console.log(todosP[todosP.length - 1]);



