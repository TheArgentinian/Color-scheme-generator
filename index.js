const colorSelector = document.getElementById("color-sel")
const schemeSelector = document.getElementById("scheme-selector")
const colorsRender = document.getElementById("colors-render")
const schemeButton = document.getElementById('scheme-button')
const test = document.getElementById("test")
let schemes = []
getColors()

schemeButton.addEventListener("click", getColors)

function getColors(){
     fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector.value.substr(-6)}&mode=${schemeSelector.value}&count=5`)
    .then(response => response.json())
    .then(data => {
        renderColors(data.colors)
        schemes = data._links.schemes
        getSchemeColors()
    })
}


function renderColors(colorsArray){
    colorsRender.innerHTML = colorsArray.map(color => { 
        return `<div class="colors" 
                style="background-color: ${color.hex.value}">
                <div class="color-name">${color.name.value}</div>
            </div>
        `
    })
}

function getSchemeColors(){
    Object.entries(schemes).map(([key, value]) => (            
        schemeSelector.innerHTML += `
        <option value=${value}>${key}</option>
        `
    )
)
}

