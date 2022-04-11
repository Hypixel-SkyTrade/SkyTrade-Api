const { Router } = require('express')
const controller = require('../../controllers/API/setDiscordChannel')

const router = Router()

router
  .route('/')
  .get(controller.getDiscordChannel)

module.exports = router
