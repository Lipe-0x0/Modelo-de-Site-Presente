var botaoAbrir = document.querySelector("#btn-abrir");
var containerVaporwave = document.querySelector(".container");
var botaoForm = document.querySelector("#submit-btn");
var secaoPedido = document.querySelector(".hackerwoman");
var form = document.querySelector(".pedido-resposta");
var img = document.querySelector(".imagens");
var bmw = document.querySelector(".bmw");
var emoji = document.querySelector(".curioso");
var btnbmw = document.querySelector(".botao");
var btnpre = document.querySelector(".botao-pre")

function mensagem(){
    result=confirm("PARABÉNS!! UM PACOTE CHEGARÁ NA SUA CASA EM ALGUNS DIAS, ENQUANTO ISSO AGUARDE COM NOSSA TRILHA SONORA.")
}
function nevergonna(){
    if (result == true) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";  
    }}

btnbmw.addEventListener("click",function(){alert("É MEME RAPAZIADA TENHO PLATA PRA ISSO NÃO 😉")});

btnpre.addEventListener("click",()=>{
    mensagem();
    nevergonna();
});

botaoAbrir.addEventListener("click", () => {
    containerVaporwave.style.display = "block";
    botaoAbrir.style.display = "none";
    img.style.display = "flex";
    bmw.style.display = "flex";
    emoji.style.display = "flex";
    secaoPedido.style.height = "auto";
    window.scrollTo({
        top: 1500,
        behavior: "smooth"
    });
})