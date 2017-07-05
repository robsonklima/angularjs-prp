app.controller("riskIdentificationFormCtrl", function($scope, $route, $rootScope,
  $location, $mdDialog, riskService, riskIdentificationService){

    var id_user = $rootScope.globals.currentUser.id;
    var id_risk = $route.current.params.id_risk;

    var findRiskById = function() {
        riskService.findById(id_risk).success(function(data, status) {
            $scope.risk = data.risk[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find risk');
            $location.path('risk-identifications');
        });
    };

    var findProjects = function() {
        riskIdentificationService.findProjects(id_user, id_risk)
          .success(function(data, status) {
            $scope.projects = data.projects;

            angular.forEach($scope.projects, function(value, i) {
                if ($scope.projects[i].risk_identification_id)
                    $scope.projects[i].selected = true;
            }, $scope.projects);
        }).error(function(data, status) {
            $scope.error = 'Unable to fetch projects';
        });
    };

    var findActivities = function() {
        riskIdentificationService.findActivities(id_user, id_risk)
          .success(function(data, status) {
            $scope.activities = data.activities;

            angular.forEach($scope.activities, function(value, i) {
                if ($scope.activities[i].risk_identification_id)
                    $scope.activities[i].selected = true;
            }, $scope.activities);
        }).error(function(data, status) {
            $scope.error = 'Unable to fetch activities';
        });
    };

    var insertRiskIdentification = function(risk_identification) {
        riskIdentificationService.insert(risk_identification).success(function(data) {
            findProjects();
            findActivities();
        }).error(function(data, status) {
            showAlert('Error', 'Unable to register risk identification');
            $location.path('risk-identifications');
        });
    };

    var removeRiskIdentification = function(id) {
        riskIdentificationService.remove(id).success(function(data) {

        }).error(function(data, status) {
            showAlert('Error', 'Unable to remove risk identification');
            $location.path('risk-identifications');
        });
    };

    $scope.onProjectChange = function(obj) {
    	  if (obj.selected)
            insertRiskIdentification({
                id_risk: id_risk,
                id_user: id_user,
                id_project: obj.id
            });
        else
            removeRiskIdentification(obj.risk_identification_id);
    };

    $scope.onActivityChange = function(obj) {
        if (obj.selected)
            insertRiskIdentification({
                id_risk: id_risk,
                id_user: id_user,
                id_activity: obj.id
            });
        else
            removeRiskIdentification(obj.risk_identification_id);
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
