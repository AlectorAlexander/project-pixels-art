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


