app.controller("riskIdentificationFormCtrl", function($scope, $route, $rootScope,
  $location, $mdDialog, riskService, riskIdentificationService){
    var userId = $rootScope.globals.currentUser.userId;

    var riskId = $route.current.params.riskId;

    var findRiskById = function() {
        riskService.findById(riskId).success(function(data, status) {
            $scope.risk = data.risk[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find risk');
            $location.path('risk-identifications');
        });
    };

    var findProjects = function() {
        riskIdentificationService.findProjects(userId, riskId)
          .success(function(data, status) {
            $scope.projects = data.projects;

            angular.forEach($scope.projects, function(value, i) {
                if ($scope.projects[i].riskIdentificationId)
                    $scope.projects[i].selected = true;
            }, $scope.projects);
        }).error(function(data, status) {
            $scope.error = 'Unable to fetch projects';
        });
    };

    var findActivities = function() {
        riskIdentificationService.findActivities(userId, riskId)
          .success(function(data, status) {
            $scope.activities = data.activities;

            angular.forEach($scope.activities, function(value, i) {
                if ($scope.activities[i].riskIdentificationId)
                    $scope.activities[i].selected = true;
            }, $scope.activities);
        }).error(function(data, status) {
            $scope.error = 'Unable to fetch activities';
        });
    };

    var insertRiskIdentification = function(riskIdentification) {
        riskIdentificationService.insert(riskIdentification).success(function(data) {
            findProjects();
            findActivities();
        }).error(function(data, status) {
            showAlert('Error', 'Unable to register risk identification');
            findProjects();
            findActivities();
        });
    };

    var removeRiskIdentification = function(id) {
        riskIdentificationService.remove(id).success(function(data) {

        }).error(function(data, status) {
            showAlert('Error', 'Unable to remove risk identification');
            findProjects();
            findActivities();
        });
    };

    $scope.onProjectChange = function(obj) {
    	  if (obj.selected)
            insertRiskIdentification({
                riskId: riskId,
                userId: userId,
                projectId: obj.projectId
            });
        else
            removeRiskIdentification(obj.riskIdentificationId);
    };

    $scope.onActivityChange = function(obj) {
        if (obj.selected)
            insertRiskIdentification({
                riskId: riskId,
                userId: userId,
                activityId: obj.activityId
            });
        else
            removeRiskIdentification(obj.riskIdentificationId);
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

    findRiskById();
    findProjects();
    findActivities();
});
