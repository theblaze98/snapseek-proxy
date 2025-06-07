import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import v1Routes from './routes/v1/index.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', v1Routes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

