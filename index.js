const express = require('express')
const userRouter = require('./router/users')
const app = express()
const port = 3000
const connectDB = require('./config/db')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => {
  res.send('Apa Kabar!')
})

app.use(userRouter)

connectDB()

app.listen(port, () => {
  console.log(`Sudah Terdengar di PORT: ${port}`)
})