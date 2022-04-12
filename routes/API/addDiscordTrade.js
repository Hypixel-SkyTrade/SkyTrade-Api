const { Router } = require('express')
const controller = require('../../controllers/API/addDiscordTrade')

const router = Router()

router
  .route('/')
  .get(controller.getAddDiscordTrade)

module.exports = router
