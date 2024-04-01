const XLSX = require('xlsx');
const path = require('path');

module.exports = (on, config) => {

    on('task', {
        readExcelFile(filePath) {
          const absolutePath = path.resolve(__dirname, '..', '..', filePath)
          const workbook = XLSX.readFile(absolutePath)
          const sheetName = workbook.SheetNames[0]
          const sheet = workbook.Sheets[sheetName]
          return XLSX.utils.sheet_to_json(sheet)
        }
      });
  }