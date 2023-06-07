const db = require('../db')
const { Headphone, Speaker } = require ('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const speakers = [
        {
            image: `speakerImages/1Bose600.png`,
            brand:"Bose" ,
            model_name:"Smart soundbar 600" ,
            description:`Measuring 27.3” wide by 2.2” tall, the soundbar fits under any TV and features a matte-black top with metal wraparound grille.` ,
            price: 449.00 ,
            in_stock:true ,
            color: 'Black',
        },
        {
            image: `speakerImages/2BosePortable.png` ,
            brand: "Bose" ,
            model_name:"SoundLink Flex Bluetooth" ,
            description: `A portable speaker that is made for going wherever you go, the SoundLink Flex is the perfect musical sidekick for both days out and nights in.`,
            price: 149.00,
            in_stock: true, 
            color: 'Blue',
        },
        {
            image: `speakerImages/3BoseWirelessPA.png`,
            brand: `Bose` ,
            model_name: `S1 Pro + Wiresless PA System`,
            description: `With more powerful performance, S1 Pro+ gets even louder than its predecessor. So you can be a vibe any time you bring this portable PA system to a gig.`,
            price: 699.00 ,
            in_stock: false , 
            color: 'Black',
        },
        {
            image:`speakerImages/4ATWireless.png` ,
            brand: `Audio-Technica`,
            model_name:`AT-SP65XBT` ,
            description:`This portable Bluetooth wireless speaker makes it easy to enjoy high-quality music playback – or set up a speakerphone – wherever you are. Measuring 10.6" W x 4.1" H x 4.5" D, the speaker is equipped with two 3" full-range drivers and a passive radiator to deliver clear, powerful audio with enhanced bass.` ,
            price: 65 ,
            in_stock: false , 
            color: 'Black',
        },
        {
            image:`speakerImages/5ATWired.png` ,
            brand:`Audio-Technica` ,
            model_name:`AT-SP95` ,
            description:`The AT-SP95 active speakers make it incredibly easy to create your ideal sound environment with quick connectivity to computers and other audio devices.` ,
            price:79.95,
            in_stock: true , 
            color: 'Blue',
        },
        {
            image:`speakerImages/6AT-CSP1.png` ,
            brand: `Audio-Technica`,
            model_name:`AT-CSP1` ,
            description:`How people work and live has diversified with the times. The places we work and study are changing as well. To keep pace with these changes, we have developed a simple USB speakerphone. It’s a handy size that is easy to carry, so you can work or study anywhere.` ,
            price: 129,
            in_stock: true, 
            color: 'White',
        },
        {
            image:`speakerImages/7DynCore59.png` ,
            brand:`Dynaudio` ,
            model_name:`Core 59` ,
            description: `Core 59 brings the pinnacle of precision, consistency and reliability to your studio. This is what performance sounds like. When you’re working with art – whether it’s someone else’s or your own – you need equipment you can trust.`,
            price:2625 ,
            in_stock:true , 
            color: 'Black',
        },
        {
            image:`speakerImages/8DynCore7.png` ,
            brand:`Dynaudio` ,
            model_name:`Core 7` ,
            description:`Trust is critical in this business. Whether you’re recording a power-trio or an orchestra, mixing a solo voiceover or video-game soundtrack, or mastering a full immersive audio project (such as a Dolby ATMOS mix), you need to know that your monitors reproduce everything you need to hear – warts and all.` ,
            price:2100 ,
            in_stock:false , 
            color: 'Black',
        },
        {
            image:`speakerImages/9Hydrashock.png` ,
            brand: `Altec Lansing`,
            model_name: `HYDRASHOCK` ,
            description: `From backyard BBQ's to summer pool parties, the HydraShock delivers massive bass and bold design together in one. With up to 20 hours of playtime the party doesn't have to stop. An IP67 EVERYTHING PROOF rating allows you to not fret a little splash or spontaneous rain-shower, the HydraShock can withstand the elements.` ,
            price:179.99 ,
            in_stock:true , 
            color: 'Black',
        },
        {
            image:`speakerImages/10HydraMini.png`,
            brand:`Altec Lansing` ,
            model_name: `Hydramini`,
            description:`The HydraMini EVERYTHING PROOF Speaker is packed with features that will prepare you for every adventure! A 6-hour battery life and carabineer clip allow you to enjoy and bring the tunes anywhere. Pair two HydraMini speakers together via true wireless pairing for double the sound!` ,
            price: 29.99,
            in_stock:false , 
            color: 'Red',
        },
    ]
    // await Speaker.deleteMany()
    await Speaker.insertMany(speakers)
    console.log('Created speakers!')
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()