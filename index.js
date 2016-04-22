'use strict';
var yeoman = require('yeoman-generator'),
    debug = require('debug'),
    colors = require('colors'),
    Generator = require('./app/index.js');


function log(type, msg, color) {
    color = color || 'grey';
    var pad = Array(Math.max(0, 10 - type.length) + 1).join(' '),
        m = type === 'error' ? type : 'log';
    console[m]((pad + type).green, msg[color]);
}

exports.name = 'init';
exports.usage = '<command>';
exports.desc = 'init a mff project';
exports.options = {};
exports.commands = {};

exports.run = function(argv, cli, env) {
    // 显示帮助信息
    if (argv.h || argv.help) {
        return cli.help(exports.name, exports.options, exports.commands);
    }
    var yeomanEnv = yeoman(),
        args = Array.prototype.slice.call(arguments),
        options = args.pop(),
        opts = {
            clean: false,
            'skip-install': true
        };

    if (argv.c || argv.clean) {
        opts.clean = true
    }

    yeomanEnv.registerStub(Generator, 'mff');
    yeomanEnv.run('mff', opts, function() {
        log('init', 'finished');
    });
}
