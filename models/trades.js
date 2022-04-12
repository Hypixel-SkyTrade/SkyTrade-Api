const { default: mongoose } = require('mongoose')
const { Schema } = require('mongoose')

const tradesSchema = new Schema({
  traderName: {
    type: String,
    unique: true
  },
  traderId: {
    type: String,
    unique: true
  },
  postContent: {
    type: Array,
  },
  postGuild: {
    type: String,
  }
}, { timestamps: true })

const trades = new mongoose.model('trades', tradesSchema, 'trades')
module.exports = trades
