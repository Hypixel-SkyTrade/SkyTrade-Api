/* eslint-disable no-unused-vars */
const { Router } = require('express')

//API
const addDiscordTrade = require('./API/addDiscordTrade')
const setDiscordChannel = require('./API/setDiscordChannel')
const checkDiscordChannel = require('./API/checkDiscordChannel')


const router = Router()

router.use('/api/addDiscordTrade', addDiscordTrade)
router.use('/api/checkDiscordChannelSet', setDiscordChannel)
router.use('/api/checkDiscordChannel', checkDiscordChannel)


router.get('*', (req, res) => {
  res.status(404).json(400)
})

module.exports = router
