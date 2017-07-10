app.controller("projectsCtrl", function($scope, $rootScope, messages, projectService){
    var find = function() {
        projectService.find().success(function(data, status) {
          $scope.projects = data;
        }).error(function(data, status) {});
    };

    find();
});
