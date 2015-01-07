/**
 * Created by z082708 on 1/7/15.
 */
var logger = require('./logger').logger;
var JSONPath = require('JSONPath');

var JsonPathParser = {
    parse: function(err, productResponse){
        var start = process.hrtime();
        logger.info('************ Started parsing using JsonPath');

        var result = JSONPath.eval({json: productResponse}, '$...identifier[?(@.id_type=="DPCI")]');
        logger.info(result[0].id);

        result = JSONPath.eval({json: productResponse}, '$...alternate_description[?(@.type=="DETL")]');
        logger.info(result[0].value);

        result = JSONPath.eval({json: productResponse}, '$...image[external_primary_image_url]');
        logger.info(result);

        result = JSONPath.eval({json: productResponse}, '$...image[external_alt_image_url]');
        logger.info(result);

        var diff = process.hrtime(start);
        var ms = diff[0] * 1e3 + diff[1] * 1e-6;
        logger.info('************ JsonPath processing time is %d ms',  ms);

    }
}

module.exports = JsonPathParser;
