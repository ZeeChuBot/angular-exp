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

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('heyoo');

   
    $scope.events = [];
    $scope.init = function() {

        ScheduleService.getSchedule().then(function(response){
            $scope.merge(response.data);
        });

        var sequence = 0;

        var days = 8;
        var day  = window.moment();
        for (var i = 0; i < days; ++i) {

            day.add(1, 'days');
            $scope.events.push({
              id: sequence++,
              type: 'note',    
              description: 'A note',
              dueDate: day
            });

            $scope.events.push({
              id: sequence++,
              type: 'assign',    
              description: 'Assignment',
              dueDate: day
            });

            $scope.events.push({
              id: sequence++,
              type: 'cake',    
              description: 'A Cake',
              dueDate: day
            });

            $scope.events.push({
              id: sequence++,
              type: 'event',    
              description: 'A Event',
              dueDate: day
            });
        }
    };

    $scope.merge = function(allResults) {
        console.log('All Results', allResults);
    };


});
