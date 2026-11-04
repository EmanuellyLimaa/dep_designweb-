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
        let curtidas = document.getElementById()
        //altero os textos dos elementos
        titulo.textContent = this.nome;
        valor.textContent = this.valor;
        div.style.backgroundImage = url(this.imagem);
        curtidas.textContent = this.curtidas;
        //relacionar os objetos 
        div.append(titulo, valor, curtidas);
    }
}