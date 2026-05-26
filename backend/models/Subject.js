const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide subject name'],
      enum: ['Mathematics', 'Science', 'SST', 'English', 'Hindi'],
    },
    description: String,
    chapters: [
      {
        id: mongoose.Schema.Types.ObjectId,
        name: String,
        videoUrl: String,
        notes: String,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Subject', subjectSchema);
