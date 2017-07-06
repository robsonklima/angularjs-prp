app.controller("riskProblemFormCtrl", function($scope, $route, $rootScope,
  $location, $mdDialog, riskService, riskProblemService){
    var userId = $rootScope.globals.currentUser.userId;
    var riskId = $route.current.params.riskId;

    var findRiskById = function() {
        riskService.findById(riskId).success(function(data, status) {
            $scope.risk = data.risk[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find risk');
            $location.path('risk-problems');
        });
    };

    var findProjects = function() {
        riskProblemService.findProjects(userId, riskId)
          .success(function(data, status) {
            $scope.projects = data.projects;

            angular.forEach($scope.projects, function(value, i) {
                if ($scope.projects[i].riskProblemId)
                    $scope.projects[i].selected = true;
            }, $scope.projects);
        }).error(function(data, status) {
            $scope.error = 'Unable to fetch projects';
        });
    };

    var findActivities = function() {
        riskProblemService.findActivities(userId, riskId)
          .success(function(data, status) {
            $scope.activities = data.activities;

            angular.forEach($scope.activities, function(value, i) {
                if ($scope.activities[i].riskProblemId)
                    $scope.activities[i].selected = true;
            }, $scope.activities);
        }).error(function(data, status) {
            $scope.error = 'Unable to fetch activities';
        });
    };

    var insertRiskProblem = function(riskProblem) {
        riskProblemService.insert(riskProblem).success(function(data) {
            findProjects();
            findActivities();
        }).error(function(data, status) {
            showAlert('Error', 'Unable to register risk identification');
            findProjects();
            findActivities();
        });
    };

    var removeRiskProblem = function(id) {
        riskProblemService.remove(id).success(function(data) {

        }).error(function(data, status) {
            showAlert('Error', 'Unable to remove risk identification');
            findProjects();
            findActivities();
        });
    };

    $scope.onSwitchChange = function(obj) {
    	  if (obj.selected)
            insertRiskProblem({
                userId: userId,
                riskIdentificationId: obj.riskIdentificationId
            });
        else
            removeRiskProblem(obj.riskProblemId);
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
