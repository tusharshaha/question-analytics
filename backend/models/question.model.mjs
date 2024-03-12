import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
  {
    question: String,
    questionType: String,
    chartType: String,
    questionIndex: Number,
    survey: Number,
    questionText: Array,
    islibraryQuestion: Boolean,
    isHidden: Boolean,
    analysis: String,
    imgList: [String],
    otherOptions: [String]
  },
  {
    timestamps: true
  }
);

const Question = mongoose.model('Question', questionSchema);

export default Question;
