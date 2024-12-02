import 'dotenv/config'
import express from 'express'
import userRouter from './routes/user.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send({ send: 'Hola Mundo' })
})

app.use('/api/v1/user', userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server up http://localhost:${PORT}`))
