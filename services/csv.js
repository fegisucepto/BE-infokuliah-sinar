/* eslint-disable import/prefer-default-export */
const OPTIONS_READ_CSV = {
  delimiter: ',',
  encoding: 'utf8',
  log: true,
  parse: true,
  stream: false,
};

function getErrorReadCSV(error) {
  if (error.fields) {
    return { message: `Column '${Object.keys(error.fields)}' duplicate data` };
  }
  return { message: 'Dokumen tidak sesuai template' };
}

module.exports = {
  OPTIONS_READ_CSV,
  getErrorReadCSV,
};
