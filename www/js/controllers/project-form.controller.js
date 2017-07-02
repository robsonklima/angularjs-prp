app.controller("projectFormCtrl", function($scope, $route, $location, $mdDialog, messages, projectService){

    var findById = function() {
        projectService.findById($route.current.params.id).success(function(data, status) {
            $scope.project = data.project[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find item');
        });
    };

    if ($route.current.params.id) {
        $scope.pageTitle = 'Edit Project';
        findById();
    } else {
        $scope.pageTitle = 'New Project';
    }

    var insert = function(project) {
        projectService.insert(project).success(function(data) {
            showConfirm('Success', 'Item added successfully');
        }).error(function(data, status) {

        });
    };

    var update = function(project) {
        projectService.update(project).success(function(data) {
            showAlert('Success', 'Item updated successfully');
            $location.path('projects');
        }).error(function(data, status) {
            showAlert('Error', 'Unable to update item');
        });
    };

    $scope.remove = function(obj) {
        var confirm = $mdDialog.confirm()
          .textContent('Are you sure to delete this item?')
          .ok('Yes')
          .cancel('No');

        $mdDialog.show(confirm).then(function() {
            projectService.remove(obj).success(function(data, status) {
                showAlert('Success', 'Item removed successfully');
                $location.path('projects');
            }).error(function(data, status, headers, config) {
                showAlert('Error', 'Unable to remove item');
            });
        });
    };

    $scope.save = function(project) {
        if ($route.current.params.id) {
            update(project);
        } else {
            insert(project);
        }
    };

    var showConfirm = function(ev) {
        var confirm = $mdDialog.confirm()
              .title('Message')
              .textContent('Item added successfully')
              .ok('Ok')
              .cancel('Add another one');

        $mdDialog.show(confirm).then(function() {
            $location.path('projects');
        }, function() {
            $scope.project = null;
            $scope.form.$setPristine();
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
