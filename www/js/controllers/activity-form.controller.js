app.controller("activityFormCtrl", function($scope, $route, $location, $mdDialog,
    messages, activityService, projectService, userService){
    var activityId = $route.current.params.activityId;

    var findById = function() {
        activityService.findById(activityId).success(function(data, status) {
            $scope.activity = data[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find activity');
        });
    };

    if (activityId) {
        $scope.pageTitle = 'Edit activity';
        findById();
    } else {
        $scope.pageTitle = 'New activity';
    }

    var findUsers = function() {
        userService.find().success(function(data, status) {
            $scope.users = data;
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    var findProjects = function() {
        projectService.find().success(function(data, status) {
            $scope.projects = data;
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    var insert = function(activity) {
        activityService.insert(activity).success(function(data) {
            showAlert('Message', 'Activity addded successfully');
            $location.path('activities');
        }).error(function(data, status) {
            showAlert('Error', 'Unable to insert activity');
        });
    };

    var update = function(activity) {
        activityService.update(activity).success(function(data) {
            showAlert('Success', 'Activity updated successfully');
            $location.path('activities');
        }).error(function(data, status) {
            showAlert('Error', 'Unable to update activity');
        });
    };

    $scope.save = function(activity) {
        if (activityId) {
            update(activity);
        } else {
            insert(activity);
        }
    };

    $scope.remove = function(activity) {
        var confirm = $mdDialog.confirm()
          .title("Please confirm")
          .textContent('Are you sure to delete this activity?')
          .ok('Yes')
          .cancel('No');

        $mdDialog.show(confirm).then(function() {
            activityService.remove(activity).success(function(data, status) {
                showAlert('Success', 'Activity removed successfully');
                $location.path('activities');
            }).error(function(data, status, headers, config) {
                showAlert('Error', 'Unable to remove activity');
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

    findProjects();
    findUsers();

});
