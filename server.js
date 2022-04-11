if (process.env.NODE !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')
const routes = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(routes)
const port = process.env.PORT || 5000
app.listen(port, async () => {
  await mongoose.connect(process.env.MONGO_SECRET)
  console.log('Server running at port', port)
})
