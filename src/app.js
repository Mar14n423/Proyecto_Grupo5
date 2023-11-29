import express from 'express'
import config from './config'

import patientsRoutes from './routes/patients.routes'
import medicDateRoutes from './routes/medicdate.routes'

const app = express()

let port = 6000;

//settings
app.set('port', config.port)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(patientsRoutes)
app.use(medicDateRoutes)

export default app