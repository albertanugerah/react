const express = require('express')
require('./services/passport')
require('./routes/authRoutes')

const app = express()


authRoutes(app)


// process.env.PORT heroku inject process.env
const PORT = process.env.PORT ||5000

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}/auth/google`)
})