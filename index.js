const colorSelector = document.getElementById("color-sel")
const schemeSelector = document.getElementById("scheme-selector")
const colorsRender = document.getElementById("colors-render")
const schemeButton = document.getElementById('button-scheme')

console.log(colorSelector.value)

colorSelector.addEventListener("click", getColors)

function getColors(){
     fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector.value}`)
    .then(response => response.json())
    .then(data => {
        //renderColors(data.colors)
        console.log(data)
    })
}


function renderColors (colorsArray){
    colorsRender.innerHTML = colorsArray.map(color => { 
        return `<div class="colors" 
                style="background-color: ${color.hex.value}">
                <div class="color-name">${color.name.value}</div>
            </div>
        `
    })
}

