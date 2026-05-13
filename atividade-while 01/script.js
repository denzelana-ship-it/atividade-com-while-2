// variável que irá armazenar a senha digitada pelo usuário
let senha;

// o bloco "do" executa primeiro e só depois verifica a condição
do {
    // pede para o usuário digitar uma senha
    senha = prompt("Insira a senha:");

    // o valor digitado fica armazenado na variável "senha"
} while (senha != "1234"); 
// enquanto a senha for diferente de "1234" o sistema continua pedindo

// quando o usuário digitar a senha correta a condição se torna falsa
alert("Deu certo👍🏼​");
