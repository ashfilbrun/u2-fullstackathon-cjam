

//definitions
const button = document.querySelector('button')

//selection for individual colors
function colorSelection()
{
const selectedColors = []

const whiteBox = document.querySelectorAll(`#colorWhite`)
const blackBox = document.querySelectorAll(`#colorBlack`)
const grayBox = document.querySelectorAll(`#colorGray`)
const greenBox = document.querySelectorAll(`#colorGreen`)
const blueBox = document.querySelectorAll(`#colorBlue`)
const redBox = document.querySelectorAll(`#colorRed`)

if (whiteBox.checked) selectedColors.push(whiteBox.value)
if (blackBox.checked) selectedColors.push(blackBox.value)
if (grayBox.checked) selectedColors.push(grayBox.value)
if (greenBox.checked) selectedColors.push(greenBox.value)
if (blueBox.checked) selectedColors.push(blueBox.value)
if (redBox.checked) selectedColors.push(redBox.value)

const colorString = selectedColors.join(',')
console.log(colorString)
return colorString
}



//Selection for speaker or headphone or both
function typeSelection()
{

const selectedTypes = []

const speakerBox = document.querySelectorAll(`#Speakers`)
const headphoneBox = document.querySelectorAll(`#Headphones`)

if (speakerBox.checked) selectedTypes.push(speakerbox.value)
if (headphoneBox.checked) selectedTypes.push(headphoneBox.value)

const typeString = selectedTypes.join(',')
console.log(typeString)
return typeString

}


button.addEventListener('click', async () =>
{
    const selectedColors = colorSelection()
    const selectedTypes = typeSelection()



    console.log(`boxes that are chedked ${selectedColors} ${selectedTypes}`)
})






//let response = axios.get(`WebsiteGoesHere`)