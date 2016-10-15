# Export-to-Excel
This is an open-source library that you can use to export json data to a flat csv which can be opened directly by excel. This library does not endorse Excel as a default app to open a csv file.

## Installation 
```bash
npm install export-to-excel
```

## Usage
The library offers support for converting two types of json data into csv. The usages for both types, array of arrays and array of objects, is shown below.

###Usage 1- Array of Arrays

```javascript
var exportToExcel = require('export-to-excel');
var arrayOfArraysCsv = exportToExcel.exportArrayOfArrays(inputJson);
```
#####Sample inputJson: 
[["Column 1", "Column 2"], ["Row1Column1", "Row1Column2"], ["Row2Column1", "Row2Column2"]]

###Usage 2- Array of Objects

```javascript
var exportToExcel = require('export-to-excel');
var arrayOfObjectsCsv = exportArrayOfObjects(inputJson, columnDefinitionArray);
```

#####Sample inputJson: 
[{"Column 1" : "Row1Column1", "Column 2" : "Row1Column2"}, 
{"Column 1" : "Row2Column1", "Column 2" : "Row2Column2"}]

#####Sample ColumnDefinitionArray: 
["Column 1", "Column 2"]

