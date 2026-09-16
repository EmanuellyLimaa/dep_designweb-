let saudacao_a = function(){
    alert(`Olá Fulano, seja bem-vindo!`);
}

let saudacao_b = function(nome){
    alert(`Olá ${nome}, seja bem-vindo!`);
}

let saudacao_c = function(nome="Desconhecido"){
    alert(`Olá ${nome}, seja bem-vindo!`);
}

let saudacao_d = function(nome="Desconhecido"){
    alert(`Olá ${nome}, seja bem-vindo!`);
}

const btn_a = document.getElementById("btn_a");
btn_a.addEventListener("click",function(e){
    e.preventDefalte();
    saudacao_a();
});

const btn_b = document.getElementById("btn_b");
btn_b.addEventListener("click",function(e){
    e.preventDefalte();
    let nome = prompt("Digite seu nome: ");
    saudacao_b(nome);
});

const btn_cp = document.getElementById("btn_cp");
btn_cp.addEventListener("click",function(e){
    e.preventDefalte();
    saudacao_c();
});

const btn_cn = document.getElementById("btn_cn");
btn_cn.addEventListener("click",function(e){
    e.preventDefalte();
    let nome = prompt("Digite seu nome: ")
    saudacao_c(nome);
});

const btn_dp = document.getElementById("btn_dp");
btn_dp.addEventListener("click",function(e){
    e.preventDefalte();
    saudacao_d();
});

const btn_dn = document.getElementById("btn_dn");
btn_dn.addEventListener("click",function(e){
    e.preventDefalte();
    let nome = prompt("Digite seu nome: ")
    alert(saudacao_d(nome));
});