import {Schema, model, Document} from 'mongoose';

export interface IExample extends Document{
  email: string,
  age: number,
  password: string
}

const exampleSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: [true, "can't be blank"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)
exampleSchema.pre('find', function () {
  this.where({ isDeleted: { $ne: true } })
})

const ExampleModel = model<IExample>('Example', exampleSchema)

export default ExampleModel;