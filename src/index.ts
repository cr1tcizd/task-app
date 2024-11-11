import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())

app.post('/api/contact', (req: Request, res: Response) => {
	const { name, email, message } = req.body

	console.log(`Received message from ${name} (${email}): ${message}`)

	res.status(200).json({ message: `Thank you for your interest, ${name}` })
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
