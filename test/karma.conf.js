// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-06-16 using
// generator-karma 0.8.2
// var fs = require('fs');

module.exports = function(config) {

  // // Use ENV vars on Travis and sauce.json locally to get credentials
  // if (!process.env.SAUCE_USERNAME) {
  //   if (!fs.existsSync('sauce.json')) {
  //     console.log('Create a sauce.json with your credentials based on the sauce-sample.json file.');
  //     process.exit(1);
  //   } else {
  //     process.env.SAUCE_USERNAME = require('./sauce').username;
  //     process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;
  //   }
  // }
  // Example set of browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/platform combos
  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7'
    },

    sl_ie_7: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows XP',
      version: '7'
    },

    // sl_firefox: {
    //   base: 'SauceLabs',
    //   browserName: 'firefox',
    //   version: '27'
    // }


    // },
    // sl_ios_safari: {
    //   base: 'SauceLabs',
    //   browserName: 'iphone',
    //   platform: 'OS X 10.9',
    //   version: '7.1'
    // },
    // sl_ie_11: {
    //   base: 'SauceLabs',
    //   browserName: 'internet explorer',
    //   platform: 'Windows 8.1',
    //   version: '11'
    // }
  };



  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'Chrome'
    ],

    // Which plugins to enable
    // plugins: [
    //   'karma-phantomjs-launcher',
    //   'karma-chrome-launcher',
    //   'karma-sa'
    //   'karma-jasmine'
    // ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    // singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // Uncomment the following lines if you are using grunt's server to run the tests
    proxies: {
      '/': 'http://localhost:9000/'
    },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'

    sauceLabs: {
        testName: 'derp'
    },
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    reporters: ['dots', 'saucelabs'],
    singleRun: true

  });
};
