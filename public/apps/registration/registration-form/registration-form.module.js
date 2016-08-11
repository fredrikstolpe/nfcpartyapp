angular.module('registrationForm', ['userService'])

.controller('formController', function($scope, $http) {
    $scope.formData = {};
    $scope.processForm = function() {
        $http({
            method: 'POST',
            url: '/api/users',
            data: $scope.formData
        })
    };
});