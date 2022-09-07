function banrisulSoma() {

    let banri1 = parseFloat(document.getElementById('banri1').value);
    let banri2 = parseFloat(document.getElementById('banri2').value);

    banri1 = isNaN(banri1) ? 0 : banri1;
    banri2 = isNaN(banri2) ? 0 : banri2;

    let banrisulTotal = banri1 + banri2;

    let valorFormatado = banrisulTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('banrisulTotal').innerHTML = `Total: ${valorFormatado}`
};

function stoneSoma() {

    let stone1 = parseFloat(document.getElementById('stone1').value);
    let stone2 = parseFloat(document.getElementById('stone2').value);

    stone1 = isNaN(stone1) ? 0 : stone1;
    stone2 = isNaN(stone2) ? 0 : stone2;

    let stoneTotal = stone1 + stone2;

    let valorFormatado = stoneTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('stoneTotal').innerHTML = `Total: ${valorFormatado}`
};

function cieloSoma() {

    let cielo = parseFloat(document.getElementById(`cielo`).value);

    cielo = isNaN(cielo) ? 0 : cielo;

    let valorFormatado = cielo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('cieloTotal').innerHTML = `Total: ${valorFormatado}`

};

function total() {
    let stone1 = parseFloat(document.getElementById('stone1').value);
    let stone2 = parseFloat(document.getElementById('stone2').value);
    let banri1 = parseFloat(document.getElementById('banri1').value);
    let banri2 = parseFloat(document.getElementById('banri2').value);
    let cielo = parseFloat(document.getElementById(`cielo`).value);
    let dinheiro = parseFloat(document.getElementById('dinheiro').value);
    let pix = parseFloat(document.getElementById('pix').value);

    stone1 = isNaN(stone1) ? 0 : stone1;
    stone2 = isNaN(stone2) ? 0 : stone2;
    banri1 = isNaN(banri1) ? 0 : banri1;
    banri2 = isNaN(banri2) ? 0 : banri2;
    cielo = isNaN(cielo) ? 0 : cielo;
    dinheiro = isNaN(dinheiro) ? 0 : dinheiro;
    pix = isNaN(pix) ? 0 : pix;

    let total = stone1 + stone2 + banri1 + banri2 + cielo + dinheiro + pix;

    let valorFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // adiciona o valor total no input sa soma
    document.getElementById('soma').value = total;

    //aba Total
    document.getElementById('total').innerHTML = `Total ${valorFormatado}`

    //Total maquininha
    let totMaq = stone1 + stone2 + banri1 + banri2 + cielo;
    let totMaqui = totMaq.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('mac').innerHTML = `Cartão: ${totMaqui.bold()}`;

    //Total dinheiro
    let totDin = dinheiro + pix;
    let totDinh = totDin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('din').innerHTML = `Dinheiro: ${totDinh.bold()}`;

    //toal do dinheiro e pix
    let tDinPix = totDin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('dinheiroTotal').innerHTML = `Total: ${tDinPix}`;


};

function calculadora() {
    let acumulador = parseFloat(document.getElementById('soma').value);

    acumulador = isNaN(acumulador) ? 0 : acumulador; // se n tiver acumulador ele valera 0
    let a = []; // array vazia que sera usada para armazenar os valores somados

    while (true) {
        let entrada = prompt(`Digite o valor à ser somado ou 0 para sair`); //prompt("arg01", "arg02") //arg02 mostra um texto na caixa

        if (entrada == null) { //se clicar em cancelar ele fecha o loop
            break
        };

        if (entrada == 0) { //se digitar 0 ele fecha o loop
            break
        };

        let valor = parseFloat(entrada) //converte a entrada de string para numero

        valor = isNaN(valor) ? 0 : valor; //se n for digitado nada o valor fica 0

        acumulador += valor; //soma os valores
        document.getElementById('soma').value = acumulador //adiciona o valor na tag soma

        let valorFormatado = acumulador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); //converte o resultado para o formato br
        document.getElementById('total').innerHTML = `Total ${valorFormatado}` //adiciona o resultado em BR na tag total

        a.push(valor) // adiciona os valores digitados em uma array
        document.getElementById('valoresSomados').innerHTML = `Historico de soma: R$ ${a}`

        alert(`total ${valorFormatado}`); //mostra o valor

    };
};

function calculadora2() {
    let acumulador = parseFloat(document.getElementById('soma').value);

    acumulador = isNaN(acumulador) ? 0 : acumulador;
    let a = [];

    while (true) {
        let entrada = prompt(`Digite o valor à ser Subtraido ou 0 para sair`);

        if (entrada == null) { //se clicar em cancelar ele fecha o loop
            break
        };

        if (entrada == 0) { //se digitar 0 ele fecha o loop
            break
        };

        let valor = parseFloat(entrada)
        acumulador -= valor; // diminui os valores

        valor = isNaN(valor) ? 0 : valor;

        document.getElementById('soma').value = acumulador

        let valorFormatado = acumulador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById('total').innerHTML = `Total ${valorFormatado}`

        a.push(valor) // adiciona os valores digitados em uma array
        document.getElementById('valoresSubtraidos').innerHTML = `Historico de subtração: R$ ${a}`

        alert(`total ${valorFormatado}`);

    }
}

console.log("%c✋ Espere! 🛑", "font-family:Comic Sans MS; font-size: 60px; font-weight: bold; color: red; background: #fff; border: 1px solid #f3f3f3; border-radius: 10px; padding: 15px")
console.log('%c🤬 O que você esta fazendo aqui?. cai fora!!', "font-family:Comic Sans MS; font-size: 20px; font-weight: bold; color: #7F7F7F; background: #fff; border: 1px solid #f3f3f3; border-radius: 5px; padding: 8px")
console.log(`\n\n\n\n\n`)
console.log("%cDesenvolvido por Kaliztro#4988", "font-family:Comic Sans MS; font-size:40px; font-weight:bold; color: #fff; padding: 30px")
