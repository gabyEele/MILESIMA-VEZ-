const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "hj em dia chove muito pouco",
        alternativas: [
            {
                texto: "odio essa sensação de calor!",
                afirmacao: "ideia mano"
            },
            {
                texto: "Isso é tremendamente horrivel!",
                afirmacao: "precisa chover muito"
            }
        ]
    },
    {
        enunciado: "vc gostaria de ser prefeito?",
        alternativas: [
            {
                texto: "ser prefeito pode ser ou não algo bom.",
                afirmacao: "sera mesmo muito bom"
            },
            {
                texto: "quero ser prefeito para ser rico e roubar a cidade.",
                afirmacao: "serei otimo nisso"
            }
        ]
    },
    {
        enunciado: "hj acordei e vi que caguei na roupa e quando fui ver todo mundo tava rindo de mim;oq eu faço?",
        alternativas: [
            {
                texto: "é'dificil ser cagona.",
                afirmacao: "só sei chorar e chorar"
            },
            {
                texto: "odeio pessoas.",
                afirmacao: "povo gay"
            }
        ]
    },
    {
        enunciado: "como eu posso ser rica se eu sou mais lisa dque os lisos?",
        alternativas: [
            {
                texto: "talvez roubar um banco seria uma boa.",
                afirmacao: "roubar é a soluçao"
            },
            {
                texto: "sou o batman e ninguem sabe.",
                afirmacao: "salvo o mundo"
            }
        ]
    },
    {
        enunciado: "meus pais me acharam no lixo? ",
        alternativas: [
            {
                texto: "descobri que fui encontrada no lixo e agr eu como lixo.",
                afirmacao: "ate que o lixo é bom"
            },
            {
                texto: "meu professor é um vacilao e só sabe chingar os alunos.",
                afirmacao: "muito gay"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
