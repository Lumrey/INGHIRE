import { Router, Request, Response } from 'express'
import { getExampleHandler } from '../controllers/exampleControllers';

const exampleRouter = Router()

exampleRouter.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('Api is active')
})

exampleRouter.get('/',getExampleHandler);

export default exampleRouter;