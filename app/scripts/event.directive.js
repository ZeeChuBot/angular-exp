'use strict';

angular.module('angularExpApp').directive('meet-event', function() {

    var D = {
        restrict: 'A',
        replace: true,
        templateUrl: 'scripts/event.directive.html',
        scope: {
          obj: '=',
          cfg: '='
        }
    };

    D.controller = function($scope) {
        $scope.obj.process = function() {
            return 'EVENT';
        };
    };

    D.link = function(scope, elem) {
        scope.hide = function() {
            elem.hide();
        };
    };
    return D;
});
