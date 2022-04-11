/* eslint-disable no-unused-vars */
const { Router } = require('express')

//API
const setDiscordChannel = require('./API/setDiscordChannel')
const checkDiscordChannelSet = require('./API/checkDiscordChannelSet')


const router = Router()

router.use('/api/setDiscordChannel', setDiscordChannel)
router.use('/api/checkDiscordChannelSet', checkDiscordChannelSet)


router.get('*', (req, res) => {
  res.status(404).json(400)
})

module.exports = router
