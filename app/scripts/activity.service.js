'use strict';

angular.module('angularExpApp')
.service('ActivityService', function($http) {
    this.getNextActivity = function(){
        return $http.get("/fake/api/activity/");
    };
});