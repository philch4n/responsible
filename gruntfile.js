module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jscs: {
      src: '*.js',
      options: {
        config: '.jscsrc',
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-jscs');

  // Default task(s).
  grunt.registerTask('default', ['jscs']);

};
