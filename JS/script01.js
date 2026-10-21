const balu ={
    nome: "Balu Brasil", 
    cor: "preto",
    altura: 0.55, 
    peso: 12.5,
    raca: "vira-lata",
    falar(){
        alert("au au");
    },
    comer(kg){
        this.peso = this.peso + kg;
        alert("comi");
    },
    cagar(kg){
        this.peso = this.peso - kg;
        alert("caguei");
    },
    saudar(){
        let msg = `Nome: ${this.nome}\n`;
        msg = msg + `Peso: ${this.peso}\n`;
        msg = msg + `Altura: ${this.altura}\n`;
        msg = msg + `Raça: ${this.raca}\n`;
        msg = msg + `Cor: ${this.cor}\n`;
        alert(msg);
    }
}