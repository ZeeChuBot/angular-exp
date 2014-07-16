'use strict';

angular.module('angularExpApp').directive('meetLoader', function(MeetFactory) {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            obj: '=',
            cfg: '='
        },
        link: function(scope, elem) {
            var directive = MeetFactory.createType(scope.obj, scope.cfg);
            if (directive) {
                elem.append(directive(scope));
            } else {
                elem.append(angular.element('<div> ERROR</div>'));
                console.error('We don\'t know what the heck this object is?', scope.obj);
            }
        }
    };
});
