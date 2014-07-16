'use strict';

angular.module('angularExpApp').directive('meetCake', function() {

    var D = {
        restrict: 'AE',
        replace: true,
        templateUrl: 'scripts/cake.directive.html'
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

        scope.open = function() {
            alert('IT IS A LIE');
        };
        elem.addClass("schedule");
    };
    return D;
});
