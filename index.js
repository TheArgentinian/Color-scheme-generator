const colorSelector = document.getElementById("color-sel")
const schemeSelector = document.getElementById("scheme-selector")
const colorsRender = document.getElementById("colors-render")
const schemeButton = document.getElementById('scheme-button')
const test = document.getElementById("test")
const hexValArray = document.getElementsByClassName("color-hex")


let schemes = undefined
getColors()


schemeButton.addEventListener("click", getColors)

function getColors(){
     fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector.value.slice(1)}&mode=${schemeSelector.value}&count=5`)
    .then(response => response.json())
    .then(data => {
        renderColors(data.colors)

        if (!schemes){
        schemes = data._links.schemes
        getColorSchemes()
    }
    })
}


function renderColors(colorsArray){
    colorsRender.innerHTML = colorsArray.map(color => { 
        return `
                <div class="colors" 
                style="background-color: ${color.hex.value}">
                <div class="color-name">${color.name.value}</div>
                <p class="color-hex" onclick="copyText('${color.hex.value}'); toastMsg()">${color.hex.value}</p>
                </div>
                <div id="snackbar">Copiado...</div>
        `
    }
).join("")
}

function getColorSchemes(){
    
    for(let key in schemes){
        const keyName = key.charAt(0).toUpperCase() + key.slice(1)
        schemeSelector.innerHTML += `
        <option value=${key}>${keyName}</option>
        `

      // método diferente para cuando necesite el valor

        /*     Object.entries(schemes).map(([key, value]) => (            
                schemeSelector.innerHTML += `
                <option value=${key}>${key}</option>
                `
            )
        ) */
}
}

function copyText(str) {
    navigator.clipboard.writeText(str)
}

function toastMsg() {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}