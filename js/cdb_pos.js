var cdi = 13.65; // Taxa CDI dia 28/11/2022 = 13,65% ao ano

function taxa(rentabilidade) {
    let index;
    let juros
    index = ((cdi / 100) * (rentabilidade / 100)); // % ao ano
    juros = ((1 + index) ** (1 / 12) - 1);

    return juros;
}

module.exports = function calcula_cdb_pos(rentabilidade, prazo, inicial, mensal) {
    let index = taxa(rentabilidade);
    let atualizacao_mensal = inicial;
    for (let i = 0; i < prazo; i++) {
        if (i == 0) atualizacao_mensal = (atualizacao_mensal + mensal);
        else atualizacao_mensal = (atualizacao_mensal + mensal) * (1 + (index));
    }
    let valor_final = atualizacao_mensal;

    return valor_final;
}