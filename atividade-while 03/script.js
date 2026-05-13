let numeroSecreto = 7, palpite, tentativas = 0;

do {
    palpite = parseInt(prompt("Adivinhe o número (1 a 10):"));
    tentativas++;
    
    if (palpite !== numeroSecreto) alert("Errado! Tente de novo.");

} while (palpite !== numeroSecreto);

alert("Parabéns! Você acertou em " + tentativas + " tentativas.");