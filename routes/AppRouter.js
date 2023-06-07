const express = require('express')
const Router = express.Router()
const HeadphoneRouter = require('./headphonesRouter')
const SpeakerRouter = require('./speakersRouter')

Router.use(`/headphones`, HeadphoneRouter)
Router.use(`/speakers`, SpeakerRouter)

module.exports = Router