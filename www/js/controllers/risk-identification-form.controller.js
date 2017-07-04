app.controller("riskIdentificationFormCtrl", function($scope, $rootScope, $route, $location, $mdDialog,
    messages, projectService, activityService, riskService, riskIdentificationService){

    $scope.riskTier = false;
    $scope.riskTierTitle = 'Project Risk';

    $scope.riskTierChange = function(riskTier) {
    	   $scope.riskTier = riskTier;
         if (riskTier) {
           $scope.riskTierTitle = "Activity Risk"
         } else {
           $scope.riskTierTitle = 'Project Risk';
         }
    };

    var findById = function() {
        riskIdentificationService.findById($route.current.params.id).success(function(data, status) {
            $scope.risk_identification = data.risk_identification[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find risk identification');
        });
    };

    if ($route.current.params.id) {
        $scope.pageTitle = 'Edit identitied risk';
        findById();
    } else {
        $scope.pageTitle = 'New identitied risk';
    }

    var findRisks = function() {
        riskService.find().success(function(data, status) {
            $scope.risks = data.risks;
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    var findProjects = function() {
        projectService.find().success(function(data, status) {
            $scope.projects = data.projects;

            if ($scope.projects.length == 0)
              $scope.error = 'No projects available.';
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    var findActivities = function() {
        activityService.find().success(function(data, status) {
            $scope.activities = data.activities;

            if ($scope.activities.length == 0)
              $scope.error = 'No activities available.';
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    var insert = function(risk_identification) {
        riskIdentificationService.insert(risk_identification).success(function(data) {
            showAlert('Message', 'Risk identification added successfully');
            $location.path('risk-identifications');
        }).error(function(data, status) {
            showAlert('Error', 'Unable to insert risk identified');
        });
    };

    $scope.save = function(risk_identification) {
        if ($scope.riskTier)
            risk_identification.id_project = null;
            else
            risk_identification.id_activity = null;

        risk_identification.id_user = $rootScope.globals.currentUser.id;

        if ($route.current.params.id) {
            update(risk_identification);
        } else {
            insert(risk_identification);
        }
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
    findActivities();
    findRisks();

});
