const express = require('express');
const router = express.Router();
const doubtController = require('../controllers/doubtController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', doubtController.getAllDoubts);
router.get('/:id', doubtController.getDoubtById);
router.post('/', protect, doubtController.createDoubt);
router.put('/:id/answer', protect, authorize('admin'), doubtController.answerDoubt);
router.put('/:id/close', protect, doubtController.closeDoubt);
router.put('/:id/upvote', protect, doubtController.upvoteDoubt);

module.exports = router;
