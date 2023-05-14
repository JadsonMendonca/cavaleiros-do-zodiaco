const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const body = document.querySelector("body");
botaoAlterarTema.addEventListener("click", () =>{
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    if(modoEscuroEstaAtivo){
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/atena.png");
    } else{
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/seya.png");
    }
});