'use strict';

angular.module('angularExpApp').factory('MeetFactory', function($compile) {
    var MF = {
        cfg: {

        }
    };


    MF.createType = function(obj) {
        //Lookup object
        if (!obj || !obj.type || !MF.cfg[obj.type]) {
            return null;
        }

        //This creates a linkFunction tied to the directive
        return $compile(document.createElement(MF.cfg[obj.type]));
    };

    return MF;
});
