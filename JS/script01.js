//Processamentos-Memoria
const bolos = [
    "Bolo de Chocolate", 
    "Bolo de Cenoura com Combertura de Chocolate", 
    "Bolo de Laranja", 
    "Bolo de Queijo", 
    "Bolo Recheado de Chocolate", 
    "Bolo de Baunilha",
]

//Entradas
const buscar = document.getElementById("busca");
const termo = buscar.termo;

//Saidas 
const listas = document.getElementById("lista");

//eventos 
function listarBolos(t){
    let resultados =[];
    if (t == null){
        resultados = bolos; 
    }else{
        t = t.trim().toLowerCase();
        for(let i = 0; i<bolos.length; i++){
            let nome = bolos[i]
            if (nome.toLowerCase().trim().includes(t)){
                resultados.push(nome)
            }
        }
    }
    let itens = "";
    for(let i = 0; i < resultados.length; i++){
        let item = resultados[i];
        let li = `<li>${item}</li>`
        itens = itens + li;
    }
    lista.innerHTML = itens;
}

buscar.addEventListener("submit", function(e){
    e.preventDefault();
    listarBolos(termo.value);
})
