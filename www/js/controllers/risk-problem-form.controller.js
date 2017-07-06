app.controller("riskProblemFormCtrl", function($scope, $route, $rootScope,
  $location, $mdDialog, riskService, riskProblemService){
    var user_id = $rootScope.globals.currentUser.user_id;
    var risk_id = $route.current.params.risk_id;

    var findRiskById = function() {
        riskService.findById(risk_id).success(function(data, status) {
            $scope.risk = data.risk[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find risk');
            $location.path('risk-problems');
        });
    };

    var findProjects = function() {
        riskProblemService.findProjects(user_id, risk_id)
          .success(function(data, status) {
            $scope.projects = data.projects;

            angular.forEach($scope.projects, function(value, i) {
                if ($scope.projects[i].risk_problem_id)
                    $scope.projects[i].selected = true;
            }, $scope.projects);
        }).error(function(data, status) {
            $scope.error = 'Unable to fetch projects';
        });
    };

    var findActivities = function() {
        riskProblemService.findActivities(user_id, risk_id)
          .success(function(data, status) {
            $scope.activities = data.activities;

            angular.forEach($scope.activities, function(value, i) {
                if ($scope.activities[i].risk_problem_id)
                    $scope.activities[i].selected = true;
            }, $scope.activities);
        }).error(function(data, status) {
            $scope.error = 'Unable to fetch activities';
        });
    };

    var insertRiskProblem = function(risk_problem) {
        riskProblemService.insert(risk_problem).success(function(data) {
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
                user_id: user_id,
                risk_identification_id: obj.risk_identification_id
            });
        else
            removeRiskProblem(obj.risk_problem_id);
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
