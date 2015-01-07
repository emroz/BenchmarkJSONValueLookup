/**
 * Created by z082708 on 1/7/15.
 */


var winston = require('winston');
var fs = require('fs');
var path = require('path');
var os = require('os');

var log_dir = path.join(__dirname, './' + 'logs');
var env = process.env.NODE_ENV || 'development';
var pid = process.pid;
var hostname = os.hostname();


if ( !fs.existsSync(log_dir ) ) {
    fs.mkdirSync( log_dir );
}

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: env === 'development' ? 'debug' : 'info',
            filename: log_dir + '/logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 1024 * 1024 * 10, // 10MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});


module.exports.logger = logger;

