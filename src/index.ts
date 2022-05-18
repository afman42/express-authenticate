import { AppDataSource } from "./data-source"
import { Application } from 'express'
import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { AuthRouter } from "./router"

dotenv.config()

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(morgan('dev'))
// app.use(trim)
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}))

app.use('/auth',AuthRouter)

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`)

  try {
    AppDataSource.initialize();
    console.log('Database connected!')
  } catch (err) {
    console.log(err)
  }
})

