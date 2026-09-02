//Delclaro a variável (crio) e atribuo nome
var nome = "Pedrina";

//Declaro a variável (crio) e atribuo nasc
let nasc = 1991;

//Declaro a variável (crio) e atribuo viva
const viva = confirm("Clique em ok, se estiver viva");

//Declaro a variavel altura;
let altura;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    console.log(`Idade dentro da funcao: ${idade}`);
    return idade;
}

alert(`Idade fora da funcao: ${calcIdade()}`);
/*
dá erro pois idade não existe fora do escopo locla dela (bloco calcIdade)
console.log(`Idade fora da função: ${idade}`)
*/

if(viva){
    //Atribui valor em viva; 
    altura = prompt("Digite a sua altura");
}