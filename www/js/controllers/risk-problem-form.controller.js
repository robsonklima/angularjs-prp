app.controller("riskProblemFormCtrl", function($scope, $route, $rootScope,
  $location, $mdDialog, riskService, riskProblemService){
    var id_user = $rootScope.globals.currentUser.id;
    var id_risk = $route.current.params.id_risk;

    var findRiskById = function() {
        riskService.findById(id_risk).success(function(data, status) {
            $scope.risk = data.risk[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find risk');
            $location.path('risk-problems');
        });
    };

    var findProjects = function() {
        riskProblemService.findProjects(id_user, id_risk)
          .success(function(data, status) {
            $scope.projects = data.projects;

            angular.forEach($scope.projects, function(value, i) {
                if ($scope.projects[i].id_risk_problem)
                    $scope.projects[i].selected = true;
            }, $scope.projects);
        }).error(function(data, status) {
            $scope.error = 'Unable to fetch projects';
        });
    };

    var findActivities = function() {
        riskProblemService.findActivities(id_user, id_risk)
          .success(function(data, status) {
            $scope.activities = data.activities;

            angular.forEach($scope.activities, function(value, i) {
                if ($scope.activities[i].id_risk_problem)
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
            $location.path('risk-problems');
        });
    };

    var removeRiskProblem = function(id) {
        riskProblemService.remove(id).success(function(data) {

        }).error(function(data, status) {
            showAlert('Error', 'Unable to remove risk identification');
            $location.path('risk-problems');
        });
    };

    $scope.onSwitchChange = function(obj) {
    	  if (obj.selected)
            insertRiskProblem({
                id_user: id_user,
                id_risk_identification: obj.id_risk_identification
            });
        else
            removeRiskProblem(obj.id_risk_problem);
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
