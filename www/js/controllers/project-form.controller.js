app.controller("projectFormCtrl", function($scope, $route, $location, $mdDialog,
  messages, projectService){
    var projectId = $route.current.params.projectId;

    var findById = function() {
        projectService.findById(projectId).success(function(data, status) {
            $scope.project = data.project[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find Project');
        });
    };

    if (projectId) {
        $scope.pageTitle = 'Edit Project';
        findById();
    } else {
        $scope.pageTitle = 'New Project';
    }

    var insert = function(project) {
        projectService.insert(project).success(function(data) {
            showAlert('Message', 'Project added successfully');
            $location.path('projects');
        }).error(function(data, status) {
            showAlert('Error', 'Unable to insert project');
        });
    };

    var update = function(project) {
        projectService.update(project).success(function(data) {
            showAlert('Success', 'Project updated successfully');
            $location.path('projects');
        }).error(function(data, status) {
            showAlert('Error', 'Unable to update project');
        });
    };

    $scope.save = function(project) {
        if (projectId) {
            update(project);
        } else {
            insert(project);
        }
    };

    $scope.remove = function(project) {
        var confirm = $mdDialog.confirm()
          .title("Please confirm")
          .textContent('Are you sure to delete this project?')
          .ok('Yes')
          .cancel('No');

        $mdDialog.show(confirm).then(function() {
            projectService.remove(project).success(function(data, status) {
                showAlert('Success', 'Project removed successfully');
                $location.path('projects');
            }).error(function(data, status, headers, config) {
                showAlert('Error', 'Unable to remove project');
            });
        });
    };

    var showAlert = function(title, message) {
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title(title)
            .textContent(message)
            .ok('Ok')
        );
    };

});
