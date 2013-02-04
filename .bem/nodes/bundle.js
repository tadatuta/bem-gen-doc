/**
 * @module nodes/bundle
 */

var PATH = require('path'),
    BEM = require('bem'),
    registry = require('bem/lib/nodesregistry'),
    BundleNode = require('bem/lib/nodes/bundle').BundleNodeName,

    environ = require('../environ'),

    U = BEM.util,
    join = PATH.join,

    BundleNodeName = exports.BundleNodeName = 'MachineBundleNode';


/** @exports MachineBundleNode */
Object.defineProperty(exports, BundleNodeName, {
    'get' : function() {
        return registry.getNodeClass(BundleNodeName);
    }
});


registry.decl(BundleNodeName, BundleNode, {

    __constructor : function(o) {
        this.__base.apply(this, arguments);
    },

    getTechs : function() {

        return [
            'bemdecl.js',
            'deps.js',
            'bemjson.js',
            'bemhtml.js',
            'css',
            'js'
        ];

    },

    getLevels : function(tech) {

        var bemblLevels = ['blocks-common', 'blocks-desktop']
                .map(environ.getLibPath.bind(null, 'bem-bl')),
            siteLevels = ['common.blocks', 'site.blocks']
                .map(join.bind(null, environ.PRJ_ROOT));

        return bemblLevels.concat(siteLevels);

    },

    'create-bemjson.js-node' : function(tech, bundleNode, magicNode) {
        return this.createDefaultTechNode.apply(this, arguments);
    },

    /*
    'create-meta.tree-node' : function(tech, bundleNode, magicNode) {
        return return this.setBemBuildNode(
                tech,
                this.level.resolveTech(tech),
                this.getBundlePath('deps..js'),
                bundleNode,
                magicNode);
    },
    */

    'create-bemjson.js-optimizer-node' : function() {
        return this['create-js-optimizer-node'].apply(this, arguments);
    }

});
