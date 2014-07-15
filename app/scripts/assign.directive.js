'use strict';

angular.module('angularExpApp').directive('meet-assign', function() {

    var D = {
        restrict: 'A',
        replace: true,
        templateUrl: 'scripts/assign.directive.html',
        scope: {
          obj: '=',
          cfg: '='
        }
    };

    D.controller = function($scope) {
        $scope.obj.process = function() {
           return 'ASSIGN';
        };
    };

    D.link = function(scope, elem) {
        scope.hide = function() {
            elem.hide();
        };
    };
    return D;
});
