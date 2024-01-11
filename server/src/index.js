import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.URL)
.then(()=> console.log('connected to db'))
.catch(()=> console.log('Error connecting db'))

app.listen(3000, console.log('Server started'))