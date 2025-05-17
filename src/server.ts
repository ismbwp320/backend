import express, { Request, Response } from 'express';
import { PORT } from '@config/index';
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Page!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})