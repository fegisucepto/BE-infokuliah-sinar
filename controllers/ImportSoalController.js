const crypto = require('crypto');
const readCsvFile = require('csvdata');
const readXlsxFile = require('read-excel-file/node');
const models = require('../models');
const { checkDataExcel, getErrorReadExcel, SCHEMA_IMPORT_SOAL } = require('../services/readExcel');
const { getErrorReadCSV, OPTIONS_READ_CSV } = require('../services/csv');
const { importData } = require('./commonController');

const { Question } = models;

const getSoal = async (idSoal) => {
  const result = await Question.findAll({ where: { id: idSoal }, attributes: ['id'] });
  const map = new Map();
  for (const item of result) {
    map.set(item.id);
  }

  return map;
};

const saveDataExcel = async ({ filePath, Model, t }) => {
  let message;
  const data = [];
  const schema = SCHEMA_IMPORT_SOAL;
  await readXlsxFile(filePath, { schema })
    .then(async (rows) => {
      // check rows kosong atau tidak
      const resCheckDataExcel = await checkDataExcel(rows);
      if (resCheckDataExcel !== true) {
        message = resCheckDataExcel;
        return message;
      }
      const SoalMap = await getSoal(rows.rows.map((item) => item.id));
      // re map data and find id from id region
      for (const item of rows.rows) {
        data.push({
          ...item,
          id: SoalMap.get(item.id),
        });
      }
      // insert data
      await Model.bulkCreate(data, { transaction: t });
      message = true;
      return message;
    })
    .catch((err) => {
      message = getErrorReadExcel(err);
      return message;
    });
  return message;
};

const saveDataCsv = async ({ filePath, Model, t }) => {
  try {
    const data = [];
    const options = OPTIONS_READ_CSV;
    const dataCsv = await readCsvFile.load(filePath, options);
    if (!dataCsv[0]) {
      return { message: 'Dokumen tidak sesuai template' };
    }

    const RegionMap = await getRegion(dataCsv.map((item) => item['Region ID']));

    for (const item of dataCsv) {
      data.push({
        uuid: crypto.randomUUID(),
        code: item.Code,
        region_id: RegionMap.get(item['Region ID']),
        name: item.Name,
      });
    }
    await Model.bulkCreate(data, { transaction: t });
    return true;
  } catch (err) {
    return getErrorReadCSV(err);
  }
};

// export async function downloadExample(req, res, next) {
//   try {
//     const { type } = req.query;
//     let file = './public/TemplateSalesOffice.xlsx';
//     if (type === 'csv') file = './public/TemplateSalesOffice.csv';
//     return res.download(file); // Set disposition and send it.
//   } catch (err) {
//     return next(err);
//   }
// }

async function importSoal(req, res, next) {
  return importData({
    req,
    res,
    next,
    saveDataExcel,
    saveDataCsv,
  });
}

module.exports = { importSoal };
