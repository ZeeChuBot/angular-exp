'use strict';

/**
 * @ngdoc function
 * @name angularExpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularExpApp
 */
angular.module('angularExpApp')
.controller('MainCtrl', function ($scope, ScheduleService) {

    $scope.init = function() {
        $scope.static = [
            {type: 'cake', description: "Eat it Too"}, 
            {type: 'assignment', description: "Work Work"}, 
            {type: 'note', description: "The Best"}, 
            {type: 'event', description: "Clever Girl"}
        ];
        $scope.overriden = lscache.get('Overriden');

        $scope.query();
    };
   
    //Local storage settings
    $scope.toggleOverride = function() {
        var state = !lscache.get('Overriden');
        lscache.set('Overriden', state);
        $scope.overriden = state;
    };

    //Query helpers
    $scope.events = [];
    $scope.clear = function() {
        $scope.events = [];
    };
    $scope.query = function() {
        ScheduleService.getSchedule().then($scope.merge);
    };
    $scope.merge = function(allResults) {
        console.log('All Results', allResults);
        $scope.events = allResults.data;
    };

    //Sorts 
    $scope.sortName = function() {
        console.log('sortName');
        $scope.events = _.sortBy($scope.events, 'name');
    };

    $scope.sortDate = function() {
        console.log('sort date');
        $scope.events = _.sortBy($scope.events, 'dueDate');
    };

});
