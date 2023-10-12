$(function () {  //avança para o próximo input ao apertar enter
    $('body').on('keydown', 'input, select', function (e) {
        if (e.which === 13) {
            let self = $(this), form = self.parents('form:eq(0)'), focusable, next;
            focusable = form.find('input').filter(':visible');
            next = focusable.eq(focusable.index(this) + 1);
            if (next.length) {
                next.focus();
            }
            return false;
        }
    });
});

let somaTotal = 0;

function Maquininhas(){
    let stone1 = parseFloat(document.getElementById('stone1').value);
    let stone2 = parseFloat(document.getElementById('stone2').value);
    let banri1 = parseFloat(document.getElementById('banri1').value);
    let banri2 = parseFloat(document.getElementById('banri2').value);
    let banri3 = parseFloat(document.getElementById('banri3').value);
    let cielo1 = parseFloat(document.getElementById('cielo1').value);
    let cielo2 = parseFloat(document.getElementById('cielo2').value);

    banri1 = validarNumero(banri1)
    banri2 = validarNumero(banri2)
    banri3 = validarNumero(banri3)
    stone1 = validarNumero(stone1)
    stone2 = validarNumero(stone2)
    cielo1 = validarNumero(cielo1)
    cielo2 = validarNumero(cielo2)

    let banrisulTotal = banri1 + banri2 + banri3
    let stoneTotal = stone1 + stone2
    let cieloTotal = cielo1 + cielo2

    let total = banrisulTotal + stoneTotal + cieloTotal
 
    return {
        banrisul: banrisulTotal,
        stone: stoneTotal,
        cielo: cieloTotal,
        total: total
    }
}

function validarNumero(numero) {
    return isNaN(numero) ? 0 : numero;
}

function ValorFormatado(valor){
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function banrisulSoma() {
    const maquininha = Maquininhas();

    let valorFormatado = ValorFormatado(maquininha.banrisul)

    document.getElementById('banrisulTotal').textContent = `Total: ${valorFormatado}`
    document.getElementById("dialog-soma-resultado").textContent = `Total ${valorFormatado}`;
    document.getElementById("dialog-sub-resultado").textContent = `Total ${valorFormatado}`;
};

function stoneSoma() {
    const maquininha = Maquininhas();

    let valorFormatado = ValorFormatado(maquininha.stone)

    document.getElementById('stoneTotal').textContent = `Total: ${valorFormatado}`
    document.getElementById("dialog-soma-resultado").textContent = `Total ${valorFormatado}`;
    document.getElementById("dialog-sub-resultado").textContent = `Total ${valorFormatado}`;
};

function cieloSoma() {
    const maquininha = Maquininhas();

    let valorFormatado = ValorFormatado(maquininha.cielo)

    document.getElementById('cieloTotal').textContent = `Total: ${valorFormatado}`
    document.getElementById("dialog-soma-resultado").textContent = `Total ${valorFormatado}`;
    document.getElementById("dialog-sub-resultado").textContent = `Total ${valorFormatado}`;
};

function total() {
    let dinheiro = parseFloat(document.getElementById('dinheiro').value);
    let pix = parseFloat(document.getElementById('pix').value);

    dinheiro = isNaN(dinheiro) ? 0 : dinheiro;
    pix = isNaN(pix) ? 0 : pix;

    const maquininha = Maquininhas();

    let total = maquininha.total + dinheiro + pix;

    let valorFormatado = ValorFormatado(total)

    // adiciona o valor total no input sa soma
    somaTotal =+ total;

    //aba Total
    document.getElementById('total').textContent = `Total ${valorFormatado}`
    //adicionao o valor no dialog
    document.getElementById("dialog-soma-resultado").textContent = `Total ${valorFormatado}`;
    document.getElementById("dialog-sub-resultado").textContent = `Total ${valorFormatado}`;

    //Total maquininha
    let totMaq = maquininha.total;
    let totMaqui = totMaq.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('mac').textContent = `Cartão: ${totMaqui}`;

    //Total dinheiro
    let totDin = dinheiro + pix;
    let totDinh = totDin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('din').textContent = `Dinheiro: ${totDinh}`;

    //toal do dinheiro e pix
    let tDinPix = ValorFormatado(totDin)
    document.getElementById('dinheiroTotal').textContent = `Total: ${tDinPix}`;

    //deixa o historico de soma e de subtração zerados
    document.getElementById('resultadoSoma').textContent = ``
    document.getElementById('resultadoSub').textContent = ``
};

function fecharSoma() {
    let dialog = document.getElementById('dialog-soma');
    dialog.close();
}

function abrirModalSoma() {
    let dialog = document.getElementById('dialog-soma');
    dialog.showModal();
}

function fecharSubtracao() {
    let dialog = document.getElementById('dialog-Subtra');
    dialog.close();
}

function abrirModalSubtracao() {
    let dialog = document.getElementById('dialog-Subtra');
    dialog.showModal();
}

function somar() {
    let acumulador = somaTotal;
    acumulador = isNaN(acumulador) ? 0 : acumulador;

    let historico = [];

    let histAnt = document.getElementById('resultadoSoma').textContent;
    historico.push(histAnt);

    while (true) {
        let numeroInput = document.getElementById("somaInput").value;

        if (numeroInput === null || numeroInput === '') {
            break;
        }

        if (numeroInput == 0 || numeroInput == null) {
            fecharSoma()
        }

        let valor = parseFloat(numeroInput);
        valor = isNaN(valor) ? 0 : valor;

        if (valor != 0) {

            acumulador += valor;
            somaTotal =+ acumulador;

            let valorFormatado = acumulador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById('total').textContent = `Total ${valorFormatado}`;

            historico.push(` ${valor},`);
            document.getElementById('resultadoSoma').innerHTML = historico.join(' ');

            document.getElementById("dialog-soma-resultado").textContent = `Total ${valorFormatado}`;
            document.getElementById("dialog-sub-resultado").textContent = `Total ${valorFormatado}`;
        }
        document.getElementById("somaInput").value = ''; // Limpa o input para o próximo valor
    }
}

function subtrair() {
    let acumulador = somaTotal;
    acumulador = isNaN(acumulador) ? 0 : acumulador;

    let historico = [];

    let histAnt = document.getElementById('resultadoSub').textContent;
    historico.push(histAnt);

    while (true) {
        let numeroInput = document.getElementById("subtracaoInput").value;

        if (numeroInput === null || numeroInput === '') {
            break;
        }

        if (numeroInput == 0 || numeroInput == null) {
            fecharSubtracao()
        }

        let valor = parseFloat(numeroInput);
        valor = isNaN(valor) ? 0 : valor;

        if (valor != 0) {

            acumulador -= valor;
            somaTotal =+ acumulador;

            let valorFormatado = acumulador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById('total').textContent = `Total ${valorFormatado}`;

            historico.push(` ${valor},`);
            document.getElementById('resultadoSub').innerHTML = historico.join(' ');

            document.getElementById("dialog-sub-resultado").textContent = `Total ${valorFormatado}`;
            document.getElementById("dialog-soma-resultado").textContent = `Total ${valorFormatado}`;
        }
        document.getElementById("subtracaoInput").value = ''; // Limpa o input para o próximo valor
    }
}


console.log("%c✋ Espere! 🛑", "font-family:Comic Sans MS; font-size: 60px; font-weight: bold; color: red; background: #fff; border: 1px solid #f3f3f3; border-radius: 10px; padding: 15px")
console.log('%c🤬 O que você esta fazendo aqui?. cai fora!!', "font-family:Comic Sans MS; font-size: 20px; font-weight: bold; color: #7F7F7F; background: #fff; border: 1px solid #f3f3f3; border-radius: 5px; padding: 8px")
console.log(`\n\n\n\n\n`)
console.log("%cDesenvolvido por Kaliztro#4988", "font-family:Comic Sans MS; font-size:40px; font-weight:bold; color: #fff; padding: 30px")


