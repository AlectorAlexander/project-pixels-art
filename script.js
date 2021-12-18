
let colorPalette = document.getElementById("color-palette")
let cores = ["black","yellow","orange","green" ]
criadorDeDivs ()
function criadorDeDivs () {
    console.log(colorPalette)
    for (let cor = 0; cor < cores.length; cor++) {
        const element = cores[cor];
        let divs = document.createElement("div")
        divs.className = "color"
        divs.style.backgroundColor = element
        divs.id = element
        
        colorPalette.appendChild(divs)
        
    }

}