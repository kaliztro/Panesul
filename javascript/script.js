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

function Maquininhas() {
    let banri1 = validarNumero(element('banri1'))
    let banri2 = validarNumero(element('banri2'))
    let banri3 = validarNumero(element('banri3'))
    let stone1 = validarNumero(element('stone1'))
    let stone2 = validarNumero(element('stone2'))
    let cielo1 = validarNumero(element('cielo1'))
    let cielo2 = validarNumero(element('cielo2'))
    let caixa = validarNumero(element('caixa'))

    let banrisulTotal = banri1 + banri2 + banri3
    let stoneTotal = stone1 + stone2
    let cieloTotal = cielo1 + cielo2
    let caixaTotal = caixa


    let total = banrisulTotal + stoneTotal + cieloTotal + caixaTotal

    return {
        banrisul: banrisulTotal,
        stone: stoneTotal,
        cielo: cieloTotal,
        caixa: caixaTotal,
        total: total
    }
}

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


function banrisulSoma() {
    let valorFormatado = ValorFormatado(Maquininhas().banrisul)

    document.getElementById('banrisulTotal').textContent = `Subtotal: ${valorFormatado}`
    document.getElementById("dialog-soma-resultado").textContent = `Subtotal: ${valorFormatado}`;
    document.getElementById("dialog-sub-resultado").textContent = `Subtotal: ${valorFormatado}`;
    total()
};

function stoneSoma() {
    let valorFormatado = ValorFormatado(Maquininhas().stone)

    document.getElementById('stoneTotal').textContent = `Subtotal: ${valorFormatado}`
    document.getElementById("dialog-soma-resultado").textContent = `Subtotal: ${valorFormatado}`;
    document.getElementById("dialog-sub-resultado").textContent = `Subtotal: ${valorFormatado}`;
    total()
};

function cieloSoma() {
    let valorFormatado = ValorFormatado(Maquininhas().cielo)

    document.getElementById('cieloTotal').textContent = `Subtotal: ${valorFormatado}`
    document.getElementById("dialog-soma-resultado").textContent = `Subtotal: ${valorFormatado}`;
    document.getElementById("dialog-sub-resultado").textContent = `Subtotal: ${valorFormatado}`;
    total()
};

function caixaSoma() {
    let valorFormatado = ValorFormatado(Maquininhas().caixa)

    document.getElementById('caixaTotal').textContent = `Subtotal: ${valorFormatado}`
    document.getElementById("dialog-soma-resultado").textContent = `Subtotal: ${valorFormatado}`;
    document.getElementById("dialog-sub-resultado").textContent = `Subtotal: ${valorFormatado}`;
    total()
};

function total() {
    let dinheiro = validarNumero(element('dinheiro'));
    let pix = validarNumero(element('pix'));

    let total = Maquininhas().total + dinheiro + pix;
    let valorFormatado = ValorFormatado(total)

    somaTotal =+ total;

    //aba Total
    document.getElementById('total').textContent = valorFormatado;
    //adicionao o valor no dialog
    document.getElementById("dialog-soma-resultado").textContent = `Subtotal: ${valorFormatado}`;
    document.getElementById("dialog-sub-resultado").textContent = `Subtotal: ${valorFormatado}`;

    //Total maquininha
    let totMaq = Maquininhas().total;
    let totMaqui = totMaq.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('mac').textContent = `Cartão: ${totMaqui}`;

    //Total dinheiro
    let totDin = dinheiro + pix;
    let totDinh = totDin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('din').textContent = `Dinheiro: ${totDinh}`;

    //toal do dinheiro e pix
    let tDinPix = ValorFormatado(totDin)
    document.getElementById('dinheiroTotal').textContent = `Subtotal: ${tDinPix}`;

    //deixa o historico de soma e de subtração zerados
    document.getElementById('resultadoSoma').textContent = ``
    document.getElementById('resultadoSub').textContent = ``
}

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
    let acumulador = validarNumero(somaTotal);

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

        let valor = parseFloat(validarNumero(numeroInput));

        if (valor != 0) {

            acumulador += valor;
            somaTotal =+ acumulador;

            let valorFormatado = acumulador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById('total').textContent = valorFormatado;

            historico.push(` ${valor},`);
            document.getElementById('resultadoSoma').textContent = historico.join(' ');

            document.getElementById("dialog-soma-resultado").textContent = `Subotal ${valorFormatado}`;
            document.getElementById("dialog-sub-resultado").textContent = `Subotal ${valorFormatado}`;
        }
        document.getElementById("somaInput").value = ''; // Limpa o input para o próximo valor
    }
}

function subtrair() {
    let acumulador = validarNumero(somaTotal);

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

        let valor = parseFloat(validarNumero(numeroInput));

        if (valor != 0) {

            acumulador -= valor;
            somaTotal =+ acumulador;

            let valorFormatado = acumulador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById('total').textContent = valorFormatado;

            historico.push(` ${valor},`);
            document.getElementById('resultadoSub').textContent = historico.join(' ');

            document.getElementById("dialog-sub-resultado").textContent = `Subotal ${valorFormatado}`;
            document.getElementById("dialog-soma-resultado").textContent = `Subotal ${valorFormatado}`;
        }
        document.getElementById("subtracaoInput").value = ''; // Limpa o input para o próximo valor
    }
}

document.addEventListener('DOMContentLoaded', function() {
    //verifica o tema padrao do navegador e ajusta o botao do tema
    let body = document.body;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-theme');
    } else {
        body.classList.add('light-theme');
        document.getElementById('theme-toggle').checked = true
    }


    //aplica mascara nos inputs
    $(document).ready(function() {
        var ids = ['#banri1', '#banri2', '#banri3', '#stone1', '#stone2', '#cielo1', '#cielo2', '#caixa', '#dinheiro', '#pix'];
    
        for (var i = 0; i < ids.length; i++) {
          $(ids[i]).mask('000.000.000.000.000,00', { reverse: true });
        }
      });

    //ajusta o zoom da pagina conforme a largura e altura definida
    let largura = screen.width;
    let altura = screen.height;

    if (largura == 1366 && altura == 768) {
        document.body.style.zoom = "75%";
    }

})

function alterarTema() {
    let body = document.body;

    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}

console.log("%c✋ Espere! 🛑", "font-family:Comic Sans MS; font-size: 60px; font-weight: bold; color: red; background: #fff; border: 1px solid #f3f3f3; border-radius: 10px; padding: 15px")
console.log('%c🤬 O que você esta fazendo aqui?. cai fora!!', "font-family:Comic Sans MS; font-size: 20px; font-weight: bold; color: #7F7F7F; background: #fff; border: 1px solid #f3f3f3; border-radius: 5px; padding: 8px")
console.log(`\n\n\n\n\n`)
console.log("%cDesenvolvido por Kaliztro#4988", "font-family:Comic Sans MS; font-size:40px; font-weight:bold; color: #fff; padding: 30px")


