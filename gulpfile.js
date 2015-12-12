"use strict"

var gulp = require("gulp");
var karma = require("karma");

gulp.task("default", function() {
	
});

gulp.task("test", function(done) {
	new karma.Server({
		configFile: __dirname + "/karma.conf.js",
		autoWatch: true,
		singleRun: false	
	}, done).start();
});