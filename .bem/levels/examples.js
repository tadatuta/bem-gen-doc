var PATH = require('path'),
    environ = require('../environ'),

    join = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    PRJ_TECHS = resolve('../techs'),
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs');


exports.getTechs = function() {

    return require('bem').util.extend(require('./bundles.js').getTechs(), {
        'blocks'        : '',
        'bemjson.js'    : '',
        'title.txt'     : '',

        'bemhtml.js'    : join(BEMBL_TECHS, 'bemhtml'),
        'html'          : join(BEMBL_TECHS, 'html')
    });

};
