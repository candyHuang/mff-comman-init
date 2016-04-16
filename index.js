'use strict';
var yeoman = require('yeoman-generator'),
	debug = require('debug'),
    colors = require('colors');

function log(type, msg, color) {
    color = color || 'grey';
    var pad = Array(Math.max(0, 10 - type.length) + 1).join(' '),
        m = type === 'error' ? type : 'log';
    console[m]((pad + type).green, msg[color]);
}

exports.name = 'init';
exports.usage = '<command> [options]';
exports.desc = 'init a mff project';
exports.options = {
  '-h, --help': 'print this help message',
};
exports.commands = {
  'info': 'some info'
};

exports.run = function(argv, cli, env) {
	// 显示帮助信息
  if (argv.h || argv.help) {
    return cli.help(exports.name, exports.options, exports.commands);
  }
  	var yeomanEnv = yeoman(),
	    args = Array.prototype.slice.call(arguments),
	    options = args.pop(),
	    opts = {
	        clean: true
	    };

	yeomanEnv.lookup();

	yeomanEnv.on('error', function (err) {
	    if (~err.message.indexOf('You don\'t seem to have a generator with the name')) {
	        err.message = err.message.split('\n')[0];
	    }

	    log('error', err.message, 'red');
	    debug(err.stack);
	    process.exit(err.code || 1);
	});

	yeomanEnv.on('end', function () {
	    log('init', 'finished');
	});

	yeomanEnv.run('mff', opts);

}
