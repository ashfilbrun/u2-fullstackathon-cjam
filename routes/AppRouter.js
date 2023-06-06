const express = require('express')
const Router = express.Router()
const HeadphoneRouter = require('./headphoneRouter')
const SpeakerRouter = require('./speakerRouter')

Router.use(`/headphones`, HeadphoneRouter)
Router.use(`/speakers`, SpeakerRouter)

module.exports = Router