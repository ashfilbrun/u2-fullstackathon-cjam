const db = require('../db')
const { Headphone, Speaker } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const headphones = [
        {
            image: `headphonesImages/sonysilver.png`, //add image file
            brand: 'Sony',
            model_name: 'WH100X4M5 Wireless Noise-Canceling Headphones',
            description: `The WH-1000XM5 headphones rewrite the rules for distraction-free listening. Two processors control 8 microphones for unprecedented noise canceling and exceptional call quality.`,
            price: 349.99,
            in_stock: true,
            color: 'Silver',
        },
        {
            image: `headphonesImages/beatsbydrdrenew.png`, //add image file
            brand: 'Beats by Dr. Dre',
            model_name: `Beats Studio3 Wireless Noise Canceling Headphones`,
            description: `Beats Studio³ Wireless headphones deliver a premium listening experience with Pure Adaptive Noise Cancelling (Pure ANC) to actively block external noise, and real-time audio calibration to preserve clarity, range, and emotion.`,
            price: 349.99,
            in_stock: true,
            color: 'Shadow Gray',
        },
        {
            image: `headphonesImages/airpodmaxblack.png`, //add image file
            brand: 'Apple',
            model_name: 'Airpods Max',
            description: `AirPods Max reimagine over-ear headphones. An Apple-designed dynamic driver provides immersive high-fidelity audio. Every detail, from canopy to cushions, has been designed for an exceptional fit.`,
            price: 479.99,
            in_stock: true,
            color: 'Space Gray',
        },
        {
            image: `headphonesImages/marklevinson.png`, //add image file
            brand: 'Mark Levinson',
            model_name: 'No. 5909 Premium High-Resolution Wireless Noise-Canceling Headphones',
            description: `Built for passionate listeners who desire a more meaningful relationship with music and the ability to explore their curiosities outside the confines of their homes, the Mark Levinson № 5909 is the perfect packable for inquisitive travelers and audiophiles.`,
            price: 999.99,
            in_stock: true,
            color: 'Ice Pewter',
        },
        {
            image: `headphonesImages/airpodmaxgreen.png`, //add image file
            brand: 'Apple',
            model_name: 'Airpods Max',
            description: `AirPods Max reimagine over-ear headphones. An Apple-designed dynamic driver provides immersive high-fidelity audio. Every detail, from canopy to cushions, has been designed for an exceptional fit.`,
            price: 479.99,
            in_stock: true,
            color: 'Green',
        },
        {
            image: `headphonesImages/airpods.png`, //add image file
            brand: 'Apple',
            model_name: 'Airpods Pro (2nd Generation)',
            description: `AirPods Pro feature up to 2x more Active Noise Cancellation,¹ plus Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking for immersive sound.² Now with multiple ear tips (XS, S, M, L) and up to 6 hours of listening time.`,
            price: 199.99,
            in_stock: true,
            color: 'White',
        },
        {
            image: `headphonesImages/senbigone.png`, //add image file
            brand: 'Sennheiser',
            model_name: 'HD 820 Over-the-Ear Audiophile Headphones',
            description: `The HD 820 fuses Sennheiser's bleeding-edge acoustic capabilities with exceptional reduction of ambient noise.`,
            price: 1799.98,
            in_stock: true,
            color: 'Black',
        },
        {
            image: `headphonesImages/bose700inwhite.png`, //add image file
            brand: 'Bose',
            model_name: 'Quiet Comfort 45 Over-Ear Headphones',
            description: `That is the power of Bose QuietComfort® headphones: a best-in-class combination of noise cancelling, audio performance, and comfort.`,
            price: 279.99,
            in_stock: true,
            color: 'White',
        },
        {
            image: `headphonesImages/Bose700.png`, //add image file
            brand: 'Bose',
            model_name: '700 Wireless Noise-Canceling Headphones',
            description: ` These headphones feature an unrivaled four-microphone system so your voice sounds crystal clear in noisy environments. World-class sound management gives you 11 levels of noise cancellation, so you can control distractions or stay open to the world.`,
            price: 379.99,
            in_stock: true,
            color: 'Triple Black',
        },
        {
            image: `headphonesImages/jblviberight.png`, //add image file
            brand: 'JBL',
            model_name: 'Vibe Beam True Wireless Earphones',
            description: `JBL Vibe Beam are designed for your daily entertainment. Whether you're roaming city streets or relaxing on the beach, your hands-free stereo calls will always be crystal clear, while Smart Ambient technology keeps you aware of your surroundings.`,
            price: 39.99,
            in_stock: true,
            color: 'Black',
        },
        {
            image: `headphonesImages/sonywfgreen.png`, //add image file
            brand: 'Sony',
            model_name: 'WF-C700N Truly Wireless In-Ear Headphones',
            description: `Block out the world with the WF-C700N noise canceling truly wireless earbuds. Indulge in exceptional sound quality for a superior audio experience. Crafted for all-day comfort with lightweight materials and an ergonomic design.`,
            price: 99.00,
            in_stock: true,
            color: 'Sage',
        },
        {
            image: `headphonesImages/sennheisernew.png`, //add image file
            brand: 'Sennheiser',
            model_name: 'Momentum 4 Wireless Adaptive Noise-Canceling Over-The-Ear Headphones',
            description: `The new MOMENTUM 4 Wireless once again raises the bar delivering world class sound quality with advanced Adaptive Noise Cancellation and exceptional comfort.`,
            price: 299.99,
            in_stock: true,
            color: 'White',
        }
    ]

    await Headphone.insertMany(headphones)
    // await Headphone.deleteMany(headphones)
    console.log('Created headphones!')
}

const run = async () => {
    await main()
    db.close()
}
  
run() //