'use strict';

/**
 * @ngdoc function
 * @name angularExpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularExpApp
 */
angular.module('angularExpApp')
.controller('MainCtrl', function ($scope, ScheduleService, MeetFactory) {

    $scope.static = [
        {type: 'cake', description: "Eat it Too"}, 
        {type: 'assignment', description: "Work Work"}, 
        {type: 'note', description: "The Best"}, 
        {type: 'event', description: "Clever Girl"}
    ];
    $scope.init = function() {
        $scope.setOverride(lscache.get('Overriden'));
        //$scope.query();
    };
   
    //Local storage settings
    $scope.toggleOverride = function() {
        var state = !lscache.get('Overriden');
        lscache.set('Overriden', state);
        $scope.setOverride(state);
        $scope.query();
    };

    $scope.setOverride = function(state) {
        $scope.overriden = state;
        if($scope.overriden) {
            MeetFactory.cfg.note.directive = 'meet-unicorn';
        }else {
            MeetFactory.cfg.note.directive = 'meet-note';
        }
    }

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
        $scope.events = _.sortBy($scope.events, 'description');
    };

    $scope.sortDate = function() {
        console.log('sort date');
        $scope.events = _.sortBy($scope.events, 'dueDate');
    };

});
