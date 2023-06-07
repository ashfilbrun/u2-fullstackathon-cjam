

//definitions
const button = document.querySelector('button')
const colorTest = document.querySelector("#lblColorsSelected")
const typeTest = document.querySelector("#lblTypesSelected")
const colorData = document.querySelector('#apiLbl')

//selection for individual colors
function colorSelection()
{
const selectedColors = []

const whiteBox = document.querySelector(`#colorWhite`)
const blackBox = document.querySelector(`#colorBlack`)
const grayBox = document.querySelector(`#colorGray`)
const greenBox = document.querySelector(`#colorGreen`)
const blueBox = document.querySelector(`#colorBlue`)
const redBox = document.querySelector(`#colorRed`)

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

const speakerBox = document.querySelector(`#typeSpeaker`)
const headphoneBox = document.querySelector(`#typeHeadphone`)

if (speakerBox.checked) selectedTypes.push(speakerBox.value)
if (headphoneBox.checked) selectedTypes.push(headphoneBox.value)

const typeString = selectedTypes.join(',')
console.log(typeString)
return typeString

}



async function getColorData() 
{
    try{
        const response = await axios.get('http://localhost:3001/products/headphones')
        const headphones = response.data
        const colors = headphones.map(headphone => headphone.color)
        return colors
    } catch (error)
    {
        console.error("Stuff is broken", error)
        return null
    }
}






button.addEventListener('click', async () =>
{


    const selectedColors = colorSelection()
    const selectedTypes = typeSelection()
    const apiColorData = await getColorData()

    colorTest.innerHTML = selectedColors
    typeTest.innerHTML = selectedTypes
    colorData.innerHTML = apiColorData


    const matchingColors = apiColorData.filter(color => selectedColors.includes(color.toLowerCase()));

    if (matchingColors.length > 0)
        {
            colorData.innerHTML = matchingColors.map(color => `<li>${color.toLowerCase()}</li>`);
            colorList.innerHTML = colorItems.join('')
        }
        else
        {
            colorData.innerHTML="nomatching colors"
        }

})



//let response = axios.get(`WebsiteGoesHere`)