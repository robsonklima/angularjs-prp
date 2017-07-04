app.controller("riskIdentifiedFormCtrl", function($scope, $rootScope, $route, $location, $mdDialog,
    messages, projectService, activityService, riskService, riskIdentifiedService){

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
        riskIdentifiedService.findById($route.current.params.id).success(function(data, status) {
            $scope.risk_identified = data.risk_identified[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find risk_identified');
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

    var findProjectsAvailableToRiskIdentifiedByUser = function() {
        activityService.findAvailableToRiskIdentifiedByUser($rootScope.globals.currentUser.id).success(function(data, status) {
            $scope.activities = data.activities;

            if ($scope.activities.length == 0)
              $scope.error = 'No activities available.';
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    var findActivitiesAvailableToRiskIdentifiedByUser = function() {
        projectService.findAvailableToRiskIdentifiedByUser($rootScope.globals.currentUser.id).success(function(data, status) {
            $scope.projects = data.projects;

            if ($scope.projects.length == 0)
              $scope.error = 'No projects available.';
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    var insert = function(risk_identified) {
        riskIdentifiedService.insert(risk_identified).success(function(data) {
            showAlert('Message', 'Risk identified added successfully');
            $location.path('risk-identifieds');
        }).error(function(data, status) {
            showAlert('Error', 'Unable to insert risk identified');
        });
    };

    var update = function(risk_identified) {
        riskIdentifiedService.update(risk_identified).success(function(data) {
            showAlert('Success', 'Risk identified updated successfully');
            $location.path('activities');
        }).error(function(data, status) {
            showAlert('Error', 'Unable to update risk_identified');
        });
    };

    $scope.save = function(risk_identified) {
        if ($scope.riskTier)
            risk_identified.id_project = null;
            else
            risk_identified.id_activity = null;

        risk_identified.id_user = $rootScope.globals.currentUser.id;

        if ($route.current.params.id) {
            update(risk_identified);
        } else {
            console.log(risk_identified)
            insert(risk_identified);
        }
    };

    $scope.remove = function(risk_identified) {
        var confirm = $mdDialog.confirm()
          .title("Please confirm")
          .textContent('Are you sure to delete this risk_identified?')
          .ok('Yes')
          .cancel('No');

        $mdDialog.show(confirm).then(function() {
            riskIdentifiedService.remove(risk_identified).success(function(data, status) {
                showAlert('Success', 'risk_identified removed successfully');
                $location.path('activities');
            }).error(function(data, status, headers, config) {
                showAlert('Error', 'Unable to remove risk_identified');
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

    findProjectsAvailableToRiskIdentifiedByUser();
    findActivitiesAvailableToRiskIdentifiedByUser();
    findRisks();

});
