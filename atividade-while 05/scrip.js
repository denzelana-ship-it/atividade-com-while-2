let totalConta = 0;
let opcao;
let finalizar = "n"; 

do {
    opcao = prompt("Escolha: 1-Café (R$5), 2-Cappuccino (R$7), 3-Pão de Queijo (R$4)");

    if (opcao === "1") {
        totalConta = totalConta + 5;
        alert("Café Expresso adicionado.");
    } 
    else if (opcao === "2") {
        totalConta = totalConta + 7;
        alert("Cappuccino adicionado.");
    } 
    else if (opcao === "3") {
        totalConta = totalConta + 4;
        alert("Pão de Queijo adicionado.");
    } 
    else {
        alert("Opção inválida");
    }

    finalizar = prompt("Você deseja finalizar a compra (s/n)?");

} while (finalizar === "n"); 

alert("Pedido finalizado. O total da sua conta é R$ " + totalConta);