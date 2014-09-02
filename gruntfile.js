/*jslint node: true */
'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      main: {
        options: {
          paths: ['dev/css'],
          compress: false,
          sourceMap: true,
          sourceMapFilename: 'dev/css/dev.css.map',
          sourceMapBasepath: 'dev/css/'
        },
        files: {
          'dev/css/dev.css': [
            'dev/css/project.less'
          ]
        }
      },
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie >= 8'],
        map: true
      },
      single_file: {
        src: 'dev/css/dev.css'
      },
    },
    watch: {
      less: {
        files: ['dev/css/**/*.less', 'src/**/*.less'],
        tasks: ['less', 'autoprefixer'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['less', 'autoprefixer']);
};
