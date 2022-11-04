const operacoes = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    divisao: (a, b) => a / b,
    multiplicacao: (a, b) => a * b
};

console.log(operacoes.subtracao(10,5));

//assim tambem funciona

const soma = (a, b) => a + b;

let valor1 = 10;
let valor2 =  150;

console.log(soma(valor1,valor2));