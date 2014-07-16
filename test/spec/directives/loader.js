'use strict';
describe('DirectiveLoaderTest', function () {
    var $rootScope,
        $http,
        $httpBackend,
        $compile,
        DirectiveFactory;


    beforeEach(function(){
        module('ngMockE2E');




var fukc = [
    'ng',
    'ngMockE2E',
];
// angular.module('artyApp', artyApp_dependencies);

// Force the E2E httpBackend on all of our tests.  You want this.  Trust me.
// module('ngMockE2E');


        // module('angularExpApp', fukc);
        module('angularExpApp');
    });
 

    beforeEach(inject(function (
        _$rootScope_, 
        _$http_, 
        _$httpBackend_,
        _$compile_,
        _MeetFactory_
        ) {

        $rootScope = _$rootScope_;
        $http = _$http_;
        $httpBackend = _$httpBackend_;
        $compile = _$compile_;
        DirectiveFactory = _MeetFactory_;

        //allow directives to grab their respective html templates 
        _$httpBackend_.whenGET('scripts/note.directive.html/').passThrough();
        $httpBackend.whenGET(/.*/).passThrough();
        _$httpBackend_.whenGET(/.*/).passThrough();
    }));

// var $httpBackend;
    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.whenGET(/.*/).passThrough();
    }));



    //Sanity Test
    it('Should have some directive types to load in the factory', function() {
        var types = DirectiveFactory.getTypes();
        expect(types.length > 0).toBe(true);
    });

    it('Should be able to create one of each schedule directive type', function() {
        var types = DirectiveFactory.getTypes();
        _.each(types, function(t) {

        $httpBackend.whenGET(/html/).passThrough();
            
            //spoof information for each directive type
            var scope = $rootScope.$new();
            scope.evt = {
                type: t
            };
            scope.cfg = {};
                
            $compile('<div obj="evt" cfg="cfg" meet-loader></div>')(scope);
            // var c = ($compile('<div meet_="question"></div>')(scope));
            
            //Trigger building out the directive on the scope via the link function
            $rootScope.$digest();

            //now we can test basic functionality of a directive on the scope


            //Check that the question is invalid (no information)  Then check that it serialized something.
            // expect(q.isValid()).toBe(false);
            // expect(q.serialize() != null).toBe(true);

        });
    });

});
