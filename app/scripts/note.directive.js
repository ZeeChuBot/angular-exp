'use strict';
angular.module('angularExpApp').directive('meetNote', function() {

    var D = {
        restrict: 'AE',
        replace: true,
        templateUrl: 'scripts/note.directive.html'
    };

    D.controller = function($scope) {
        console.log('waaa');
        if($scope.obj){
            $scope.obj.process = function() {
                return 'NOTE';
            };
        }
    };

    D.link = function(scope, elem) {
        console.log('Im lnkisn');
        scope.hide = function() {
            elem.hide();
        };

        elem.addClass("plain");
        
        scope.derp = 'herp';
    };
    return D;
});
