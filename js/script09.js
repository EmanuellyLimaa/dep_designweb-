let vezes = Number(prompt("Digite o numero de vezes: "));
for (let i = 1; i<=vezes; i++){
    if (vezes>100){
        alert("Numero de vezes deve ser inferior ou igual a 100. ");
        break
    }
    alert(`Contei ${i} vez`);
    if (i%2!=0){
        continue;
    }
    alert(`${i} é par`);
}
