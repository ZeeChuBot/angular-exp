'use strict';

angular.module('angularExpApp').directive('meetAssign', function() {

    var D = {
        restrict: 'AE',
        replace: true,
        templateUrl: 'scripts/assign.directive.html'
    };

    D.controller = function($scope) {
        if($scope.obj) {
            $scope.obj.process = function() {
               return 'ASSIGN';
            };
        }
    };

    D.link = function(scope, elem) {
        scope.hide = function() {
            elem.hide();
        };
    };
    return D;
});
