const { Headphone } = require(`../models`)
const headphoneSchema = require(`../models/headphone`)

const getHeadphones = async (req, res) => {
    const headphone = await Headphone.find({})
    res.json(headphone)
}

const getHeadphonesById = async (req, res) => {
    try {
        const { id } = req.params
        const headphone = await Headphone.findById(id)
        if(!headphone) throw Error(`headphone not found`)
        res.json(headphone)
    } catch (e){
        console.log(e)
        res.send(`headphone not found`)
    }
}

module.exports = {
    getHeadphones,
    getHeadphonesById
}