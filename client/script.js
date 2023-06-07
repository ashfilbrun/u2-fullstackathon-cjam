

//definitions
// const button = document.querySelector('button')
// const colorTest = document.querySelector("#lblColorsSelected")
// const typeTest = document.querySelector("#lblTypesSelected")
const FP1div = document.querySelector("#FP1")
const BASE_URL = `http://localhost:3001/`


//selection for individual colors
// function colorSelection()
// {
// const selectedColors = []

// const whiteBox = document.querySelector(`#colorWhite`)
// const blackBox = document.querySelector(`#colorBlack`)
// const grayBox = document.querySelector(`#colorGray`)
// const greenBox = document.querySelector(`#colorGreen`)
// const blueBox = document.querySelector(`#colorBlue`)
// const redBox = document.querySelector(`#colorRed`)

// if (whiteBox.checked) selectedColors.push(whiteBox.value)
// if (blackBox.checked) selectedColors.push(blackBox.value)
// if (grayBox.checked) selectedColors.push(grayBox.value)
// if (greenBox.checked) selectedColors.push(greenBox.value)
// if (blueBox.checked) selectedColors.push(blueBox.value)
// if (redBox.checked) selectedColors.push(redBox.value)

// const colorString = selectedColors.join(',')
// console.log(colorString)
// return colorString
// }



// //Selection for speaker or headphone or both
// function typeSelection()
// {

// const selectedTypes = []

// const speakerBox = document.querySelector(`#typeSpeaker`)
// const headphoneBox = document.querySelector(`#typeHeadphone`)

// if (speakerBox.checked) selectedTypes.push(speakerBox.value)
// if (headphoneBox.checked) selectedTypes.push(headphoneBox.value)

// const typeString = selectedTypes.join(',')
// console.log(typeString)
// return typeString

// }




// button.addEventListener('click', async () =>
// {
//     const selectedColors = colorSelection()
//     const selectedTypes = typeSelection()

//     colorTest.innerHTML = selectedColors
//     typeTest.innerHTML = selectedTypes

// })






//let response = axios.get(`WebsiteGoesHere`)

async function showFP1() {
let responseFP1 = await axios.get(`${BASE_URL}products/headphones/6480987d65ebc51fee2754c2`)
let productData = `
<div id="FP1DATA">

<img src="../${responseFP1.data.image}"/>
<div>Brand: ${responseFP1.data.brand}</div>
<div>Model Name: ${responseFP1.data.model_name}</div>
<div>Description: ${responseFP1.data.description}</div>
<div>Color: ${responseFP1.data.color}</div>
<div>In Stock: ${responseFP1.data.in_stock}</div>
<div>Price: ${responseFP1.data.price}</div>

</div>


`
FP1div.innerHTML = productData
console.log(responseFP1.data.image)
}



showFP1()