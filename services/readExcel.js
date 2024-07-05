/* eslint-disable import/prefer-default-export */

const OPTION_STRING = {
  type: String,
};

const OPTION_STRING_MANDATORY = {
  type: String,
  required: true,
};

const OPTION_DATE_MANDATORY = {
  type: Date,
  required: true,
};

module.exports = {
  SCHEMA_IMPORT_SOAL: {
    Soal: {
      prop: 'question',
      ...OPTION_STRING_MANDATORY,
    },
    'Pilihan Jawaban': {
      prop: 'choices',
      ...OPTION_STRING_MANDATORY,
    },
    Jawaban: {
      prop: 'correctAnswer',
      ...OPTION_STRING_MANDATORY,
    },
  },
};

// export const SCHEMA_IMPORT_INVOICE = {
//   'Delivery Number': {
//     prop: 'delivery_number',
//     ...OPTION_STRING_MANDATORY,
//   },
//   ...INVOICE_NUMBER,
//   'Client Invoice Number': {
//     prop: 'client_invoice_number',
//     ...OPTION_STRING,
//   },
//   ...INVOICE_DATE,
//   'TOP ID': {
//     prop: 'top_id',
//     ...OPTION_STRING_MANDATORY,
//   },
//   ...INVOICE_VALUE,
//   'PO Date': {
//     prop: 'po_date',
//     ...OPTION_DATE_MANDATORY,
//   },
//   'PPN/Tax Value (SAP)': {
//     prop: 'tax_invoice_value_sap',
//     ...OPTION_STRING,
//   },
//   'PPN/Tax Value (WEB)': {
//     prop: 'tax_invoice_value',
//     ...OPTION_STRING,
//   },
//   'Customer ID': {
//     prop: 'customer_id',
//     ...OPTION_STRING_MANDATORY,
//   },
//   'Customer Name': {
//     prop: 'customer',
//     ...OPTION_STRING_MANDATORY,
//   },
//   ...CLIENT,
//   'Sales Office ID': {
//     prop: 'sales_office_id',
//     ...OPTION_STRING_MANDATORY,
//   },
//   'Storage Location ID': {
//     prop: 'storage_location_id',
//     ...OPTION_STRING_MANDATORY,
//   },
//   ...COLLECTOR_NAME,
//   ...PO_SO_DO_NUMBER,
//   'Sales Organization ID': {
//     prop: 'sales_organization_id',
//     ...OPTION_STRING_MANDATORY,
//   },
//   'Distribution Channel ID': {
//     prop: 'distribution_channel_id',
//     ...OPTION_STRING_MANDATORY,
//   },
// };

// export const SCHEMA_IMPORT_SALES_OFFICE = {
//   Code: {
//     prop: 'code',
//     ...OPTION_STRING_MANDATORY,
//   },
//   'Region ID': {
//     prop: 'region_id',
//     ...OPTION_STRING_MANDATORY,
//   },
//   Name: {
//     prop: 'name',
//     ...OPTION_STRING_MANDATORY,
//   },
// };

// export const SCHEMA_IMPORT_STORAGE_LOCATION = {
//   'Storage Location Code': {
//     prop: 'code',
//     ...OPTION_STRING_MANDATORY,
//   },
//   'Storage Location Name': {
//     prop: 'name',
//     ...OPTION_STRING_MANDATORY,
//   },
// };

async function checkDataExcel(rows) {
  // check rows kosong atau tidak
  const errors = {};
  if (!rows.rows[0]) {
    return { message: 'Dokumen tidak sesuai template' };
  }
  if (rows.errors[0]) {
    await rows.errors.forEach((item) => {
      errors[item.column] = `${item.column} ${item.error}`;
    });
    return { message: 'Dokumen tidak sesuai template', errors };
  }
  return true;
}

function getErrorReadExcel(err) {
  let message = '';
  if (err?.fields) {
    if (err?.fields[0]) message = `'${err?.fields[0]}' tidak ditemukan`;
  }
  if (err?.errors !== undefined) message = `'${err.errors[0].path}' duplicate data`;
  if (err?.original?.sqlMessage?.includes(" doesn't have a default value")) {
    message = `Data ${err?.original?.sqlMessage.replace('Field ', '').replace(" doesn't have a default value", '')} tidak ditemukan di database`;
  }
  if (err?.original?.sqlMessage?.includes(' cannot be null')) {
    message = `Data ${err?.original?.sqlMessage.replace('Column ', '').replace(' cannot be null', '')} tidak ditemukan di database`;
  }
  if (!message) message = 'Dokumen tidak sesuai template nie.';

  return { message };
}

module.exports = {
  checkDataExcel,
  getErrorReadExcel,
};
