'use strict';

angular.module('angularExpApp').directive('meet-cake', function() {

    var D = {
        restrict: 'A',
        replace: true,
        templateUrl: 'scripts/cake.directive.html',
        scope: {
          obj: '=',
          cfg: '='
        }
    };

    D.controller = function($scope) {
        $scope.process = function() {
            return 'CAKE';
        };
    };

    D.link = function(scope, elem) {
        scope.hide = function() {
            elem.destroy();
        };
    };
    return D;
});
