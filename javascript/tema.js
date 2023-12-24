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


document.addEventListener('DOMContentLoaded', function () {
    //verifica o tema padrao do navegador e ajusta o botao de acordo com o tema
    let body = document.body;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-theme');
    } else {
        body.classList.add('light-theme');
        document.getElementById('theme-toggle').checked = true
    }
})