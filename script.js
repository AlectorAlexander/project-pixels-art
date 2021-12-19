//Requisito2 e Requisito3

let colorPalette = document.getElementById("color-palette")
let cores = ["black","yellow","orange","green" ]
criadorDeDivs ()
function criadorDeDivs () {
    
    for (let cor = 0; cor < cores.length; cor++) {
        const element = cores[cor];
        let divs = document.createElement("div")
        divs.className = "color"
        divs.style.backgroundColor = element
        divs.id = element
        
        colorPalette.appendChild(divs)   
    }

}
//Requisito4
let pixelBoard = document.getElementById("pixel-board");
grid ()
function grid (){
    for (let quadrorizonte = 0; quadrorizonte < 5; quadrorizonte++) {
        let pixel = document.createElement("div")
        pixel.className = "pixel"
        pixelBoard.appendChild(pixel)
        for (let vertiquadro = 0; vertiquadro < 4; vertiquadro++) {
            let pixel = document.createElement("div")
            pixel.className = "pixel"
            pixelBoard.appendChild(pixel)
        }
        
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

let pixels =  document.querySelectorAll(".pixel")
for (let pixel = 0; pixel < pixels.length; pixel++) {
    const element = pixels[pixel];
    element.addEventListener("click", mudaDeCor )
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