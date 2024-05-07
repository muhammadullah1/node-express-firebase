'use strict'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const router = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.get('/api/test', (req, res) => {
  res.status(200).send(`Welcome to API 1.0`)
})

app.use('/api', router)

app.use((req, res) => {
  return res.status(404).send({
    success: false,
    message: `Cannot ${req.method} ${req.url}`,
  })
})

// error handling
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  req.log.error(err)
  return res.status(err.status || 500).send({
    success: false,
    message: err.message,
    errors: err.errors,
  })
})
app.listen(config.port, () =>
  console.log('App is listening on url http://localhost:' + config.port)
)
