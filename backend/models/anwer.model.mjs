import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  submissionId: Number,
  questionIndex: Number,
  answer: String,
  other: Boolean,
  otherField: String,
  survey: String
});

const Answer = mongoose.model('Answer', answerSchema);

export default Answer;
