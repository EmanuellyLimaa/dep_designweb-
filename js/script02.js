const agenda = [];
let atual = null;

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault(); 
    if(atual == null){
        let item = [nome.value, idade.value]
        let confimacao = agenda.find(i => i[0] == nome.value);
        if (confimacao == falso){
            //amigos.push(item); //inclui no fim
            agenda.unshift(item); //inclui no inicio
            alert(`Amigo adicionado com sucesso!`);
        }else{        
            alert(`Amigo já adicionado!`);
        }
    }else{
        let item = agenda[atual] //[nome, idade]
        item[0] = nome.value;
        item[1] = idade.value;
        atual = null;
    }
    listarAgenda();
    nome.value = "";
    idade.value ="";
});

function listarAgenda(){
    let itens = ""
    for(let i =0; i<agenda.length; i++){
        let item = agenda[i]; //[nome,idade]
        let nome = item[0];
        let idade = Number(item[1]); //idade, converto por numero
        let atualizar = `<button onclick="detalhar(${i});">Atualizar</button>`;
        let remover = `<button onclick="remover(${i});">Remover</button>`;
        itens = itens + `<li>Nome: ${nome} | Idade; ${idade} | ${atualizar} | ${remover} </li>`;
    }
    lista.innerHTML = itens;
}

function detalhar(i){
    atual = i;
    let item = agenda(atual) // [nome, idade]
    nome.value = item[0]; //nome
    idade.value = item[1]; //idade
}

function remover(i){
    atual = i;
    let item = agenda[i]; //[nome,idade]
    let confimacao = confirm(`Deseja realmente excluir${item[0]}`);
    if (confimacao == true){
        agenda.splice(atual, 1);
    }
    atual = null;
    listarAgenda();
}