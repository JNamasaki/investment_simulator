var cdi = 13.65; // Taxa CDI dia 28/11/2022 = 13,65% ao ano
const botao = document.getElementById('botao');
const rent = document.getElementById('rentabilidade');
const prazo = document.getElementById('prazo');
const inicial_invest = document.getElementById('entrada');
const mensal_invest = document.getElementById('mensal');



// console.log('O valor atualizado pelo CDI é : ' + valor_atualizado);


botao.addEventListener('click', e => {
    let valor_final = calcula_cdb(rent.value, prazo.value, inicial_invest.value, mensal_invest.value);
    resultado_tela(valor_final);
});


function taxa(rentabilidade) {
    let index;
    index = (cdi * rentabilidade) / 1000; // % ao ano

    index = (((1 + index) ^ (1 / 12)) - 1)
    return index;
}

function calcula_cdb(rentabilidade, prazo, inicial, mensal) {
    let index = taxa(rentabilidade);
    let atualizacao_mensal = inicial;
    for (let i = 0; i < prazo; i++) {
        if (i == 0) atualizacao_mensal = (atualizacao_mensal) * (1 + (index / 100));
        else atualizacao_mensal = (atualizacao_mensal + mensal) * (1 + (index / 100));
    }
    let valor_final = atualizacao_mensal;

    return valor_final;
}