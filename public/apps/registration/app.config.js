angular.
  module('registrationApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/registration', {
          template: '<registration-form></registration-form>'
        }).
        otherwise('/registration');
    }
  ]);