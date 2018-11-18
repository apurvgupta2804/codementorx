(function() {
    'use strict';
    var codeMentorModuleName = 'codementor';
    angular.module(codeMentorModuleName, [
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',        
        'core',
        'app.modules'
    ]);
}).call(this);