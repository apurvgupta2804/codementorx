(function() {
    'use strict';
    function run() {
        angular.module('core', ['ui.router']);
        angular.module('core').constant('serverUrl', 'https://small-project-api.herokuapp.com');
    }
    run();
}).call(this);