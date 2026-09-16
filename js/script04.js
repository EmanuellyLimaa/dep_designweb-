let atual =1;
const foto = document.getElementById("foto");

function carregarFoto(i=1){
    if(i>=1 && i<=6){
    foto.setAttribute("src", `./img/foto${i}.jpg`);
    }else{
        console.log(`Foto ${i} não existe`);
    }
}

function proximo(){
    if(atual<6){
        atual = atual + 1;
    }
    carregarFoto(atual);
}

function anterior(){
    if (atual>1){
        atual = atual - 1;
    }
    carregarFoto(atual);
}

const prox = document.getElementById("prox");
prox.addEventListener("click", function(e){
        e.preventDefault();
        proximo();
})

const ant = document.getElementById("ant");
prox.addEventListener("click", function(e){
        e.preventDefault();
        anterior();
})

const combobox = document.getElementById("combobox");
combobox.addEventListener("change", function(e){
    e.preventDefault();
    atual = combobox.value;
    carregarFoto(atual);
});

const opacidade = document.getElementById("opacidade");
opacidade.addEventListener("input", function(e){
    e.preventDefault();
    let n = opacidade.value;
    foto.setAttribute("style", `opacity:${n}`);
});

const li1 = document.getElementById("li1");
li1.addEventListener("mouseover", function(e){
    e.preventDefault();
    atual = 1;
    carregarFoto(atual1);
})

const li2 = document.getElementById("li2");
li2.addEventListener("mouseover", function(e){
    e.preventDefault();
    atual = 2;
    carregarFoto(atual2);
})

const li3 = document.getElementById("li3");
li3.addEventListener("mouseover", function(e){
    e.preventDefault();
    atual = 3;
    carregarFoto(atual3);
})

const li4 = document.getElementById("li4");
li4.addEventListener("mouseover", function(e){
    e.preventDefault();
    atual = 4;
    carregarFoto(atual4);
})

const li5 = document.getElementById("li5");
li5.addEventListener("mouseover", function(e){
    e.preventDefault();
    atual = 5;
    carregarFoto(atual5);
})

const li6 = document.getElementById("li6");
li6.addEventListener("mouseover", function(e){
    e.preventDefault();
    atual = 6;
    carregarFoto(atual6);
})