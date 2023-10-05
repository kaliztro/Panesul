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

function Maquininhas(){
    let stone1 = parseFloat(document.getElementById('stone1').value);
    let stone2 = parseFloat(document.getElementById('stone2').value);
    let banri1 = parseFloat(document.getElementById('banri1').value);
    let banri2 = parseFloat(document.getElementById('banri2').value);
    let banri3 = parseFloat(document.getElementById('banri3').value);
    let cielo = parseFloat(document.getElementById(`cielo`).value);

    banri1 = validarNumero(banri1)
    banri2 = validarNumero(banri2)
    banri3 = validarNumero(banri3)
    stone1 = validarNumero(stone1)
    stone2 = validarNumero(stone2)
    cielo = validarNumero(cielo)

    let banrisulTotal = banri1 + banri2 + banri3
    let stoneTotal = stone1 + stone2

    let total = banrisulTotal + stoneTotal + cielo
 
    return {
        banrisul: banrisulTotal,
        stone: stoneTotal,
        cielo: cielo,
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
    document.getElementById("dialog-resultado").textContent = `Total ${valorFormatado}`;
};

function stoneSoma() {
    const maquininha = Maquininhas();

    let valorFormatado = ValorFormatado(maquininha.stone)

    document.getElementById('stoneTotal').textContent = `Total: ${valorFormatado}`
    document.getElementById("dialog-resultado").textContent = `Total ${valorFormatado}`;
};

function cieloSoma() {
    const maquininha = Maquininhas();

    let valorFormatado = ValorFormatado(maquininha.cielo)

    document.getElementById('cieloTotal').textContent = `Total: ${valorFormatado}`
    document.getElementById("dialog-resultado").textContent = `Total ${valorFormatado}`;
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
    document.getElementById('soma').value = total;

    //aba Total
    document.getElementById('total').textContent = `Total ${valorFormatado}`
    //adicionao o valor no dialog
    document.getElementById("dialog-resultado").textContent = `Total ${valorFormatado}`;

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

function calculadora() {
    let acumulador = parseFloat(document.getElementById('soma').value);

    acumulador = isNaN(acumulador) ? 0 : acumulador; // se n tiver acumulador ele valera 0
    let historico = []; // array vazia que sera usada para armazenar os valores somados 

    let histAnt = document.getElementById('resultadoSoma').innerHTML
    historico.push(histAnt) // adicona na array os valores somados anterirormente. "isso mantem o historico quando é somado um novo valor"

    while (true) {
        let entrada = prompt(`Digite o valor à ser somado ou 0 para sair`); //prompt("arg01", "arg02") //arg02 mostra um texto na caixa

        if (entrada == null || entrada == 0) { //se clicar em cancelar ou digitar 0 ele fecha o loop
            break
        };

        let valor = parseFloat(entrada) //converte a entrada de string para numero

        valor = isNaN(valor) ? 0 : valor; //se n for digitado nada o valor fica 0

        acumulador += valor; //soma os valores
        document.getElementById('soma').value = acumulador //adiciona o valor na tag soma

        let valorFormatado = acumulador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); //converte o resultado para o formato br
        document.getElementById('total').innerHTML = `Total ${valorFormatado}` //adiciona o resultado em BR na tag total

        historico.push(valor) // adiciona os valores digitados em uma array
        document.getElementById('resultadoSoma').innerHTML = historico;

        alert(`total ${valorFormatado}`); //mostra o valor

    };
};

function calculadora2() {
    let acumulador = parseFloat(document.getElementById('soma').value);

    acumulador = isNaN(acumulador) ? 0 : acumulador;
    let historico = [];

    let histAnt = document.getElementById('resultadoSub').innerHTML
    historico.push(histAnt) // adicona na array os valores subtraidos anterirormente. "isso mantem o historico quando é subtraido um novo valor"

    while (true) {
        let entrada = prompt(`Digite o valor à ser Subtraido ou 0 para sair`);

        if (entrada == null || entrada == 0) { //se clicar em cancelar ou se digitar 0 ele fecha o loop
            break
        };

        let valor = parseFloat(entrada)
        acumulador -= valor; // diminui os valores

        valor = isNaN(valor) ? 0 : valor;

        document.getElementById('soma').value = acumulador

        let valorFormatado = acumulador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById('total').innerHTML = `Total ${valorFormatado}`

        historico.push(valor) // adiciona os valores digitados em uma array
        document.getElementById('resultadoSub').innerHTML = historico

        alert(`total ${valorFormatado}`);

    }
}

console.log("%c✋ Espere! 🛑", "font-family:Comic Sans MS; font-size: 60px; font-weight: bold; color: red; background: #fff; border: 1px solid #f3f3f3; border-radius: 10px; padding: 15px")
console.log('%c🤬 O que você esta fazendo aqui?. cai fora!!', "font-family:Comic Sans MS; font-size: 20px; font-weight: bold; color: #7F7F7F; background: #fff; border: 1px solid #f3f3f3; border-radius: 5px; padding: 8px")
console.log(`\n\n\n\n\n`)
console.log("%cDesenvolvido por Kaliztro#4988", "font-family:Comic Sans MS; font-size:40px; font-weight:bold; color: #fff; padding: 30px")



function FECHAR() {
    const dialog = document.querySelector('dialog');
    dialog.close();
}

function abrirModal() {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
}

function SOMAR() {
    let acumulador = parseFloat(document.getElementById('soma').value);
    acumulador = isNaN(acumulador) ? 0 : acumulador;

    let historico = [];

    let histAnt = document.getElementById('resultadoSoma').textContent;
    historico.push(histAnt);

    while (true) {
        let numeroInput = document.getElementById("numeroInput").value;

        if (numeroInput === null || numeroInput === '') {
            break;
        }

        if (numeroInput == 0 || numeroInput == null) {
            FECHAR()
        }

        let valor = parseFloat(numeroInput);
        valor = isNaN(valor) ? 0 : valor;

        if (valor != 0) {

            acumulador += valor;
            document.getElementById('soma').value = acumulador;

            let valorFormatado = acumulador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById('total').textContent = `Total ${valorFormatado}`;

            historico.push(` ${valor},`);
            document.getElementById('resultadoSoma').innerHTML = historico.join(' ');

            document.getElementById("dialog-resultado").textContent = `Total ${valorFormatado}`;
        }
        document.getElementById("numeroInput").value = ''; // Limpa o input para o próximo valor
    }

}

