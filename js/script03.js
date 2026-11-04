class Bolo{
    constructor(n, v, i){
        this.nome = n;
        this.valor = v;
        this.imagem = i;
        this.curtidas = 0;
    }
    comoElementoHTML(){
        //Crio os elementos
        let div = document.createElement("div");
        let titulo = document.createElement("p");
        let valor = document.createElement("p");
        let curtidas = document.createElement("p");
        //Altero os textos dos elementos
        titulo.textContent = this.nome;
        valor.textContent = this.valor;
        curtidas.textContent = this.curtidas;
        //Altero os estilos
        div.style.backgroundImage =`url ("./img/${this.imagem}")`;
        div.classList.add("item");
        //Relacionar os objetos 
        div.append(titulo, valor, curtidas);
        return div;
    }
}
const b1 = new Bolo("Bolo de chocolate", "R$ 40,00", "chocolate.png")
const b2 = new Bolo("Bolo de Ovos", "R$ 20,00", "ovos.png")
const b3 = new Bolo("Bolo da Cenoura", "R$ 30,00", "cenoura.png")

const catalogo = [b1,b2,b3]
const produtos = document.getElementById("produtos");

window.addEventListener("load", function(e){
    //Carregar produtos do catalogo
    for (let i = 0; i< catalogo.length; i++){
        let item = catalogo[i];
        produtos.append(item.comoElementoHTML());
    }
})