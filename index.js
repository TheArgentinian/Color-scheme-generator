const colorSelector = document.getElementById("color-sel")
const schemeSelector = document.getElementById("scheme-selector")
const colorsRender = document.getElementById("colors-render")


function getColors(){
     fetch(`"https://www.thecolorapi.com/scheme?hex=${colorSelector.value}&${schemeSelector}`)
    .then(response => response.json())
    .then(data => {
        renderColors(data.colors)
    })
}

function renderColors (colorsArray){
    colorsRender.innerHTML = colorsArray.map(color => { //bracket innecesaria?//
        return `<div class="colors" 
                style="background-color: ${color.hex.value}">
                <div class="color-name">${color.name.value}</div>
            </div>
        `
    })
}