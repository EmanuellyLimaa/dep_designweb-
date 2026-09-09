let nasc = prompt("Digite seu ano de nascimento: ");
nasc = Number(nasc);

idade = 2026 - nasc;

let fds = confirm("Clique em ok se hoje for final de semana. ")

alert(`Você é maior de idade: ${idade >=18}`);
alert(`Hoje é final de semana: ${fds}`);

if (idade >= 18 && fds){
    alert(`Pode beber`);
}else if(idade<18 && fds){
    alert(`Não pode beber, pois menor de idade`);
}else if(idade >=18 && !fds){
    alert(`não pode beber, pois não é final de semana`);
}else{
    lert(`Não pode beber, pois não é menor de idade e não é final de semana`);
}
