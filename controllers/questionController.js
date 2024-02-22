const db = require('../models');
const jwt = require('jsonwebtoken');
const { Question, UserScore } = db;
const { readPayload } = require('../helper/jwt');


exports.ListQuestion = async (req, res, next) => {
  try {
    const questionList = await Question.findAll({
    });
    res.status(200).json({
      statusCode: 200,
      data: questionList,
    });
  } catch (err) {
    next(err);
  }
}

exports.getQuestion = async (req, res) => {
  try {
    const totalQuestions = 100; // Total jumlah soal yang tersedia
    const selectedQuestions = 10; // Jumlah soal yang ingin ditampilkan

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

// exports.submitAnswer = async (req, res) => {
//   try {
//     const { questionId, selectedChoice } = req.body;

//     const token = req.headers.authorization.split(' ')[1]; // Pastikan token ada di header dengan format yang benar

//     const decodedToken = readPayload(token); // Validasi dan dekripsi token jika diperlukan
//     const userId = decodedToken.id; // Ambil userID dari token

//     const question = await Question.findByPk(questionId); // Cari pertanyaan berdasarkan ID

//     if (!question) {
//       return res.status(404).json({ message: 'Question not found' });
//     }

//     const isCorrect = question.correctAnswer.includes(selectedChoice); // Verifikasi jawaban benar atau salah

//     if (isCorrect) {
//       let userScore = await UserScore.findOne({ where: { user_id: userId } });

//       if (userScore === null) {
//         userScore = await UserScore.create({ user_id: userId, score: 0 });
//       }

//       userScore.score = parseInt(userScore.score) + 1; // Tambahkan skor jika jawaban benar
//       await userScore.save();
//     }

//     res.json({ message: 'Answer processed successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


exports.submitAnswer = async (req, res) => {
  try {
    const { answers } = req.body; // Menggunakan array answers untuk menerima jawaban serentak
    const token = req.headers.authorization.split(' ')[1];

    const decodedToken = readPayload(token);
    const userId = decodedToken.id;

    const questions = await Question.findAll({ where: { id: answers.map(answer => answer.questionId) } }); // Ambil pertanyaan berdasarkan ID

    if (!questions || questions.length !== answers.length) {
      return res.status(404).json({ message: 'One or more questions not found' });
    }

    let totalScore = 0;

    for (let i = 0; i < answers.length; i++) {
      const { questionId, selectedChoice } = answers[i];
      const question = questions.find(q => q.id === questionId);

      if (!question) {
        return res.status(404).json({ message: `Question with ID ${questionId} not found` });
      }

      const isCorrect = question.correctAnswer.includes(selectedChoice);

      if (isCorrect) {
        let userScore = await UserScore.findOne({ where: { user_id: userId } });

        if (userScore === null) {
          userScore = await UserScore.create({ user_id: userId, score: 0 });
        }

        userScore.score = parseInt(userScore.score) + 1; // Tambahkan skor jika jawaban benar
        await userScore.save();
        totalScore = userScore.score; 
      }
    }

    res.json({ message: 'Answers processed successfully', totalScore });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAnswer = async (req, res) => {
  try {
    const { questionId, selectedChoice } = req.body;

    const token = req.headers.authorization.split(' ')[1]; // Pastikan token ada di header dengan format yang benar

    const decodedToken = readPayload(token); // Validasi dan dekripsi token jika diperlukan
    const userId = decodedToken.id; // Ambil userID dari token

    const previousAnswer = await UserAnswer.findOne({ where: { user_id: userId, question_id: questionId } });

    const question = await Question.findByPk(questionId); // Cari pertanyaan berdasarkan ID

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const isCorrect = question.correctAnswer.includes(selectedChoice); // Verifikasi jawaban benar atau salah

    if (previousAnswer) {
      const previousAnswerIsCorrect = question.correctAnswer.includes(previousAnswer.selectedChoice);

      if (previousAnswerIsCorrect && !isCorrect) {
        // Jika jawaban sebelumnya benar dan yang baru salah, kurangi skor
        let userScore = await UserScore.findOne({ where: { user_id: userId } });

        if (!userScore) {
          userScore = await UserScore.create({ user_id: userId, score: 0 });
        }

        userScore.score = parseInt(userScore.score) - 1; // Kurangi skor jika jawaban berubah dari benar menjadi salah
        await userScore.save();
      } else if (!previousAnswerIsCorrect && isCorrect) {
        // Jika jawaban sebelumnya salah dan yang baru benar, tambahkan skor
        let userScore = await UserScore.findOne({ where: { user_id: userId } });

        if (!userScore) {
          userScore = await UserScore.create({ user_id: userId, score: 0 });
        }

        userScore.score = parseInt(userScore.score) + 1; // Tambahkan skor jika jawaban berubah dari salah menjadi benar
        await userScore.save();
      }
    } else {
      // Jika tidak ada jawaban sebelumnya, tetapi jawaban saat ini benar, tambahkan skor
      if (isCorrect) {
        let userScore = await UserScore.findOne({ where: { user_id: userId } });

        if (!userScore) {
          userScore = await UserScore.create({ user_id: userId, score: 0 });
        }

        userScore.score = parseInt(userScore.score) + 1; // Tambahkan skor jika jawaban benar pada pertanyaan pertama kali dijawab
        await userScore.save();
      }
    }

    // Simpan jawaban saat ini dari pengguna untuk digunakan di masa depan
    await UserAnswer.create({ user_id: userId, question_id: questionId, selectedChoice });

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

exports.resetScore = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Token tidak tersedia' });
    }

    // Verifikasi dan dekode token untuk mendapatkan payload
    const decodedToken = readPayload(token);
    const userId = decodedToken.id; // Ambil userID dari token

    // Lanjutkan dengan logika reset skor
    const userScore = await UserScore.findOne({ where: { user_id: userId } });

    if (!userScore) {
      return res.status(404).json({ message: 'Skor pengguna tidak ditemukan' });
    }

    // Jika skor pengguna sudah ada, reset skor ke 0
    if (userScore.score !== undefined) {
      userScore.score = 0;

      // Simpan perubahan skor ke dalam database
      await userScore.save();

      return res.status(200).json({ message: 'Skor pengguna berhasil direset ke 0' });
    } else {
      return res.status(200).json({ message: 'Skor pengguna belum tersedia, tidak ada yang direset' });
    }
  } catch (error) {
    console.error('Error resetting score:', error);
    return res.status(401).json({ message: 'Token tidak valid atau tidak tersedia' });
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
