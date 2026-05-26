const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', quizController.getAllQuizzes);
router.get('/:id', quizController.getQuizById);
router.post('/', protect, authorize('admin'), quizController.createQuiz);
router.put('/:id', protect, authorize('admin'), quizController.updateQuiz);
router.delete('/:id', protect, authorize('admin'), quizController.deleteQuiz);

module.exports = router;
