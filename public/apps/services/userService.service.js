angular.
  module('userService').
  factory('userService', ['$resource',
    function($resource) {
      return $resource('/api/users', {}, {
        query: {
          method: 'GET'
        }
      });
    }
  ]);