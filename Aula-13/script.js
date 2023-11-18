const QUESTOES_QUIZ = [
    {
        Questão: 'Qual Jogo de FPS exige mais mecânica do jogador?',
        a: 'CS:GO',
        b: 'CS 1.6',
        c: 'Valorant',
        d: 'Fortnite',

        correta: 'd',
    },
    {
        Questão: 'Melhor jogo de mundo aberto?',
        a: 'GTA V',
        b: 'Red Dead Redemption 2',
        c: 'Legends of Zelda',
        d: 'The Witcher 3',

        correta: 'c',
    },
    {
        Questão: 'Qual o pais mais rico do mundo?',
        a: 'Luxemburgo',
        b: 'Singapura',
        c: 'Irlanda',
        d: 'Catar',

        correta: 'a',
    },
    {
        Questão: 'Qual o jogador com mais gols?',
        a: 'Romário',
        b: 'Pelé',
        c: 'Cristiano Ronaldo',
        d: 'Lionel Messi',

        correta: 'c',
    },
    {
        Questão: 'Qual o MOBA mais jogado?',
        a: 'Dota 2',
        b: 'League Of Legends',
        c: 'Mobile Legends: Bang Bang',
        d: 'Honor Of Kings',

        correta: 'd',
    },
]
const TITULO_QUIZ = document.querySelector('.titulo-questão')
const ALTERNATIVA_A = document.getElementById('texto-a')
const ALTERNATIVA_B = document.getElementById('texto-b')
const ALTERNATIVA_C = document.getElementById('texto-c')
const ALTERNATIVA_D = document.getElementById('texto-d')

const BOTAO = document.getElementById('enviar')
const RESPOSTAS = document.querySelectorAll('resposta')
const CONTAINER_QUIZ = document.querySelectorAll('container-quiz')

// variaveis importantes
let questao_atual = 0
let qtd_corretas = 0

// iniciar quiz
// mostar questoes
function carregar_questoes(){
    const QUESTAO = QUESTOES_QUIZ[questao_atual]
    TITULO_QUIZ.innerHTML = QUESTAO.Questão
    ALTERNATIVA_A.innerHTML = QUESTAO.a
    ALTERNATIVA_B.innerHTML = QUESTAO.b
    ALTERNATIVA_C.innerHTML = QUESTAO.c
    ALTERNATIVA_D.innerHTML = QUESTAO.d
}

carregar_questoes()