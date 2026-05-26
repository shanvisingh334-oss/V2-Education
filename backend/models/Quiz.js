const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
      enum: ['Mathematics', 'Science', 'SST', 'English', 'Hindi'],
    },
    chapter: String,
    title: {
      type: String,
      required: true,
    },
    description: String,
    questions: [
      {
        question: String,
        options: [String],
        correctAnswer: Number,
        explanation: String,
      },
    ],
    totalQuestions: Number,
    totalMarks: Number,
    duration: Number, // in minutes
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Quiz', quizSchema);
