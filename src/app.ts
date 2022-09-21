import express, { Application } from 'express'
import cors from 'cors'
import routesSetup from './routes/index'

const configureExpress = (): Application => {
  const app: Application = express()

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  routesSetup(app)

  return app
}

export default configureExpress
