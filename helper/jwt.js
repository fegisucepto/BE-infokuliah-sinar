"use strict";

const jwt = require("jsonwebtoken");
const KEY = process.env.KEY; // Pastikan variabel KEY telah diatur dalam variabel lingkungan

const addToken = (data) => {
  try {
    return jwt.sign(data, KEY);
  } catch (error) {
    throw new Error('Gagal menambahkan token');
  }
};

const readPayload = (token) => {
  try {
    return jwt.verify(token, KEY);
  } catch (error) {
    throw new Error('Gagal membaca payload dari token');
  }
};

module.exports = {
  addToken,
  readPayload,
};
