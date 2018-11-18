// this file contain any common configuration to root bigparser module - which is being called in lite & full both versions
;
(function() {
    'use strict';
    angular
        .module('codementor') // bigParserMainModuleName variable comes from app.module.full.js or app.module.lite.js depending on if we are on index.html page or index-lite html page
        .config(config)
        .run(run);

    config.$inject = ['$compileProvider', '$httpProvider'];

    function config($compileProvider, $httpProvider) {
        $compileProvider.debugInfoEnabled(false); // Disables appending scope to elements
        $httpProvider.useApplyAsync(true); // will executes nearby digest calls just once, using a zero timeout.        
        $httpProvider.defaults.headers.delete = {
            'Content-Type': 'application/json'
        };
        $httpProvider.interceptors.push('authInterceptor');
    }

    run.$inject = ['$rootScope', '$location', '$state'];

    function run($rootScope, $location, Auth, $state) {
        $rootScope.$state = $state;
        $rootScope.currentLocation = location;

    }

}).call(this);