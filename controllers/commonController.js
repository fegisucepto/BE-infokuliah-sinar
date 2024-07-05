/* eslint-disable import/prefer-default-export */
const fs = require('fs').promises;
const models = require('../models');

const { sequelize } = models;

async function importData({ req, res, next, saveDataExcel, saveDataCsv }) {
  const t = await sequelize.transaction();
  let filePath = '';
  try {
    const { model, file, user } = req;
    const { filename } = file;
    const Model = models[model];

    let resSaveData;
    filePath = `./uploads/${filename}`;

    if (filename.includes('xlsx')) {
      resSaveData = await saveDataExcel({
        filePath,
        Model,
        t,
        user,
      });
    } else if (filename.includes('csv')) {
      resSaveData = await saveDataCsv({
        filePath,
        Model,
        t,
        user,
      });
    } else {
      await t.rollback();
      return res.status(422).json({ message: 'format file harus xlsx atau csv' });
    }
    // delete temporary file from multer
    fs.unlink(filePath);
    if (resSaveData !== true) {
      await t.rollback();
      return res.status(422).json(resSaveData);
    }
    await t.commit();
    return res.status(200).json({ message: 'Import data berhasil' });
  } catch (err) {
    fs.unlink(filePath);
    await t.rollback();
    return next(err);
  }
}

// async function deleteData({ Model, res, user, uuid, dataUpdate = {}, additionalResponse = {} }) {
//   const t = await sequelize.transaction();
//   try {
//     const body = {
//       ...dataUpdate,
//       deleted_by: user.id,
//     };

//     await Model.update(body, { where: { uuid }, transaction: t });
//     const data = await Model.destroy({ where: { uuid }, transaction: t });
//     if (!data) {
//       t.rollback();
//       return res.status(404).json({ message: 'Data tidak ditemukan' });
//     }
//     await t.commit();
//     return res.status(200).json({ message: 'Success delete data', ...additionalResponse });
//   } catch (error) {
//     await t.rollback();
//     return error;
//   }
// }

module.exports = {
  importData,
  // deleteData,
};
