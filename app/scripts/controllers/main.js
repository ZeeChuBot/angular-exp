'use strict';

/**
 * @ngdoc function
 * @name angularExpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularExpApp
 */
angular.module('angularExpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
