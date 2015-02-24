var parseBuildPlatforms = function (argumentPlatform) {
	// this will make it build no platform when the platform option is specified
	// without a value which makes argumentPlatform into a boolean
	var inputPlatforms = argumentPlatform || process.platform + ";" + process.arch;

	// Do some scrubbing to make it easier to match in the regexes bellow
	inputPlatforms = inputPlatforms.replace("darwin", "mac");
	inputPlatforms = inputPlatforms.replace(/;ia|;x|;arm/, "");

	var buildAll = /^all$/.test(inputPlatforms);
	var buildPlatforms = {
		mac: /mac/.test(inputPlatforms) || buildAll,
		mac32: /mac32/.test(inputPlatforms) || buildAll,
		mac64: /mac64/.test(inputPlatforms) || buildAll,
		win: /win/.test(inputPlatforms) || buildAll,
		win32: /win32/.test(inputPlatforms) || buildAll,
		win64: /win64/.test(inputPlatforms) || buildAll,
		linux: /linux/.test(inputPlatforms) || buildAll,
		linux32: /linux32/.test(inputPlatforms) || buildAll,
		linux64: /linux64/.test(inputPlatforms) || buildAll
	};

	return buildPlatforms;
};



module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	var buildPlatforms = parseBuildPlatforms(grunt.option('platforms'));


	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),
		less: {
        './src/app/css/app.css': ['./src/app/css/app.less']
    },
	  nodewebkit: {
	    options: {
	    	// version: '0.11.6',
	    	// chromeVersion: '38',
	    	version: '0.12.0-alpha3',
	    	chromeVersion: '41',
	      buildDir: './build', // Where the build version of my node-webkit app is saved
	      macZip: buildPlatforms.win, // Zip nw for mac in windows. Prevent path too long if build all is used.
				// mac: buildPlatforms.mac,
				// mac32: buildPlatforms.mac32,
				mac64: buildPlatforms.mac64,
				// win: buildPlatforms.win,
				// win32: buildPlatforms.win32,
				// win64: buildPlatforms.win64,
				// linux32: buildPlatforms.linux32,
				// linux64: buildPlatforms.linux64,
				// download_url: 'http://212.47.229.79/nw/'
	    },
	    src: ['./src/**', './package.json'] // Your node-webkit app
	  },
	  exec: {
			win32: {
				cmd: '"cache/win/<%= nodewebkit.options.version %>/nw.exe" .'
			},
			win64: {
				cmd: '"cache/win/<%= nodewebkit.options.version %>/nw.exe" .'
			},
			mac32: {
				cmd: 'cache/<%= nodewebkit.options.version %>/osx32/nwjs.app/Contents/MacOS/nwjs .'
			},
			mac64: {
				cmd: 'cache/<%= nodewebkit.options.version %>/osx64/nwjs.app/Contents/MacOS/nwjs .'
			},
			linux32: {
				cmd: '"cache/linux32/<%= nodewebkit.options.version %>/nw" .'
			},
			linux64: {
				cmd: '"cache/linux64/<%= nodewebkit.options.version %>/nw" .'
			},
		},
		copy: {
	    main: {
	      files: [
	        // {
	        //   src: 'libraries/win/ffmpegsumo.dll',
	        //   dest: 'webkitbuilds/releases/your-app/win/your-app/ffmpegsumo.dll',
	        //   flatten: true
	        // },
	        {
	          src: 'libraries/%= nodewebkit.options.chromeVersion %>/mac/ffmpegsumo.so',
	          dest: 'cache/<%= nodewebkit.options.version %>/osx64/nwjs.app/Contents/Frameworks/nwjs Framework.framework/Libraries/ffmpegsumo.so',
	          flatten: true
	        },
	      ]
	    }
	  }
	});
 	
	
 	
	grunt.registerTask('start', function () {
		var start = parseBuildPlatforms();
		if (start.win32) {
			grunt.task.run('exec:win32');
		} else if (start.win64) {
			grunt.task.run('exec:win64');
		} else if (start.mac32) {
			grunt.task.run('exec:mac32');
		} else if (start.mac64) {
			grunt.task.run('exec:mac64');
		} else if (start.linux32) {
			grunt.task.run('exec:linux32');
		} else if (start.linux64) {
			grunt.task.run('exec:linux64');
		} else {
			grunt.log.writeln('OS not supported.');
		}
	});
	
	grunt.registerTask('test', [
		'build',
		'start'
	]);

	grunt.registerTask('build', [
		'bower_clean',
		'less',
		'nodewebkit',
		'copy',
	]);

  grunt.registerTask('default', ['build']);
};