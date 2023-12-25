const db = require('../models');
const jwt = require('jsonwebtoken');
const { Question, UserScore } = db;
const {readPayload} = require('../helper/jwt');

exports.getQuestion = async (req, res) => {
  try {
    const totalQuestions = 100; // Total jumlah soal yang tersedia
    const selectedQuestions = 30; // Jumlah soal yang ingin ditampilkan

    // Ambil 30 soal secara acak dari total 100 soal yang tersedia
    const randomQuestions = await Question.findAll({
      order: db.Sequelize.literal('random()'),
      limit: selectedQuestions,
    });

    if (!randomQuestions || randomQuestions.length === 0) {
      return res.status(404).json({ message: 'Questions not found' });
    }

    const startTime = new Date();
    const duration = 1800; // Durasi ujian dalam detik (1800 detik = 30 menit)

    // Simpan waktu mulai dan durasi ujian ke setiap soal yang dipilih
    randomQuestions.forEach((question) => {
      question.startTime = startTime;
      question.duration = duration;
    });

    // Simpan perubahan ke dalam basis data
    await Promise.all(randomQuestions.map((question) => question.save()));

    res.json({ questions: randomQuestions, startTime, duration });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.submitAnswer = async (req, res) => {
  try {
    const { questionId, selectedChoice } = req.body;

    const token = req.headers.authorization.split(' ')[1]; // Pastikan token ada di header dengan format yang benar

    const decodedToken = readPayload(token); // Validasi dan dekripsi token jika diperlukan
    const userId = decodedToken.id; // Ambil userID dari token

    const question = await Question.findByPk(questionId); // Cari pertanyaan berdasarkan ID

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const isCorrect = question.correctAnswer.includes(selectedChoice); // Verifikasi jawaban benar atau salah

    if (isCorrect) {
      let userScore = await UserScore.findOne({ where: { user_id: userId } });

      if (userScore === null) {
        userScore = await UserScore.create({ user_id: userId, score: 0 });
      }

      userScore.score += 1; // Tambahkan skor jika jawaban benar
      await userScore.save();
    }

    res.json({ message: 'Answer processed successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.showUserScore = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    // Extract user data from token payload
    const userData = readPayload(token);

    // Get user ID from token
    const userId = userData.id;

    const userScore = await UserScore.findOne({
      where: { user_id: userId },
      attributes: ['score'], // Ambil hanya kolom skor
    });

    if (!userScore) {
      return res.status(404).json({ error: 'Skor pengguna tidak ditemukan' });
    }

    res.json({ userScore });
  } catch (error) {
    console.error('Gagal menampilkan skor pengguna:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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
