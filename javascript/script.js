let somaTotal = 0;

function Maquininhas() {
    let banri1 = validarNumero(element('banri1'))
    let banri2 = validarNumero(element('banri2'))
    let banri3 = validarNumero(element('banri3'))
    let stone1 = validarNumero(element('stone1'))
    let stone2 = validarNumero(element('stone2'))
    let cielo1 = validarNumero(element('cielo1'))
    let cielo2 = validarNumero(element('cielo2'))
    let caixa = validarNumero(element('caixa'))
    let tef = validarNumero(element('tef'))

    let banrisulTotal = banri1 + banri2 + banri3
    let stoneTotal = stone1 + stone2
    let cieloTotal = cielo1 + cielo2
    let caixaTotal = caixa
    let tefTotal = tef

    let total = banrisulTotal + stoneTotal + cieloTotal + caixaTotal + tefTotal

    return {
        banrisul: banrisulTotal,
        stone: stoneTotal,
        cielo: cieloTotal,
        caixa: caixaTotal,
        tef: tefTotal,
        total: total
    }
}

const maquininhas = {
    banrisul: ['banrisulTotal'],
    stone: ['stoneTotal'],
    cielo: ['cieloTotal'],
    caixa: ['caixaTotal'],
    tef: ['tefTotal']
};

function element(elemento) {
    let valorString = document.getElementById(elemento).value;
    valorString = valorString.replace(/\./g, '');
    valorString = valorString.replace(',', '.');
    return parseFloat(valorString);
}

function validarNumero(numero) {
    return isNaN(numero) ? 0 : numero;
}

function ValorFormatado(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function atualizarElementos() {
    const maquininhasValores = Maquininhas();
    
    Object.keys(maquininhas).forEach(nomeMaquininha => {
        let valorFormatado = ValorFormatado(maquininhasValores[nomeMaquininha]);
        const elementos = maquininhas[nomeMaquininha];

        elementos.forEach(elementoId => {
            const element = document.getElementById(elementoId);
            if (element) {
                element.textContent = `Subtotal: ${valorFormatado}`;
            }
        });
    });

    total();
}

function total() {
    let dinheiro = validarNumero(element('dinheiro'));
    let pix = validarNumero(element('pix'));
    let totDin = dinheiro + pix;

    let total = Maquininhas().total + dinheiro + pix;
    let valorFormatado = ValorFormatado(total)

    somaTotal =+ total;

    let totMaq = ValorFormatado(Maquininhas().total);
    let totDinh = ValorFormatado(totDin)

    //aba Total
    document.getElementById('total').textContent = valorFormatado;
    document.getElementById('mac').textContent = `Cartão: ${totMaq}`;
    document.getElementById('din').textContent = `Dinheiro: ${totDinh}`;
    document.getElementById('dinheiroTotal').textContent = `Subtotal: ${totDinh}`;

    //seta no modal soma/subtracao o valor atual
    document.getElementById('dialog-soma-resultado').textContent = `Subtotal: ${valorFormatado}`;
    document.getElementById('dialog-sub-resultado').textContent = `Subtotal: ${valorFormatado}`;

    //deixa o historico de soma e de subtração zerados
    document.getElementById('resultadoSoma').textContent = ``;
    document.getElementById('resultadoSub').textContent = ``;
}


