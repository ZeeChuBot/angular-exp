'use strict';

angular.module('angularExpApp')
.service('ScheduleService', function($http) {
    this.getSchedule = function(){
        return $http.get("/fake/api/schedule/");
    };
});