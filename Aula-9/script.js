const corpo = document.getElementsByTagName("body");
const div = document.getElementById("area");

div.addEventListener('click', clicar)



function clicar() {
  div.innerText = "Clicou!";
  div.style.backgroundColor = 'Red'
}

function entrar() {
  div.innerText = "Entrou";
  div.style.backgroundColor = 'Purple'
}

function mover(){
    div.innerText = "Moveu!"
    div.style.backgroundColor = 'Yellow'
}

function sair() {
    div.innerText = "Saiu!";
    div.style.backgroundColor = 'Brown'
}