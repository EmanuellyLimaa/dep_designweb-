const amigos = ["Pedro", "Ana", "Clara"]
const idades = [15, 16, 15]

const agenda = [["Pedro", 15], ["Ana", 16], ["Clara", 15]]

let tam = amigos.length
console.log($`Amigos: ${amigos}`);
console.log($`Quantidae: ${tam}`);
console.log($`Primeiro: ${amigos[0]}`);
console.log($`Ultimo: ${amigos[tam-1]}`);
console.log($`Dois Primeiros: ${amigos.slice(0.2)}`)

//percorrendo um array simples
for(let i = 0; i<amigos.length; i++){
    let nome = amigos[i] //nome
    console.log(`Nome: ${nome}`);
}

//percorrendo uma array de arrays (matriz)
for(let a = 0; a<agenda.length; i++){
    let item = agenda[i] //[nome, iddae]
    let nome = item[0] //nome
    let idade = item[1] //idade
    //console.log(agenda[i]);
    console.log(`Nome: ${nome} | Idade: ${idade}`);
}

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    //amigos.push(nome.value);
    let item = [nome.value, idade.value]
    //amigos.push(nome.value);
    agenda.unshift(item);
    alert(`Amigo adicionado com sucesso!`);
    listarAgenda();
    nome.value = "";
    idade.value ="";
});

function listarAgenda(){
    let itens = ""
    for(let i =0; i<agenda.length; i++){
        let item = agenda[i]; //[nome,idade]
        let nome = item[0];
        let idade = item[1];
        itens = itens + `<li>Nome: ${nome} | Idade; ${idade}</li>`;
    }
    lista.innerHTML = itens;
}