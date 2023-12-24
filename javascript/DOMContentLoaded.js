document.addEventListener('DOMContentLoaded', function () {

    //ajusta o zoom da pagina conforme a largura e altura definida
    let largura = screen.width;
    let altura = screen.height;

    if (largura == 1366 && altura == 768) {
        document.body.style.zoom = "75%";
    } 

    //soma em tempo real
    $(document).ready(function() {
        let ids = ['#banri1', '#banri2', '#banri3', '#stone1', '#stone2', '#cielo1', '#cielo2', '#caixa', '#dinheiro', '#pix'];
    
        for (let i = 0; i < ids.length; i++) {
            $(ids[i]).mask('000.000.000.000.000,00', { reverse: true });
            $(ids[i]).on('input', function() {
                total();
                atualizarElementos();
            });
        }
    });
    





})