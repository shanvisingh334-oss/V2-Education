const Doubt = require('../models/Doubt');

exports.getAllDoubts = async (req, res, next) => {
  try {
    const { status, subject } = req.query;
    let query = {};

    if (status) query.status = status;
    if (subject) query.subject = subject;

    const doubts = await Doubt.find(query)
      .populate('author', 'name email')
      .populate('answeredBy', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: doubts.length,
      data: doubts,
    });
  } catch (error) {
    next(error);
  }
};

exports.getDoubtById = async (req, res, next) => {
  try {
    const doubt = await Doubt.findById(req.params.id)
      .populate('author', 'name email')
      .populate('answeredBy', 'name email');

    if (!doubt) {
      return res.status(404).json({ message: 'Doubt not found' });
    }

    res.status(200).json({
      success: true,
      data: doubt,
    });
  } catch (error) {
    next(error);
  }
};

exports.createDoubt = async (req, res, next) => {
  try {
    req.body.author = req.user.id;
    const doubt = await Doubt.create(req.body);

    const populatedDoubt = await Doubt.findById(doubt._id)
      .populate('author', 'name email');

    res.status(201).json({
      success: true,
      data: populatedDoubt,
    });
  } catch (error) {
    next(error);
  }
};

exports.answerDoubt = async (req, res, next) => {
  try {
    const { answer } = req.body;

    if (!answer) {
      return res.status(400).json({ message: 'Please provide an answer' });
    }

    let doubt = await Doubt.findById(req.params.id);

    if (!doubt) {
      return res.status(404).json({ message: 'Doubt not found' });
    }

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Only admins can answer doubts' });
    }

    doubt = await Doubt.findByIdAndUpdate(
      req.params.id,
      {
        answer,
        status: 'answered',
        answeredBy: req.user.id,
      },
      { new: true }
    ).populate('author', 'name email').populate('answeredBy', 'name email');

    res.status(200).json({
      success: true,
      data: doubt,
    });
  } catch (error) {
    next(error);
  }
};

exports.closeDoubt = async (req, res, next) => {
  try {
    let doubt = await Doubt.findById(req.params.id);

    if (!doubt) {
      return res.status(404).json({ message: 'Doubt not found' });
    }

    if (doubt.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to close this doubt' });
    }

    doubt = await Doubt.findByIdAndUpdate(
      req.params.id,
      { status: 'closed' },
      { new: true }
    ).populate('author', 'name email').populate('answeredBy', 'name email');

    res.status(200).json({
      success: true,
      data: doubt,
    });
  } catch (error) {
    next(error);
  }
};

exports.upvoteDoubt = async (req, res, next) => {
  try {
    let doubt = await Doubt.findById(req.params.id);

    if (!doubt) {
      return res.status(404).json({ message: 'Doubt not found' });
    }

    if (doubt.upvotes.includes(req.user.id)) {
      doubt.upvotes = doubt.upvotes.filter(id => id.toString() !== req.user.id);
    } else {
      doubt.upvotes.push(req.user.id);
    }

    await doubt.save();

    res.status(200).json({
      success: true,
      data: doubt,
    });
  } catch (error) {
    next(error);
  }
};
