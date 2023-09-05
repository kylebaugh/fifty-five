import express from 'express'
import cors from 'cors'
import { Bird } from './src/model.js'


const app = express()

app.use(express.json())
app.use(cors())

//routes

app.post('/newBird', async (req, res) => {
    const {name} = req.body
    const myBird = await Bird.create({
        name
    })

    console.log(myBird)
    res.status(200).send(myBird)
})

app.listen(5678, () => console.log('server running on post 5678'))