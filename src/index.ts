import cors from 'cors'
import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT: string = process.env.PORT || '3000'

app.get('/', (_req, res) => {
  res.send('Encuadrado API!')
})

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const startServer = (port: string): void => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  })
}

startServer(PORT)