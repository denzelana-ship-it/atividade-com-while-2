let numero
let somaTotal = 0;

do {
    let numero = Number(prompt("Digite um numero:"));
    somaTotal = somaTotal + numero;
    respostas = prompt("Deseja inserir mais algum número? s/n ");

} while (resposta === "s");

alert("A soma total dos números é: " + somaTotal);
