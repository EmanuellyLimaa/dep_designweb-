function saudacoes_a(){
    alert(`Olá Fulano, seja bem-vindo!`);
}

function saudacoes_a(nome){
    alert(`Olá ${nome}, seja bem-vindo!`);
}

function saudacoes_a(nome="Desconhecido"){
    alert(`Olá ${nome}, seja bem-vindo!`)
}

function saudacoes_a(nome="Desconhecido"){
    return `Olá ${nome}, seja bem-vindo!`;
}