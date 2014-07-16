'use strict';

angular.module('angularExpApp').directive('meetEvent', function() {

    var D = {
        restrict: 'EA',
        templateUrl: 'scripts/event.directive.html'
    };
    D.controller = function($scope) {
        // console.log('Um..', $scope);
        if($scope.obj){
            $scope.obj.process = function(){
                return 'EVENT';
            };
        }
    };

    D.link = function(scope, elem) {
        scope.hide = function() {
            elem.hide();
        };
        elem.addClass("schedule");
    };
    return D;
});
