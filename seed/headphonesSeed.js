const db = require('../db')
const { Headphone, Speaker } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => [
    {
        image: 'image goes here', //add image file
        brand: 'Sony',
        model_name: 'WH100X4M5 Wireless Noise-Cancelling Headphones',
        description: `The WH-1000XM5 headphones rewrite the rules for distraction-free listening. Two processors control 8 microphones for unprecedented noise canceling and exceptional call quality.`,
        price: 349.99,
        in_stock: true,
        color: 'Blue',
    },
    {
        image: 'image goes here', //add image file
        brand: 'Beats by Dr. Dre',
        model_name: `Beats Studio3 Wireless Noise Cancelling Headphones`,
        description: `Beats Studio³ Wireless headphones deliver a premium listening experience with Pure Adaptive Noise Cancelling (Pure ANC) to actively block external noise, and real-time audio calibration to preserve clarity, range, and emotion.`,
        price: 349.99,
        in_stock: true,
        color: 'Matte Black',
    },
    {
        image: 'image goes here', //add image file
        brand: 'Apple',
        model_name: 'Airpods Max',
        description: `AirPods Max reimagine over-ear headphones. An Apple-designed dynamic driver provides immersive high-fidelity audio. Every detail, from canopy to cushions, has been designed for an exceptional fit.`,
        price: 479.99,
        in_stock: true,
        color: 'Space Gray',
    },
    {
        image: 'image goes here', //add image file
        brand: 'Apple',
        model_name: 'Airpods Max',
        description: `AirPods Max reimagine over-ear headphones. An Apple-designed dynamic driver provides immersive high-fidelity audio. Every detail, from canopy to cushions, has been designed for an exceptional fit.`,
        price: 479.99,
        in_stock: true,
        color: 'Sky Blue',
    },
    {
        image: 'image goes here', //add image file
        brand: 'Apple',
        model_name: 'Airpods Max',
        description: `AirPods Max reimagine over-ear headphones. An Apple-designed dynamic driver provides immersive high-fidelity audio. Every detail, from canopy to cushions, has been designed for an exceptional fit.`,
        price: 479.99,
        in_stock: true,
        color: 'Green',
    },
    {
        image: 'image goes here', //add image file
        brand: 'Apple',
        model_name: 'Airpods Pro (2nd Generation)',
        description: `AirPods Pro feature up to 2x more Active Noise Cancellation,¹ plus Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking for immersive sound.² Now with multiple ear tips (XS, S, M, L) and up to 6 hours of listening time.`,
        price: 199.99,
        in_stock: true,
        color: 'White',
    },
    {
        image: 'image goes here', //add image file
        brand: 'Apple',
        model_name: 'Airpods Max',
        description: `AirPods Max reimagine over-ear headphones. An Apple-designed dynamic driver provides immersive high-fidelity audio. Every detail, from canopy to cushions, has been designed for an exceptional fit.`,
        price: 479.99,
        in_stock: true,
        color: 'Space Gray',
    },
    {
        image: 'image goes here', //add image file
        brand: 'Bose',
        model_name: 'Quiet Comfort 45',
        description: `That is the power of Bose QuietComfort® headphones: a best-in-class combination of noise cancelling, audio performance, and comfort.`,
        price: 279.99,
        in_stock: true,
        color: 'White',
    },
    {
        image: 'image goes here', //add image file
        brand: 'Bose',
        model_name: 'Noise Cancelling Headphones 700',
        description: ` These headphones feature an unrivaled four-microphone system so your voice sounds crystal clear in noisy environments. World-class sound management gives you 11 levels of noise cancellation, so you can control distractions or stay open to the world.`,
        price: 379.99,
        in_stock: true,
        color: 'Triple Black',
    },
    {
        image: 'image goes here', //add image file
        brand: 'JBL',
        model_name: 'Vibe Beam True',
        description: `JBL Vibe Beam are designed for your daily entertainment. Whether you're roaming city streets or relaxing on the beach, your hands-free stereo calls will always be crystal clear, while Smart Ambient technology keeps you aware of your surroundings.`,
        price: 39.99,
        in_stock: true,
        color: 'Black',
    },
    {
        image: 'image goes here', //add image file
        brand: 'Sony',
        model_name: 'WF-C700N',
        description: `Block out the world with the WF-C700N noise canceling truly wireless earbuds. Indulge in exceptional sound quality for a superior audio experience. Crafted for all-day comfort with lightweight materials and an ergonomic design.`,
        price: 99.00,
        in_stock: true,
        color: 'Sage',
    },
    {
        image: 'image goes here', //add image file
        brand: 'Sennheiser',
        model_name: 'Momentum 4',
        description: `The new MOMENTUM 4 Wireless once again raises the bar delivering world class sound quality with advanced Adaptive Noise Cancellation and exceptional comfort.`,
        price: 299.99,
        in_stock: true,
        color: 'White',
    }
]
