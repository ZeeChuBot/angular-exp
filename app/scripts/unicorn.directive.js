'use strict';

angular.module('angularExpApp').directive('meetUnicorn', function() {

    var D = {
        restrict: 'AE',
        replace: true,
        templateUrl: 'scripts/unicorn.directive.html'
    };

    D.controller = function($scope) {
        $scope.process = function() {
            return 'Unicorn';
        };
    };

    D.link = function(scope, elem) {
        scope.hide = function(){
            elem.hide();
        };
    };
    return D;
});
