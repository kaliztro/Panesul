function banrisulSoma(){

    let banri1 = parseFloat(document.getElementById('banri1').value);
    let banri2 = parseFloat(document.getElementById('banri2').value);

    banri1 = isNaN(banri1)?0:banri1;
    banri2 = isNaN(banri2)?0:banri2;

    let banrisulTotal = banri1 + banri2;

    document.getElementById('banrisulTotal').innerHTML = "Total: R$ " + banrisulTotal
};

function stoneSoma(){

    let stone1 = parseFloat(document.getElementById('stone1').value);
    let stone2 = parseFloat(document.getElementById('stone2').value);

    stone1 = isNaN(stone1)?0:stone1;
    stone2 = isNaN(stone2)?0:stone2;

    let stoneTotal = stone1 + stone2;

    document.getElementById('stoneTotal').innerHTML = "Total: R$ " + stoneTotal
 };

 function cieloSoma() {

    let cielo = parseFloat(document.getElementById(`cielo`).value);

    cielo = isNaN(cielo)?0:cielo;

    document.getElementById('cieloTotal').innerHTML = "Total: R$ " + cielo
 };

function total(){
    let stone1 = parseFloat(document.getElementById('stone1').value);
    let stone2 = parseFloat(document.getElementById('stone2').value);
    let banri1 = parseFloat(document.getElementById('banri1').value);
    let banri2 = parseFloat(document.getElementById('banri2').value);
    let cielo = parseFloat(document.getElementById(`cielo`).value);
    let dinheiro = parseFloat(document.getElementById('dinheiro').value);
    let pix = parseFloat(document.getElementById('pix').value);

    stone1 = isNaN(stone1)?0:stone1;
    stone2 = isNaN(stone2)?0:stone2;
    banri1 = isNaN(banri1)?0:banri1;
    banri2 = isNaN(banri2)?0:banri2;
    cielo = isNaN(cielo)?0:cielo;
    dinheiro = isNaN(dinheiro)?0:dinheiro;
    pix = isNaN(pix)?0:pix;

    let total = stone1 + stone2 + banri1 + banri2 + cielo + dinheiro + pix;

    document.getElementById('dinheiroTotal').innerHTML = "Total: R$ " + total

    document.getElementById('soma').value = total

};

function calculadora() {
    let entrada = 1;
    let acumulador = parseFloat(document.getElementById('soma').value);

    while(entrada != 0) {
        entrada = parseFloat(prompt(`Digite o valor à ser somado`));
        acumulador += entrada;
        document.getElementById('soma').value = acumulador

        alert(`total ` + acumulador);
    }
}

function calculadora2() {
    let entrada = 1;
    let acumulador = parseFloat(document.getElementById('soma').value);

    while(entrada != 0) {
        entrada = parseFloat(prompt(`Digite o valor à ser Subtraido`));
        acumulador -= entrada;
        document.getElementById('Subtrair').value = acumulador

        alert(`total ` + acumulador);
    }
}

