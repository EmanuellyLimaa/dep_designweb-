class Bolo{
    constructor(n, v, i,){
        this.nome = n;
        this.valor = v 
        this.imagem = i;
        this.curtidas = 0;
    }
    toElemento(){
        //crio os elementos
        let div = document.createElement("div");
        let titulo = document.createElement("P");
        let valor = document.createElement("P");
        let curtidas = document.createElement("p");

        //altero os textos dos elementos
        titulo.textContent = this.nome;
        valor.textContent = this.valor;
        curtidas.textContent = this.curtidas;

        //altera os estilos
        div.style.backgroundImage = url(this.imagem);
        div.classList.add("item");

        //relacionar os objetos 
        div.append(titulo, valor, curtidas);
        return div;
    }
}

const b1 = new Bolo("Bolo de Chocolate", "R$40,00", "");
const b2 = new Bolo("Bolo de Ovos", "R$20,00", "");
const b3 = new Bolo("Bolo de Cenoura", "R$30,00", "");

const catalago = [b1, b2, b3]
const produtos = document.getElementById("produtos");

window.addEventListener("load", function(e){
    //carregar produtos do catalago
    for (let i = 0; i< catalago.length; i++){
        let item = catalago[i];
        produtos.append(item.comoElementoHTML());
    }
})