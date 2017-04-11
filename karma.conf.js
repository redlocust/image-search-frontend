var webpackConfig = require('./webpack.config');


module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    singleRun: true,
    files: ['app/tests/**/*.test.js*'],
    preprocessors: {'app/tests/**/*.test.js*': ['webpack', 'sourcemap']},
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};