const { default: mongoose } = require('mongoose')
const { Schema } = require('mongoose')

const guildSchema = new Schema({
  guildid: {
    type: String,
    unique: true
  },
  guildname: {
    type: String,
    unique: true
  },
  channelid: {
    type: Array,
    default: true
  }
}, { timestamps: true })

const guild = new mongoose.model('guild', guildSchema, 'guild')
module.exports = guild
