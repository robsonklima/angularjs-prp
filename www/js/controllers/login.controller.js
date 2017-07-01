app.controller("loginCtrl", function ($scope, $rootScope, $location, messages, loginService) {

    $rootScope.showSideNav = false;
    loginService.clearCredentials();
    $scope.errors = [];

    $scope.login = function(user) {
      $scope.loading = true;

      loginService.login(user).success(function(data, status) {
          loginService.setCredentials(data.user);
          $location.path('home');
      }).error(function(data, status) {
          $scope.error = messages.loginInvalid;
      }).finally(function() {
          $scope.loading = false;
      });
    };

});
