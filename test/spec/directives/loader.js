'use strict';
describe('DirectiveLoaderTest', function () {
    var $rootScope,
        $templateCache,
        $http,
        $httpBackend,
        $compile,
        DirectiveFactory;


    beforeEach(function(){
        // module('ngMockE2E');
        module("stuff"); 
        module('angularExpApp');
    });
 

    beforeEach(inject(function (
        _$rootScope_,
        _$templateCache_, 
        _$httpBackend_,
        _$compile_,
        _MeetFactory_
        ) {

        $templateCache = _$templateCache_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        $compile = _$compile_;
        DirectiveFactory = _MeetFactory_;

        $httpBackend.whenGET(/html/).passThrough();
    }));



    //Sanity Test
    it('Should have some directive types to load in the factory', function() {
        var types = DirectiveFactory.getTypes();
        expect(types.length > 0).toBe(true);
    });

    it('Should be able to create one of each schedule directive type', function() {
      
        var types = DirectiveFactory.getTypes();
        _.each(types, function(t) {
            //spoof information for each directive type
            var scope = $rootScope.$new();
            scope.evt = {
                type: t
            };
            scope.cfg = {};
                
            var c = $compile('<div obj="evt" cfg="cfg" meet-loader></div>')(scope);
            

            //Trigger building out the directive on the scope via the link function
            $rootScope.$digest();

            console.log(c.find('div div.schedule'));
            console.log(_.isEmpty( $('.schedule', c) ) );
            expect($('.schedule', c) !== null).toBe(true);

            //now we can test basic functionality of a directive
            // expect(c.find("schedule")).toBe(true);


            //Check that the question is invalid (no information)  Then check that it serialized something.
            // expect(q.isValid()).toBe(false);
            // expect(q.serialize() != null).toBe(true);

        });
    });

});
