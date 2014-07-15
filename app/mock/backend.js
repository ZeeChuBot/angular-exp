'use strict';

(function(){

angular.module('angularExpApp').run(function($httpBackend, $http) {
    MockBackend.init($httpBackend, $http);
});

var MockBackend = {};

MockBackend.clearAllCache = function() {
    lscache.flush();
    angular.mock.clearDataCache();
};

MockBackend.init = function($httpBackend, Request, $http){

    var inProduction = false;
    if (window.location.port  != '9000'){
        inProduction = true;
    }
   
    function mockOurselves(regExp, mockRez, method, nopass) {
        var op = null;
        nopass = !!nopass;
        if(method == 'post'){ 
            op = $httpBackend.whenPOST(regExp);
        } else if (method == 'get'){
            op = $httpBackend.whenGET(regExp);
        } else if (method == 'delete'){
            op = $httpBackend.whenDELETE(regExp);
        }
        if (!nopass && (inProduction || !mockRez)) {
            op.passThrough();
        } else {
            op.respond(function(){
                return [200, mockRez];
            });
        }
    };

    var TestMode = false;
    !TestMode && $httpBackend.whenGET(/i18n\/.*\.json/).passThrough();
    !TestMode && $httpBackend.whenGET(/.*html/).passThrough();

    mockOurselves(/assignments$/, mockModel.ap_questions, 'post');
    mockOurselves(/.*\/quiz\/assessment\/metadata.*/, mockModel.assessment, 'post');
};

window.MOCK_MODEL = mockModel;
window.MOCK_BACKEND = MockBackend;

})();
