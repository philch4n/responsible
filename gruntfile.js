module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jscs: {
      src: ['*.js', '*.jsx', 'test/*.js', 'test/**/*.js', 'test/*.jsx', 'test/**/*.jsx'],
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
