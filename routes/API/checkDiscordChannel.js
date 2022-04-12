const { Router } = require('express')
const controller = require('../../controllers/API/checkDiscordChannel')

const router = Router()

router
  .route('/')
  .get(controller.getCheckDiscordChannel)

module.exports = router
