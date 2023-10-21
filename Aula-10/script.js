const nome_input = document.getElementById("nome_input");
const n1_input = document.getElementById("n1_input");
const n2_input = document.getElementById("n2_input");
const n3_input = document.getElementById("n3_input");

const nome_boletim = document.getElementById("nome");
const media_boletim = document.getElementById("media");
const resultado_boletim = document.getElementById("resultado");

const formulario_conteudo = document.getElementById("formulario");

formulario_conteudo.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(media());
});

function media() {
  let nome = nome_input.value;
  let n1 = parseInt(n1_input.value);
  let n2 = parseInt(n2_input.value);
  let n3 = parseInt(n3_input.value);

  localStorage.setItem("nome", nome);
  localStorage.setItem("n1", n1);
  localStorage.setItem("n2", n2);
  localStorage.setItem("n3", n3);

  let resultado = (n1+n2+n3)/3

  nome_boletim.innerHTML = localStorage.getItem('nome')
  media_boletim.innerHTML = resultado

  if (resultado >=7){
    resultado_boletim.innerHTML = 'Aprovado'
  }
  else if (resultado <=4){
    media_boletim.innerHTML = 'Reprovado'
  }
  else {
    media_boletim.innerHTML = 'Recuperação'
  }
}
