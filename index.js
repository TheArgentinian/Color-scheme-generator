const colorSelector = document.getElementById("color-sel")
const schemeSelector = document.getElementById("scheme-selector")
const colorsRender = document.getElementById("colors-render")


function getColors(){
     fetch(`"https://www.thecolorapi.com/scheme?hex=${colorSelector.value}&${schemeSelector}`)
    .then(response => response.json())
    .then(data => {
        console.log("🚀 ~ file: index.js:10 ~ getColors ~ data:", data)
        return console.log(data)
    })
}

function renderColors (colorsArray){
    colorsRender.innerHTML = colorsArray.map(color =>
        return `<div onclick="copyToClipboard">`
        )
}