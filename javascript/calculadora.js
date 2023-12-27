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

            document.getElementById("dialog-soma-resultado").textContent = `Subotal: ${valorFormatado}`;
            document.getElementById("dialog-sub-resultado").textContent = `Subotal: ${valorFormatado}`;
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

            document.getElementById("dialog-sub-resultado").textContent = `Subtotal ${valorFormatado}`;
            document.getElementById("dialog-soma-resultado").textContent = `Subtotal ${valorFormatado}`;
        }
        document.getElementById("subtracaoInput").value = ''; // Limpa o input para o próximo valor
    }
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
