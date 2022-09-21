import Joi from 'joi'

const exampleSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
})

export default exampleSchema;