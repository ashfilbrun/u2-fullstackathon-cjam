const { model } = require('mongoose')
const HeadphoneSchema = require('./headphone')
const SpeakerSchema = require('./speaker')

const Headphone = model('Headphone', HeadphoneSchema)
const Speaker = model('Speaker', SpeakerSchema)

module.exports = {
    Headphone,
    Speaker,
}