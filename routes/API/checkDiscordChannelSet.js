const { Router } = require('express')
const controller = require('../../controllers/API/checkDiscordChannelSet')

const router = Router()

router
  .route('/')
  .get(controller.getCheckDiscordChannelSet)

module.exports = router
