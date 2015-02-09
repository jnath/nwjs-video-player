module.exports = function(grunt) {

  grunt.initConfig({
    nodewebkit: {
      options: {
        // version: '0.9.2',
        // buildDir: './build', // Where the build version of my node-webkit app is saved
        // platforms: [/*'osx',*/ 'win64'], // These are the platforms that we want to build
        // download_url: 'http://212.47.229.79/nw/',
        version: '0.12.0-alpha2',
        buildDir: './build', // Where the build version of my node-webkit app is saved
        platforms: [/*'osx',*/ 'win'] // These are the platforms that we want to build
      },
      src: './*' // Your node-webkit app
    },
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', ['nodewebkit']);
};
