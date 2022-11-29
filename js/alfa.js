var cdi = 13.65; // Taxa CDI dia 28/11/2022 = 13,65% ao ano

console.log('atualizado: ' + calcula_cdb(127, 3, 100, 100));

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