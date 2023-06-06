const { Speaker } = require(`../models`)
const speakerSchema = require(`../models/speaker`)

const getSpeakers = async (req, res) => {
    const speakers = await Speaker.find({})
    res.json(speakers)
}

const getSpeakersById = async (req, res) => {
    try {
        const { id } = req.params
        const speaker = await Speaker.findById(id)
        if(!speaker) throw Error(`speaker not found`)
        res.json(speaker)
    } catch (e){
        console.log(e)
        res.send(`speaker not found`)
    }
}

module.exports = {
    getSpeakers,
    getSpeakersById
}