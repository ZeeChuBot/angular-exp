'use strict';

angular.module('angularExpApp').directive('meet-note', function() {

    var D = {
        restrict: 'A',
        replace: true,
        templateUrl: 'scripts/note.directive.html',
        scope: {
          obj: '=',
          cfg: '='
        }
    };

    D.controller = function($scope) {
        $scope.obj.process = function() {
            return 'NOTE';
        };
    };

    D.link = function(scope, elem) {
        scope.hide = function() {
            elem.hide();
        };
    };
    return D;
});
