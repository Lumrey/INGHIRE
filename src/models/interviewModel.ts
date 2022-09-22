import mongoose, { Schema } from "mongoose";

const interviewSchema = new Schema(
  {
    candidateId: {
      type: String,
      required: [true, "CandidateID cannot be blank"],
      lowercase: true,
      trim: true,
    },

    interviewer: {
      type: [String],
      required: true,
      lowercase: true,
      trim: true,
    },
    hr: {
      type: [String],
      required: true,
      lowercase: true,
      trim: true,
    },
    organizationId: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    interviewDate: {
      type: String,
    },
    interviewTime: {
      type: String,
      required: true,
      trim: true,
    },
    feedback: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
interviewSchema.pre("find", function () {
  this.where({ isDeleted: { $ne: true } });
});

const interviewModel = mongoose.model("interview", interviewSchema);

export default interviewModel;
