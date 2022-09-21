import Example  from '../models/exampleModel'

export const getExample = async () => {
  const example = await Example.find()
  return example
}
