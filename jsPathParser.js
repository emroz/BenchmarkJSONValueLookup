/**
 * Created by z082708 on 1/7/15.
 */
var logger = require('./logger').logger;
var JSPath = require('jspath');

var JsPathParser = {
    parse: function(err, productResponse){
        var start = process.hrtime();
        logger.info('************ Started parsing using JsPath');

        var result = {
            id: JSPath.apply('.product_composite_response.items[0].identifier{.id_type === "DPCI"}.id', productResponse)[0]
        }

        logger.info(result);

        result = {
            desc: JSPath.apply('.product_composite_response.items[0].alternate_description{.type === "DETL"}.value', productResponse)[0]
        }

        logger.info(result);

        result = {
            primary_image: JSPath.apply('.product_composite_response.items[0].image.internal_primary_image_url', productResponse)[0]
        }

        logger.info(result);

        result = {
            alternate_image: JSPath.apply('.product_composite_response.items[0].image.internal_alt_image_url', productResponse)
        }

        logger.info(result);

        var diff = process.hrtime(start);
        var ms = diff[0] * 1e3 + diff[1] * 1e-6;
        logger.info('************ JsPath processing time is %d ms',  ms);

    }
}

module.exports = JsPathParser;
