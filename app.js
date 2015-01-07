/**
 * Created by z082708 on 1/7/15.
 */

var fs = require('fs');
var logger = require('./logger').logger;
var jsonPathParser = require('./jsonPathParser');
var jsonQueryParser = require('./jsonQueryParser');
var jsPathParser = require('./jsPathParser');


logger.info('BenchMark Test started');

//Read JSON response file
var file = __dirname + '/productV3Response.json';
fs.readFile(file, 'utf8', function(err, data){
   if(err) {
       logger.error('Error opening input file ' + err);
   }else{
       var productResponse = JSON.parse(data);
       //Call to parse JSON using JSONPath
       jsonPathParser.parse(null, productResponse);
       //Call to parse JSON using JSPATH
       jsPathParser.parse(null, productResponse);
       //Call to parse JSON using json-query
       jsonQueryParser.parse(null, productResponse);

   }

    logger.info('BenchMark Test ended');

});


