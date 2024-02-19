const braco = document.querySelector("[data-controler]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
console.log(estatisticas);

// subtrair.addEventListener("click", ()=> {manipularDados("subtrair")});

// somar.addEventListener("click", ()=> {manipularDados("somar")});

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5,
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20,
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4,
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43,
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2,
    }
}

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipularDados(evento.target.dataset.controle, evento.target.parentNode);
        // console.log(evento.target.textContent, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca); //para eviar como atributo o elemento clicado.
    })
})

function manipularDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        // O codigo está realizado o incremento no conteudo da estatistica, somando o valor atual convertido para int com a peca clicada na estatiscada especifica.
    })
}

