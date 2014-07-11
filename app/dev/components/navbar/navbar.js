'use strict';
var navbar = angular.module('navbarDirective', ['ui.bootstrap.dropdown', 'ui.bootstrap.collapse']);

navbar.directive('navbar', [
  function () {
    return {
      restrict: 'E',
      scope: false,
      templateUrl: '/dev/components/navbar/navbar.html',
      controller: 'navbarCtrl'
    };
  }
]);

navbar.controller('navbarCtrl', ['$scope', '$state',
  function ($scope, $state) {
    $scope.navbar = 1;
    $scope.go = function (state) {
      $state.go(state);
    }
    $scope.search = function () {
      $state.go('search', {'q': $scope.q});
    };
    $scope.reload = function () {
      $state.transitionTo($state.current, $state.params, {
        reload: true, inherit: false, notify: true
      });
    };
  }
]);
