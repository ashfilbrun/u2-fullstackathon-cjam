const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/speakerController`)

Router.get(`/`, controller.getSpeakers)
Router.get(`/:id`, controller.getSpeakersById)

module.exports = Router