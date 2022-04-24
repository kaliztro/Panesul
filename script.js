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
    document.getElementById('mac').innerHTML = `Maquininhas: ${totMaqui.bold()}`;

    //Total dinheiro
    let totDin =  dinheiro + pix;
    let totDinh = totDin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('din').innerHTML = `Dinheiro: ${totDinh.bold()}`;

     //toal do dinheiro e pix
     let tDinPix = totDin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
     document.getElementById('dinheiroTotal').innerHTML = `Total: ${tDinPix}`;


};

function calculadora() {
    let entrada = 1;
    let acumulador = parseFloat(document.getElementById('soma').value);

    acumulador = isNaN(acumulador)?0:acumulador;

    while (entrada != 0) {
        entrada = parseFloat(prompt(`Digite o valor à ser somado ou 0 para sair`)); //prompt("arg01", "arg02") //arg02 mostra um texto na caixa
        acumulador += entrada;
        document.getElementById('soma').value = acumulador

        let valorFormatado = acumulador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById('total').innerHTML = `Total ${valorFormatado}`

        alert(`total ${valorFormatado}`);

        //Total soma
        // document.getElementById('ent').innerHTML = `Entrada: ${valorFormatado}`;

    }
}

function calculadora2() {
    let entrada = 1;
    let acumulador = parseFloat(document.getElementById('soma').value);

    acumulador = isNaN(acumulador)?0:acumulador;

    while (entrada != 0) {
        entrada = parseFloat(prompt(`Digite o valor à ser Subtraido ou 0 para sair`));
        acumulador -= entrada;

        document.getElementById('Subtrair').value = acumulador

        let valorFormatado = acumulador.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById('total').innerHTML = `Total ${valorFormatado}`

        alert(`total ${acumulador}`);
        //Total subtraçao
        // document.getElementById('sai').value = valorFormatado;
    }
}

console.log(`\n\n\n\n\n 🤬 ei oq vc esta fazendo aqui?. cai fora!! \n\n\n\n\n`)
console.log(`\n\n\n\n\n Desenvolvido por Kaliztro#4988 \n\n\n\n\n`)