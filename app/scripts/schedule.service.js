'use strict';

angular.module('angularExpApp')
.service('ScheduleService', function($http) {
    var sequence = 0;
    this.getSchedule = function(){
        return $http.get("/fake/api/schedule/").then(function(response) {
            var curr = moment();
            _.each(response.data.data, function(evt) {
                curr = curr.add(1, 'days');
                evt.dueDate = curr.clone();
                evt.id = evt.id || ++sequence;
            });
            return response.data;
        });

    };
});
