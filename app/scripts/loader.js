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
            // console.log('Scope object information', scope.obj, scope.cfg, elem); 
            scope.wtf = 'wtf';
            console.log('sigh');
            var directive = MeetFactory.createType(scope.obj);
            if (directive) {
                // console.log('What the heck', directive);
                elem.append(directive(scope));
            } else {
                elem.append(angular.element('<div> ERROR</div>'));
                console.error('We don\'t know what the heck this object is?', scope.obj);
            }
        }
    };
});
