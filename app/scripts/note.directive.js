'use strict';

angular.module('angularExpApp').directive('meetNote', function() {

    var D = {
        restrict: 'AE',
        replace: true,
        templateUrl: 'scripts/note.directive.html'
    };

    D.controller = function($scope) {
        if($scope.obj){
            $scope.obj.process = function() {
                return 'NOTE';
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
