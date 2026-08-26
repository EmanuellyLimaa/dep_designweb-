//declaro a constante viva como true
const viva = confirm("Clique em ok se está viva.");

// crio um bloco de execucao que so é executado se viva igual a true
if (viva){

//declaro a variavel nasc e aribuo a ela o valor digitado como int
var nasc = parseInt(propot("Digite seu ano de nascimento: "));

//declaro a variavel nome e atribuo a ela o valor digitado (padrao str)
let nome = propot("Digite seu nome: ");

//declaro a constante viva como true
const viva = confirm("Clique em ok se está viva.");

//declaro a variavel altura e atribuo a ela o valor digitado como float
let altura = parseFloat("Digite sua aula em metros: ");

//declaro a variavel idade
let idade;
    //atribuo o valor de idade igual ao resultado da expressao
    idade = 2026 - nasc;
    //exibido msg com o nome digitado e a idade calculada
    alert(`${nome} você tem ${idade} anos.`);
}else{
    //exibindo msg que a pessoa está morta
    alert(`Você está morta `);
}