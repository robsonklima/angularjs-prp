app.controller("projectsCtrl", function($scope, $rootScope, messages, projectService){

    var find = function() {
        projectService.find().success(function(data, status) {
          $scope.projects = data.projects;
        }).error(function(data, status) {
          $scope.error = messages.unableToFetchItens;
        });
    };

    find();
});
