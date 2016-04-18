var yeoman = require('yeoman-generator');
var yeomanEnv = yeoman();
// var yeoman = require('yeoman-environment');
// var yeomanEnv = yeoman.createEnv();

var Generator = require('../app/index.js')

yeomanEnv.registerStub(Generator, 'mff');

yeomanEnv.run('mff', {clean: false, 'skip-install': true},function() {
	console.log('init finished');
});

