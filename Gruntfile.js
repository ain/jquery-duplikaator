'use strict';

module.exports = function(grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // load tasks on demand (speeds up dev)
  require('jit-grunt')(grunt, {
  });

  grunt.initConfig({
    yeoman: {
      src: 'src',
      dist: 'dist',
      test: 'test',
      pkg: grunt.file.readJSON('package.json'),
      meta: {
        banner: '/*! <%= yeoman.pkg.name %> - v<%= yeoman.pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '* <%= yeoman.pkg.homepage %>\n' +
          '* Copyright © <%= grunt.template.today("yyyy") %> ' +
          '<%= yeoman.pkg.author.name %>; ' +
          'Licensed <%= yeoman.pkg.license %> */'
      },
    },
    watch: {
      qa: {
        files: [
          '<%= yeoman.src %>/*.js',
          '<%= yeoman.test %>/spec/test.js'
        ],
        tasks: ['concurrent:qa']
      },
      bdd: {
        files: [
          '<%= yeoman.src %>/*.js',
          '<%= yeoman.test %>/index.html',
          '<%= yeoman.test %>/spec/*.js'
        ],
        tasks: ['test']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.src %>/{,*/}*.js',
        '<%= yeoman.test %>/spec/{,*/}*.js'
      ]
    },
    mocha: {
      dev: {
        options: {
          run: true,
          log: true
        },
        src: ['<%= yeoman.test %>/index.html']
      },
      dist: {
        options: {
          run: true,
          log: true
        },
        src: ['<%= yeoman.test %>/dist.html']
      }
    },
    concurrent: {
      qa: {
        tasks: [
          'jshint',
          'jscs',
          'mocha:dev'
        ]
      },
      build: {
        tasks: [
          'uglify'
        ]
      },
      fullQA: {
        tasks: [
          'jshint',
          'jscs',
          'mocha'
        ]
      }
    },
    uglify: {
      options: {
        banner: '<%= yeoman.meta.banner %>'
      },
      dist: {
        files: {
          'dist/jquery-duplikaator.min.js': 'src/jquery-duplikaator.js'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*'
          ]
        }]
      }
    },
    jscs: {
      options: {
        config: '.jscsrc',
        esnext: false,
        verbose: true
      },
      files: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.test %>/spec/*.js',
          '<%= yeoman.src %>/*.js'
        ]
      }
    }
  });

  grunt.registerTask('test', ['mocha:dev']);
  grunt.registerTask('qa', ['concurrent:qa']);

  grunt.registerTask('build', [
    'concurrent:qa',
    'clean:dist',
    'concurrent:build'
  ]);

  grunt.registerTask('default', ['build']);

  grunt.registerTask('travis', ['concurrent:fullQA']);
};
