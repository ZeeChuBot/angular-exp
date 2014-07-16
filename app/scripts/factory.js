'use strict';

angular.module('angularExpApp').factory('MeetFactory', function($compile) {
    var MF = {
        cfg: {
            note:        {directive: 'meet-note'},
            assignment:  {directive: 'meet-assign'},
            cake:        {directive: 'meet-cake'},
            'event':     {directive: 'meet-event'}
        }
    };

    MF.getTypes = function() {
        // return ['note','assignment','cake', 'event'];
        return ['event'];
    };

    MF.addType = function(key, typeCfg) {
        if (key && typeCfg && typeCfg.directive) {
            MF.cfg[key] = typeCfg;
        }
    };

    MF.createType = function(obj) {
        //Lookup object
        if (!obj || !obj.type || !MF.cfg[obj.type]) {
            return null;
        }

        //This creates a linkFunction tied to the directive
        var directiveCfg = MF.cfg[obj.type];
        return $compile(document.createElement(directiveCfg.directive));
    };

    return MF;
});
