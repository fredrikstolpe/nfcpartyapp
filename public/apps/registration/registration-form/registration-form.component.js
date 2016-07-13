angular.
  module('registrationForm').
  component('registrationForm', {
    templateUrl: 'registration-form/registration-form.template.html',
    controller: ['userService',
      function RegistrationFormController(userService) {
        var self = this;
        var query = userService.query();
        query.$promise.then(function(data) {
          self.users = data.result;
        });
      }
    ]
  });