var cdi = 13.65; // Taxa CDI dia 28/11/2022 = 13,65% ao ano


const simular = document.getElementById('simular');
const rent = document.getElementById('rendimento');
const label_rent = document.getElementById('label_rent');
const prazo = document.getElementById('prazo');
const inicial_invest = document.getElementById('entrada');
const mensal_invest = document.getElementById('mensal');
const resultados = document.getElementById('container_resultados');
const resultado = document.getElementById('resultado');
const total_investido = document.getElementById('total_investido');
const total_juros = document.getElementById('total_juros');
const prefixado = document.getElementById('prefixado');
const posfixado = document.getElementById('posfixado');



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

prefixado.addEventListener('change', e => {
    if (prefixado.checked) label_rent.innerHTML = `Taxa de Juros %`
    else label_rent.innerHTML = `Rendimento %`
})
posfixado.addEventListener('change', e => {
    if (posfixado.checked) label_rent.innerHTML = `Rendimento sobre o CDI %`
    else label_rent.innerHTML = `Rendimento %`
})

simular.addEventListener('click', e => {
    e.preventDefault()
    let rend_int = parseInt(rent.value);
    let prazo_int = parseInt(prazo.value);
    let inicial_invest_int = parseInt(inicial_invest.value);
    let mensal_invest_int = parseInt(mensal_invest.value);
    let valor_final;

    if (posfixado.checked) {
        valor_final = calcula_cdb_pos(rend_int, prazo_int, inicial_invest_int, mensal_invest_int);
    }
    if (prefixado.checked) {
        valor_final = cdb_prefixado(rend_int, prazo_int, inicial_invest_int, mensal_invest_int);
    }
    resultado_tela(valor_final.toFixed(2));

    console.log(rent.value, prazo.value, inicial_invest.value, mensal_invest.value);

});