const cabecalho = document.getElementById("cabecalho");
window.addEventListener("scroll", function(e){
    if (window.scrollY > 0){
        cabecalho.classList.add("solido");
    }else{
        cabecalho.classList.remove("solido");
    }
})