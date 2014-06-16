'use strict';

/**
 * @ngdoc function
 * @name angularExpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularExpApp
 */
angular.module('angularExpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
