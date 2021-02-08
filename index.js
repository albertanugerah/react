const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({bye :'buddy'})
})

// process.env.PORT heroku inject process.env
const PORT = process.env.PORT ||5000

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})