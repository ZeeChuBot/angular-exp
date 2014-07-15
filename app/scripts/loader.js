'use strict';

angular.module('angularExpApp').directive('meet-loader', function(MeetFactory) {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            obj: '=',
            cfg: '='
        },
        link: function(scope, elem) {
            console.log('Scope object information', scope, elem); 
             
            var directive = Factory.createType(obj);
            if (directive) {
                elem.append(directive(scope));
            } else {
                elem.append(angular.element('<div> ERROR</div>'));
                console.error("We don't know what the heck this object is?", obj);
            }
        }
    };
});
