const db = require('../models');
const { Question } = db;

exports.getQuestion = async (req, res) => {
  try {
    const randomQuestion = await Question.findOne({
      order: db.Sequelize.literal('random()'),
    });

    if (!randomQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const startTime = new Date();
    const duration = 100; // Durasi ujian dalam detik (1800 detik = 30 menit)

    randomQuestion.startTime = startTime;
    randomQuestion.duration = duration;
    await randomQuestion.save();

    res.json({ question: randomQuestion, startTime, duration });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.submitAnswer = async (req, res) => {
  try {
    const { questionId, selectedChoice } = req.body;

    const question = await Question.findByPk(questionId);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Simpan jawaban yang dipilih
    question.selectedAnswer = selectedChoice;
    await question.save();

    res.json({ message: 'Answer saved successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRemainingTime = async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.id);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const { startTime, duration } = question;
    const now = new Date();
    const elapsedSeconds = Math.floor((now - startTime) / 1000);
    const remainingTime = Math.max(duration - elapsedSeconds, 0);

    res.json({ remainingTime });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
