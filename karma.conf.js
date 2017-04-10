var webpackConfig = require('./webpack.config');


module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    browsers: ['PhantomJS', 'PhantomJS_custom'],
    singleRun: true,
    files: ['app/tests/**/*.test.js'],
    preprocessors: {'app/tests/**/*.test.js': ['webpack', 'sourcemap']},
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },

    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: false
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