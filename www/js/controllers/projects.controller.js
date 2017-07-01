app.controller("projectsCtrl", function($scope, $rootScope, messages, projectService){
    $scope.loading = true;

    var find = function() {
      projectService.find().success(function(data, status, headers, config) {
        $scope.projects = data.projects;
      }).error(function(data, status, headers, config) {
        $scope.error = messages.unableToFetchItens;
      }).finally(function() {
          $scope.loading = false;
      });
  };

  find();
});
