//Processamentos-Memoria
const hoje = new Date();

//entrada 
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;

//saida 
const msg = document.getElementById("msg");

//evento 
function saudacao() {
    let m = "";
    if (nome.value == undefined || nome.value.trim() == "") {
        m = `Olá, hoje é ${hoje.getDate()} / ${hoje.getMonth() + 1} / ${hoje.getFullYear()}!`
    }else {
        m = `Olá ${hoje.getDate()} / ${hoje.getMonth() + 1} / ${hoje.getFullYear()}!`
        let dt_nasc = new Date(nasc.value);
        let dt_niv = new Date(`${hoje.getFullYear(), dt_nasc.getMonth(), dt_nasc.getDate()}`)
        let dif = 0;
        if (hoje > dt_niv){
            dif = hoje - dt_nasc;

            m = m + `<br/>Passou ${dif/(1000*60*60*24)} dias`
        }else{
            dif = dt_nasc - hoje;
            m = m + `<br/>Falta ${dif/(1000*60*60*24)} dias`
        }

    }
    msg.innerHTML = m;
}
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    saudacao();
})
