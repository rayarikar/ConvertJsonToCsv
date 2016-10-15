/**
 * Created by rohanrayarikar on 10/8/16.
 */
var path = require('path');
var exportToExcel = require(path.join(__dirname, 'lib/convertToCsv.js'));

module.exports = exportToExcel;