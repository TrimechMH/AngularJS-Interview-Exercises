'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'mm.foundation',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactCtrl'}).
    otherwise({redirectTo: '/contact'});
}]);
