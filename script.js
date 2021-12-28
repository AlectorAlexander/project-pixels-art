//Requisito2 e Requisito3

let colorPalette = document.getElementById("color-palette")
let cores = ["black"]
for (let nc = 0; nc < 15; nc++) {
    cores.push(nc)   
}
criadorDeDivs ()
function criadorDeDivs () {

    for (let cor = 0; cor < cores.length; cor++) {
       //Referência: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
       //Referência: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

        const element = cores[cor];
        let divs = document.createElement("div")
        divs.className = "color"
        if(cor == 0){
            divs.style.backgroundColor = "black";
        }else{
        divs.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${1})`;
    }
        divs.id = element
        
        
        colorPalette.appendChild(divs)   
    }

}
//Requisito4
//let pixelBoard = document.getElementById("pixel-board");
//grid ()
//function grid (){
//    for (let quadrorizonte = 0; quadrorizonte < 5; quadrorizonte++) {
//        let pixel = document.createElement("div")
//        pixel.className = "pixel"
//        pixelBoard.appendChild(pixel)
//        for (let vertiquadro = 0; vertiquadro < 4; vertiquadro++) {
//            let pixel = document.createElement("div")
//            pixel.className = "pixel"
//            pixelBoard.appendChild(pixel)
//        }
//        
//    }  
//}

//Requisito10
let boardSize = document.getElementById("board-size")
boardSize.addEventListener("keyup", function (){ 
    if (event.keyCode === 13){
        
       let colorPalette = document.querySelectorAll(".pixel")
       for (let i = 0; i < colorPalette.length; i++) {
        colorPalette[i].parentNode.removeChild(colorPalette[i])
       }

        tamanhoDoQuadrado()
    }
})

let generateBoard = document.getElementById("generate-board")
generateBoard.addEventListener("click", function () {
let colorPalette = document.querySelectorAll(".pixel")
       for (let i = 0; i < colorPalette.length; i++) {
        colorPalette[i].parentNode.removeChild(colorPalette[i])
 
       }
       tamanhoDoQuadrado()
    }
       )

tamanhoDoQuadrado()

function tamanhoDoQuadrado (){
    var valor;
    if (boardSize.value  == ""){
        alert("Board inválido!")
        valor = 5
    }else if (boardSize.value < 5) {
        valor = 5
    } else if (boardSize.value > 50){
        valor = 50
    } else {
    valor = boardSize.value
}
    boardSize.value = ''
    let pixelBoard = document.getElementById("pixel-board");
  

     if (valor > 4 && valor < 51){
        for (let quadrorizonte = 0; quadrorizonte < valor; quadrorizonte++) {
            
            let pixel = document.createElement("div")
            pixel.className = "pixel"
            pixelBoard.appendChild(pixel)

            for (let vertiquadro = 0; vertiquadro < valor - 1; vertiquadro++) {
                let pixel = document.createElement("div")
                pixel.className = "pixel"
                pixelBoard.appendChild(pixel)
            }
            
        }  
        
    let width = 40 + (40 * valor) + "px";
    let height = (40 * valor) + "px";

    pixelBoard.style.width = width
    pixelBoard.style.height = height
    definePixels()
}
    }

//Requisito 6
let selected = document.getElementById("black")
selected.className += " selected"

//Requisito 7
var colors = document.querySelectorAll(".color");
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", selecionarCor)   
}

function selecionarCor(qual) {

    var colors = document.querySelectorAll(".color");

    for (const key in colors) {
        if (colors[key].className == "color selected") {
            colors[key].classList.remove("selected")   
        }
    }

   if (qual.target.className != "color selected"){
       qual.target.className += " selected"
   }

}
//Requisito 8
definePixels()
function definePixels(){
let pixels =  document.querySelectorAll(".pixel")
for (let pixel = 0; pixel < pixels.length; pixel++) {
    const element = pixels[pixel];
    element.addEventListener("click", mudaDeCor )
}
}
function mudaDeCor (qualfoi) {
let target = qualfoi.target;

let selecionaDor = document.querySelector(".selected")
let corDeFundo = window.getComputedStyle(selecionaDor).backgroundColor
target.style.backgroundColor = corDeFundo
}

//Requisito9
let clearBoard = document.getElementById("clear-board")
clearBoard.addEventListener("click",limpar )

function limpar (){
    let pixelSujo = document.getElementsByClassName("pixel")
    for (let pix = 0; pix < pixelSujo.length; pix++) {
        const element = pixelSujo[pix];
        element.style.backgroundColor = "white"
        
    }
}

