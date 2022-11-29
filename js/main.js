var cdi = 13.65; // Taxa CDI dia 28/11/2022 = 13,65% ao ano
const simular = document.getElementById('simular');
const limpar = document.getElementById('limpar');
const rent = document.getElementById('rendimento');
const prazo = document.getElementById('prazo');
const inicial_invest = document.getElementById('entrada');
const mensal_invest = document.getElementById('mensal');
var resultados = document.getElementsByClassName('resultados');







simular.addEventListener('click', e => {
    e.preventDefault()
    let valor_final = calcula_cdb(rent.value, prazo.value, inicial_invest.value, mensal_invest.value);
    resultado_tela(valor_final);

    console.log(rent.value, prazo.value, inicial_invest.value, mensal_invest.value);

});


function taxa(rentabilidade) {
    let index;
    let juros
    index = ((cdi / 100) * (rentabilidade / 100)); // % ao ano
    console.log(index.toFixed(4))
    juros = ((1 + index) ** (1 / 12) - 1);
    console.log(juros.toFixed(4))
    return juros;
}

function calcula_cdb(rentabilidade, prazo, inicial, mensal) {
    let index = taxa(rentabilidade);
    let atualizacao_mensal = inicial;
    for (let i = 0; i < prazo; i++) {
        if (i == 0) atualizacao_mensal = (atualizacao_mensal + mensal);
        else atualizacao_mensal = (atualizacao_mensal + mensal) * (1 + (index));
    }
    let valor_final = atualizacao_mensal;
    console.log(valor_final);

    return valor_final;
}

function resultado_tela(valor) {

    let resultado = document.createElement('div');
    let valor_final = document.createElement('p');
    valor_final.innerHTML = 'Valor Final do Investimento' + valor;
    resultados.appendChild(resultado);
    resultado.appendChild(valor_final);
}