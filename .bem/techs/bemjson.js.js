var PATH = require('path'),

    environ = require('../environ'),

    BEMJSON_ROOT = environ.getLibPath('bem-json', 'i-bem/__json'),
    BEMJSON_CORE = PATH.join(BEMJSON_ROOT, 'i-bem__json.js');

exports.baseTechName = 'js';

exports.techMixin = {

    getBuildSuffixes : function() {
        return ['bemjson.js'];
    },

    getBuildResult : function(prefixes, suffix, outputDir, outputName) {

        var _this = this;
        return this.__base.apply(this, arguments).then(function(res) {
            res.unshift(_this.getBemjsonCore(outputDir));
            return res;
        });

    },

    getBemjsonCore : function(outputDir) {
        return this.getBuildResultChunk(PATH.relative(outputDir, BEMJSON_CORE));
    },

    getDependencies : function() {
        return ['bemdecl.js'];
    }

};
