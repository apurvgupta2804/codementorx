;
(function() {
  'use strict';
  angular
    .module('core')
    .config(main);

  /* @inject */
  function main($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      url: '/',
      views: {
        "navPanel": {
          templateUrl: "app/core/views/nav.view.html",
          controller: 'HomeCtrl as vm'
        },
        "ideaPanel": {
          templateUrl: "app/core/views/main.view.html",
          controller: 'LoginCtrl as vm'
        }
      }
    });
    $stateProvider.state('idea', {
      url: '/ideas',
      views: {
        "navPanel": {
          templateUrl: "app/core/views/nav.view.html",
          controller: 'IdeaCtrl as vm'
        },
        "ideaPanel": {
          templateUrl: "app/core/views/idea.view.html",
          controller: 'IdeaCtrl as vm'
        }
      }
    });
  }
}).call(this);