import mongoose from 'mongoose';
import logger from './logger';
import env from './env';

export const mongoDbConnection = mongoose.connect(env.MONGO_URI);

mongoose.connection.on('connected', () => {
  logger.info(`MongoDB connection open to ${env.MONGO_URI}`)
})

mongoose.connection.on('error', err => {
  logger.error(`MongoDB connection error:  ${err}`)
})

mongoose.connection.on('disconnected', () => {
  logger.info('MongoDB connection disconnected')
})
