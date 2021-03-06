'use strict';

module.exports = function(config) {
  config.set({

    basePath: '..',

    port: 9876,

    files: [
      'src/**/*.js',
      'test/specs/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['mocha', 'chai', 'browserify'],

    preprocessors: {
      'src/**/*.js': ['browserify'],
      'test/specs/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [
        [ 'babelify', { presets: [ 'es2015' ] } ]
      ]
    },

    reporters: ['spec'],

    client: {
      mocha: {
        reporter: 'html'
      }
    },

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity

  });
};
