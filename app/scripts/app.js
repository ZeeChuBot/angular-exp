'use strict';

/**
 * @ngdoc overview
 * @name angularExpApp
 * @description
 * # angularExpApp
 *
 * Main module of the application.
 */
angular
  .module('angularExpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMockE2E',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  })
  .run(function($rootScope) {
      $rootScope._ = window._;
  });
