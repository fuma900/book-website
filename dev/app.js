/* global angular */
/* jshint strict: true */

'use strict';
var app = angular.module(
  'sellmybook',  // App name
  ['ui.router', 'angular-loading-bar', 'googleBooks', 'navbarDirective'] // Imported modules
);


app.config(['$stateProvider', '$urlRouterProvider', 'cfpLoadingBarProvider',
  function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/dev/home/home.html',
        controller: 'homeCtrl'
      })
      .state('search', {
        url: '/search/:q',
        templateUrl: 'dev/search/search.html',
        controller: 'searchCtrl'
      })
      .state('settings', {
        url: '/settings/',
        templateUrl: 'dev/settings/settings.html',
        controller: 'settingsCtrl'
      });
  }
]);

app.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null){
      return input.substring(0,1).toUpperCase()+input.substring(1);
    }
  }
});

app.controller('mainCtrl', ['$scope', '$state', '$http', 'cfpLoadingBar',
  function ($scope, $state, $http, cfpLoadingBar) {
    $scope.$on('$stateChangeStart', function () {
      cfpLoadingBar.start();
      $scope.navCollapsed = true;
    });
    $scope.$on('$stateChangeSuccess', function () {
      cfpLoadingBar.complete();
      $scope.path = $state.current.name;
    });
  }
]);

/*
CODEKIT PREPRENDs
*/

/*
CODEKIT APPENDs
*/

/* VIEWS (CONTROLLERS and DIRECTIVES) */
// @codekit-append 'home/home.js'
// @codekit-append 'search/search.js'
// @codekit-append 'settings/settings.js'

/* MODELS */
// @codekit-append 'lib/googleBooks.js'

/* COMPONENTS */
// @codekit-append 'components/navbar/navbar.js'
