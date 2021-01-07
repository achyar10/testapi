import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import routes from './routes'
import { db } from './configs/Database'
require('dotenv').config()

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(morgan('combined'))
morgan.token('date', function () {
    let p = new Date().toString().replace(/[A-Z]{3}\+/, '+').split(/ /);
    return (p[2] + '/' + p[1] + '/' + p[3] + ':' + p[4] + ' ' + p[5]);
})
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use('/', routes)
app.get('/', (req, res) => {
    return res.send('its works')
})
app.use((req, res) => {
    return res.status(404).json('Page not found!')
})
db()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('server running on port 3000'))