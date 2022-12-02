var cdi = 13.65; // Taxa CDI dia 28/11/2022 = 13,65% ao ano


const simular = document.getElementById('simular');
const rent = document.getElementById('rendimento');
const prazo = document.getElementById('prazo');
const inicial_invest = document.getElementById('entrada');
const mensal_invest = document.getElementById('mensal');
const resultados = document.getElementById('container_resultados');
const resultado = document.getElementById('resultado');
const total_investido = document.getElementById('total_investido');
const total_juros = document.getElementById('total_juros');

function calcula_cdb_pos(rentabilidade, prazo, inicial, mensal) {
    let index = taxa(rentabilidade);
    let atualizacao_mensal = inicial;
    for (let i = 0; i < prazo; i++) {
        if (i == 0) atualizacao_mensal = (atualizacao_mensal + mensal);
        else atualizacao_mensal = (atualizacao_mensal + mensal) * (1 + (index));
    }
    let valor_final = atualizacao_mensal;

    return valor_final;
}


function taxa(rentabilidade) {
    let index;
    let juros
    index = ((cdi / 100) * (rentabilidade / 100)); // % ao ano
    juros = ((1 + index) ** (1 / 12) - 1);

    return juros;
}

function resultado_tela(valor) {
    resultados.classList.remove('hidden');

    resultado.innerHTML = `O Resultado esperado para o investimento é ${inicial_invest.value}`;
    total_investido.innerHTML = `Total Investido: ${total_aplicado()}`;

    total_juros.innerHTML = `Valor ao final de ${prazo.value} meses: ${valor}`;


}

function total_aplicado() {
    let inicial_invest_int = parseInt(inicial_invest.value);
    let mensal_invest_int = parseInt(mensal_invest.value);
    let prazo_int = parseInt(prazo.value);


    let mensal = (mensal_invest_int * prazo_int);
    let total = (inicial_invest_int + mensal);
    return total;
}



simular.addEventListener('click', e => {
    e.preventDefault()
    let rend_int = parseInt(rent.value);
    let prazo_int = parseInt(prazo.value);
    let inicial_invest_int = parseInt(inicial_invest.value);
    let mensal_invest_int = parseInt(mensal_invest.value);

    let valor_final = calcula_cdb_pos(rend_int, prazo_int, inicial_invest_int, mensal_invest_int);
    resultado_tela(valor_final);

    console.log(rent.value, prazo.value, inicial_invest.value, mensal_invest.value);

});