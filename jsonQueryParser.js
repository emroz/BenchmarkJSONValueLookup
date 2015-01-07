/**
 * Created by z082708 on 1/7/15.
 */

/**
 * Created by z082708 on 1/7/15.
 */
var logger = require('./logger').logger;
var jsonQuery = require('json-query');

var JsonQueryParser = {
    parse: function(err, productResponse){
        var start = process.hrtime();
        logger.info('************ Started parsing using Json-query');

        var result = jsonQuery('product_composite_response.items[0].identifier[id_type=DPCI].id', {
            data: productResponse
        });
        logger.info(result.value);

        result = jsonQuery('product_composite_response.items[0].alternate_description[type=DETL].value', {
            data: productResponse
        });
        logger.info(result.value);

        result = jsonQuery('product_composite_response.items[0].image[external_primary_image_url]', {
            data: productResponse
        });
        logger.info(result.value);

        result = jsonQuery('product_composite_response.items[0].image[external_alt_image_url]', {
            data: productResponse
        });
        logger.info(result.value);

        var diff = process.hrtime(start);
        var ms = diff[0] * 1e3 + diff[1] * 1e-6;
        logger.info('************ Json-query processing time is %d ms',  ms);

    }
}

module.exports = JsonQueryParser;

