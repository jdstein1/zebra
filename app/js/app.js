'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'ctrlHome'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'ctrlAbout'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
