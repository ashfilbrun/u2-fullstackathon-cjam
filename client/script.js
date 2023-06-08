

//definitions

const button = document.querySelector('button') // maybe shopNowBtn
const colorTest = document.querySelector("#lblColorsSelected")
const typeTest = document.querySelector("#lblTypesSelected")
const colorData = document.querySelector('#apiLbl')

const FP1div = document.querySelector("#FP1")
const FP2div = document.querySelector("#FP2")
const FP3div = document.querySelector("#FP3")
const FP4div = document.querySelector("#FP4")
const FP5div = document.querySelector("#FP5")
const H1div = document.querySelector("#H1")
const H2div = document.querySelector("#H2")
const H3div = document.querySelector("#H3")
const H4div = document.querySelector("#H4")
const H5div = document.querySelector("#H5")
const H6div = document.querySelector("#H6")
const H7div = document.querySelector("#H7")
const H8div = document.querySelector("#H8")
const H9div = document.querySelector("#H9")
const H10div = document.querySelector("#H10")
const S1div = document.querySelector("#S1")
const S2div = document.querySelector("#S2")
const S3div = document.querySelector("#S3")
const S4div = document.querySelector("#S4")
const S5div = document.querySelector("#S5")
const S6div = document.querySelector("#S6")
const S7div = document.querySelector("#S7")
const S8div = document.querySelector("#S8")
const S9div = document.querySelector("#S9")
const S10div = document.querySelector("#S10")
const BASE_URL = `http://localhost:3001/`
const headphonesSN = document.querySelector("#headphonesSN")
const speakersSN = document.querySelector("#speakersSN")

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






// button.addEventListener('click', async () =>
// {


//     const selectedColors = colorSelection()
//     const selectedTypes = typeSelection()
//     const apiColorData = await getColorData()

//     colorTest.innerHTML = selectedColors
//     typeTest.innerHTML = selectedTypes
//     colorData.innerHTML = apiColorData



//     const matchingColors = apiColorData.filter(color => selectedColors.includes(color.toLowerCase()));

//     if (matchingColors.length > 0)
//         {
//             colorData.innerHTML = matchingColors.map(color => `<li>${color.toLowerCase()}</li>`);
//             colorList.innerHTML = colorItems.join('')
//         }
//         else
//         {
//             colorData.innerHTML="nomatching colors"
//         }

// })

//let response = axios.get(`WebsiteGoesHere`)


async function showFP1() {
let responseFP1 = await axios.get(`${BASE_URL}products/headphones/`)
let productData = `
<div id="FP1DATA">

<img src="../${responseFP1.data[0].image}"/>
<div>Brand: ${responseFP1.data[0].brand}</div>
<div>Model Name: ${responseFP1.data[0].model_name}</div>
<div>Description: ${responseFP1.data[0].description}</div>
<div>Color: ${responseFP1.data[0].color}</div>
<div>In Stock: ${responseFP1.data[0].in_stock}</div>
<div>Price: $${responseFP1.data[0].price}</div>

</div>


`
FP1div.innerHTML = productData
console.log(responseFP1)
}

async function showFP2() {
    let responseFP2 = await axios.get(`${BASE_URL}products/headphones/`)
    let productData = `
        <div id="FP2DATA">
            <img src="../${responseFP2.data[4].image}"/>
            <div>Brand: ${responseFP2.data[4].brand}</div>
            <div>Model Name: ${responseFP2.data[4].model_name}</div>
            <div>Description: ${responseFP2.data[4].description}</div>
            <div>Color: ${responseFP2.data[4].color}</div>
            <div>In Stock: ${responseFP2.data[4].in_stock}</div>
            <div>Price: $${responseFP2.data[4].price}</div>
        </div>
    `
    FP2div.innerHTML = productData
    console.log(responseFP2.data.image)
    }
    
async function showFP3() {
        let responseFP3 = await axios.get(`${BASE_URL}products/headphones/`)
        let productData = `
        <div id="FP3DATA">
        
        <img src="../${responseFP3.data[7].image}"/>
        <div>Brand: ${responseFP3.data[7].brand}</div>
        <div>Model Name: ${responseFP3.data[7].model_name}</div>
        <div>Description: ${responseFP3.data[7].description}</div>
        <div>Color: ${responseFP3.data[7].color}</div>
        <div>In Stock: ${responseFP3.data[7].in_stock}</div>
        <div>Price: $${responseFP3.data[7].price}</div>
        
        </div>
        
        
        `
        FP3div.innerHTML = productData
        console.log(responseFP3.data.image)
        }

async function showFP4() {
    let responseFP4 = await axios.get(`${BASE_URL}products/speakers/`)
    let productData = `
    <div id="FP4DATA">
    
    <img src="../${responseFP4.data[4].image}"/>
    <div>Brand: ${responseFP4.data[4].brand}</div>
    <div>Model Name: ${responseFP4.data[4].model_name}</div>
    <div>Description: ${responseFP4.data[4].description}</div>
    <div>Color: ${responseFP4.data[4].color}</div>
    <div>In Stock: ${responseFP4.data[4].in_stock}</div>
    <div>Price: $${responseFP4.data[4].price}</div>
    
    </div>
    
    
    `
    FP4div.innerHTML = productData
    console.log(responseFP4.data.image)
    }  
    
async function showFP5() {
    let responseFP5 = await axios.get(`${BASE_URL}products/speakers/`)
    let productData = `
    <div id="FP5DATA">
    
    <img src="../${responseFP5.data[3].image}"/>
    <div>Brand: ${responseFP5.data[3].brand}</div>
    <div>Model Name: ${responseFP5.data[3].model_name}</div>
    <div>Description: ${responseFP5.data[3].description}</div>
    <div>Color: ${responseFP5.data[3].color}</div>
    <div>In Stock: ${responseFP5.data[3].in_stock}</div>
    <div>Price: $${responseFP5.data[3].price}</div>
    
    </div>
    
    
    `
    FP5div.innerHTML = productData
    console.log(responseFP5.data.image)
    }  


showFP1()
showFP2()
showFP3()
showFP4()
showFP5()






async function showH1() {
let response = await axios.get(`${BASE_URL}products/headphones/`)
let productData = `
<div id="H1DATA">

<img src="../${response.data[0].image}"/>
<div>Brand: ${response.data[0].brand}</div>
<div>Model Name: ${response.data[0].model_name}</div>
<div>Description: ${response.data[0].description}</div>
<div>Color: ${response.data[0].color}</div>
<div>In Stock: ${response.data[0].in_stock}</div>
<div>Price: $${response.data[0].price}</div>

</div>


`
H1div.innerHTML = productData
console.log(response.data.image)
}

async function showH2() {
    let response = await axios.get(`${BASE_URL}products/headphones/`)
    let productData = `
    <div id="H2DATA">
    
    <img src="../${response.data[1].image}"/>
    <div>Brand: ${response.data[1].brand}</div>
    <div>Model Name: ${response.data[1].model_name}</div>
    <div>Description: ${response.data[1].description}</div>
    <div>Color: ${response.data[1].color}</div>
    <div>In Stock: ${response.data[1].in_stock}</div>
    <div>Price: $${response.data[1].price}</div>
    
    </div>
    
    
    `
    H2div.innerHTML = productData
    console.log(response.data.image)
    }
    


async function showH3() {
        let response = await axios.get(`${BASE_URL}products/headphones/`)
        let productData = `
        <div id="H3DATA">
        
        <img src="../${response.data[2].image}"/>
        <div>Brand: ${response.data[2].brand}</div>
        <div>Model Name: ${response.data[2].model_name}</div>
        <div>Description: ${response.data[2].description}</div>
        <div>Color: ${response.data[2].color}</div>
        <div>In Stock: ${response.data[2].in_stock}</div>
        <div>Price: $${response.data[2].price}</div>
        
        </div>
        
        
        `
        H3div.innerHTML = productData
        console.log(response.data.image)
        }

async function showH4() {
    let response = await axios.get(`${BASE_URL}products/headphones/`)
    let productData = `
    <div id="H4DATA">
    
    <img src="../${response.data[3].image}"/>
    <div>Brand: ${response.data[3].brand}</div>
    <div>Model Name: ${response.data[3].model_name}</div>
    <div>Description: ${response.data[3].description}</div>
    <div>Color: ${response.data[3].color}</div>
    <div>In Stock: ${response.data[3].in_stock}</div>
    <div>Price: $${response.data[3].price}</div>
    
    </div>
    
    
    `
    H4div.innerHTML = productData
    console.log(response.data.image)
    }  
    
async function showH5() {
    let response = await axios.get(`${BASE_URL}products/headphones/`)
    let productData = `
    <div id="H5DATA">
    
    <img src="../${response.data[4].image}"/>
    <div>Brand: ${response.data[4].brand}</div>
    <div>Model Name: ${response.data[4].model_name}</div>
    <div>Description: ${response.data[4].description}</div>
    <div>Color: ${response.data[4].color}</div>
    <div>In Stock: ${response.data[4].in_stock}</div>
    <div>Price: $${response.data[4].price}</div>
    
    </div>
    
    
    `
    H5div.innerHTML = productData
    console.log(response.data.image)
    }  

    async function showH6() {
        let response = await axios.get(`${BASE_URL}products/headphones/`)
        let productData = `
        <div id="H6DATA">
        
        <img src="../${response.data[5].image}"/>
        <div>Brand: ${response.data[5].brand}</div>
        <div>Model Name: ${response.data[5].model_name}</div>
        <div>Description: ${response.data[5].description}</div>
        <div>Color: ${response.data[5].color}</div>
        <div>In Stock: ${response.data[5].in_stock}</div>
        <div>Price: $${response.data[5].price}</div>
        
        </div>
        
        
        `
        H6div.innerHTML = productData
        console.log(response.data.image)
        }  

        async function showH7() {
            let response = await axios.get(`${BASE_URL}products/headphones/`)
            let productData = `
            <div id="H7DATA">
            
            <img src="../${response.data[6].image}"/>
            <div>Brand: ${response.data[6].brand}</div>
            <div>Model Name: ${response.data[6].model_name}</div>
            <div>Description: ${response.data[6].description}</div>
            <div>Color: ${response.data[6].color}</div>
            <div>In Stock: ${response.data[6].in_stock}</div>
            <div>Price: $${response.data[6].price}</div>
            
            </div>
            
            
            `
            H7div.innerHTML = productData
            console.log(response.data.image)
            }  

     async function showH7() {
            let response = await axios.get(`${BASE_URL}products/headphones/`)
            let productData = `
            <div id="H7DATA">
            
            <img src="../${response.data[6].image}"/>
            <div>Brand: ${response.data[6].brand}</div>
            <div>Model Name: ${response.data[6].model_name}</div>
            <div>Description: ${response.data[6].description}</div>
            <div>Color: ${response.data[6].color}</div>
            <div>In Stock: ${response.data[6].in_stock}</div>
            <div>Price: $${response.data[6].price}</div>
            
            </div>
            
            
            `
            H7div.innerHTML = productData
            console.log(response.data.image)
            }
            async function showH8() {
                let response = await axios.get(`${BASE_URL}products/headphones/`)
                let productData = `
                <div id="H8DATA">
                
                <img src="../${response.data[7].image}"/>
                <div>Brand: ${response.data[7].brand}</div>
                <div>Model Name: ${response.data[7].model_name}</div>
                <div>Description: ${response.data[7].description}</div>
                <div>Color: ${response.data[7].color}</div>
                <div>In Stock: ${response.data[7].in_stock}</div>
                <div>Price: $${response.data[7].price}</div>
                
                </div>
                
                
                `
                H8div.innerHTML = productData
                console.log(response.data.image)
                }    
     
            

                async function showH9() {
                    let response = await axios.get(`${BASE_URL}products/headphones/`)
                    let productData = `
                    <div id="H9DATA">
                    
                    <img src="../${response.data[8].image}"/>
                    <div>Brand: ${response.data[8].brand}</div>
                    <div>Model Name: ${response.data[8].model_name}</div>
                    <div>Description: ${response.data[8].description}</div>
                    <div>Color: ${response.data[8].color}</div>
                    <div>In Stock: ${response.data[8].in_stock}</div>
                    <div>Price: $${response.data[8].price}</div>
                    
                    </div>
                    
                    
                    `
                    H9div.innerHTML = productData
                    console.log(response.data.image)
                    } 


                    async function showH10() {
                        let response = await axios.get(`${BASE_URL}products/headphones/`)
                        let productData = `
                        <div id="H10DATA">
                        
                        <img src="../${response.data[9].image}"/>
                        <div>Brand: ${response.data[9].brand}</div>
                        <div>Model Name: ${response.data[9].model_name}</div>
                        <div>Description: ${response.data[9].description}</div>
                        <div>Color: ${response.data[9].color}</div>
                        <div>In Stock: ${response.data[9].in_stock}</div>
                        <div>Price: $${response.data[9].price}</div>
                        
                        </div>
                        
                        
                        `
                        H10div.innerHTML = productData
                        console.log(response.data.image)
                        }  

    showH1()
    showH2()
    showH3()
    showH4()
    showH5()
    showH6()
    showH7()
    showH8()
    showH9()
    showH10()






async function showS1() {
let response = await axios.get(`${BASE_URL}products/speakers/`)
let productData = `
<div id="S1DATA">

<img src="../${response.data[0].image}"/>
<div>Brand: ${response.data[0].brand}</div>
<div>Model Name: ${response.data[0].model_name}</div>
<div>Description: ${response.data[0].description}</div>
<div>Color: ${response.data[0].color}</div>
<div>In Stock: ${response.data[0].in_stock}</div>
<div>Price: $${response.data[0].price}</div>

</div>


`
S1div.innerHTML = productData
console.log(response.data.image)
}

async function showS2() {
    let response = await axios.get(`${BASE_URL}products/speakers/`)
    let productData = `
    <div id="S2DATA">
    
    <img src="../${response.data[1].image}"/>
    <div>Brand: ${response.data[1].brand}</div>
    <div>Model Name: ${response.data[1].model_name}</div>
    <div>Description: ${response.data[1].description}</div>
    <div>Color: ${response.data[1].color}</div>
    <div>In Stock: ${response.data[1].in_stock}</div>
    <div>Price: $${response.data[1].price}</div>
    
    </div>
    
    
    `
    S2div.innerHTML = productData
    console.log(response.data.image)
    }
    


async function showS3() {
        let response = await axios.get(`${BASE_URL}products/speakers/`)
        let productData = `
        <div id="S3DATA">
        
        <img src="../${response.data[2].image}"/>
        <div>Brand: ${response.data[2].brand}</div>
        <div>Model Name: ${response.data[2].model_name}</div>
        <div>Description: ${response.data[2].description}</div>
        <div>Color: ${response.data[2].color}</div>
        <div>In Stock: ${response.data[2].in_stock}</div>
        <div>Price: $${response.data[2].price}</div>
        
        </div>
        
        
        `
        S3div.innerHTML = productData
        console.log(response.data.image)
        }

async function showS4() {
    let response = await axios.get(`${BASE_URL}products/speakers`)
    let productData = `
    <div id="S4DATA">
    
    <img src="../${response.data[3].image}"/>
    <div>Brand: ${response.data[3].brand}</div>
    <div>Model Name: ${response.data[3].model_name}</div>
    <div>Description: ${response.data[3].description}</div>
    <div>Color: ${response.data[3].color}</div>
    <div>In Stock: ${response.data[3].in_stock}</div>
    <div>Price: $${response.data[3].price}</div>
    
    </div>
    
    
    `
    S4div.innerHTML = productData
    console.log(response.data.image)
    }  
    
async function showS5() {
    let response = await axios.get(`${BASE_URL}products/speakers`)
    let productData = `
    <div id="S5DATA">
    
    <img src="../${response.data[4].image}"/>
    <div>Brand: ${response.data[4].brand}</div>
    <div>Model Name: ${response.data[4].model_name}</div>
    <div>Description: ${response.data[4].description}</div>
    <div>Color: ${response.data[4].color}</div>
    <div>In Stock: ${response.data[4].in_stock}</div>
    <div>Price: $${response.data[4].price}</div>
    
    </div>
    
    
    `
    S5div.innerHTML = productData
    console.log(response.data.image)
    }  

    async function showS6() {
        let response = await axios.get(`${BASE_URL}products/speakers/`)
        let productData = `
        <div id="S6DATA">
        
        <img src="../${response.data[5].image}"/>
        <div>Brand: ${response.data[5].brand}</div>
        <div>Model Name: ${response.data[5].model_name}</div>
        <div>Description: ${response.data[5].description}</div>
        <div>Color: ${response.data[5].color}</div>
        <div>In Stock: ${response.data[5].in_stock}</div>
        <div>Price: $${response.data[5].price}</div>
        
        </div>
        
        
        `
        S6div.innerHTML = productData
        console.log(response.data.image)
        }


        async function showS7() {
            let response = await axios.get(`${BASE_URL}products/speakers/`)
            let productData = `
            <div id="S1DATA">
            
            <img src="../${response.data[6].image}"/>
            <div>Brand: ${response.data[6].brand}</div>
            <div>Model Name: ${response.data[6].model_name}</div>
            <div>Description: ${response.data[6].description}</div>
            <div>Color: ${response.data[6].color}</div>
            <div>In Stock: ${response.data[6].in_stock}</div>
            <div>Price: $${response.data[6].price}</div>
            
            </div>
            
            
            `
            S7div.innerHTML = productData
            console.log(response.data.image)
            }

            async function showS8() {
                let response = await axios.get(`${BASE_URL}products/speakers/`)
                let productData = `
                <div id="S1DATA">
                
                <img src="../${response.data[7].image}"/>
                <div>Brand: ${response.data[7].brand}</div>
                <div>Model Name: ${response.data[7].model_name}</div>
                <div>Description: ${response.data[7].description}</div>
                <div>Color: ${response.data[7].color}</div>
                <div>In Stock: ${response.data[7].in_stock}</div>
                <div>Price: $${response.data[7].price}</div>
                
                </div>
                
                
                `
                S8div.innerHTML = productData
                console.log(response.data.image)
                }



                async function showS9() {
                    let response = await axios.get(`${BASE_URL}products/speakers/`)
                    let productData = `
                    <div id="S1DATA">
                    
                    <img src="../${response.data[8].image}"/>
                    <div>Brand: ${response.data[8].brand}</div>
                    <div>Model Name: ${response.data[8].model_name}</div>
                    <div>Description: ${response.data[8].description}</div>
                    <div>Color: ${response.data[8].color}</div>
                    <div>In Stock: ${response.data[8].in_stock}</div>
                    <div>Price: $${response.data[8].price}</div>
                    
                    </div>
                    
                    
                    `
                    S9div.innerHTML = productData
                    console.log(response.data.image)
                    }


                    async function showS10() {
                        let response = await axios.get(`${BASE_URL}products/speakers/`)
                        let productData = `
                        <div id="S1DATA">
                        
                        <img src="../${response.data[9].image}"/>
                        <div>Brand: ${response.data[9].brand}</div>
                        <div>Model Name: ${response.data[9].model_name}</div>
                        <div>Description: ${response.data[9].description}</div>
                        <div>Color: ${response.data[9].color}</div>
                        <div>In Stock: ${response.data[9].in_stock}</div>
                        <div>Price: $${response.data[9].price}</div>
                        
                        </div>
                        
                        
                        `
                        S10div.innerHTML = productData
                        console.log(response.data.image)
                        }


showS1()
showS2()
showS3()
showS4()
showS5()
showS6()
showS7()
showS8()
showS9()
showS10()



headphonesSN.addEventListener(`click`, function() {
    window.location.href = `indexHeadphones.html`
})

speakersSN.addEventListener(`click`, function() {
    window.location.href = `indexSpeakers.html`
})