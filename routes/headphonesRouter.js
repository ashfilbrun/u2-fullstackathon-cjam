const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/headphoneController`)

Router.get(`/`, controller.getHeadphones)
Router.get(`/:id`, controller.getHeadphonesById)

module.exports = Router