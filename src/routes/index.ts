import { Application, Request, Response } from 'express'
import exampleRouter from './exampleRoute'

const routesSetup = (app: Application) => {
  app.get('/', (_req: Request, res: Response) => res.send('Welcome - Hiring Management API!'))
  app.use('/example', exampleRouter)
}

export default routesSetup;
