app.controller("riskFormCtrl", function($scope, $route, $location, $mdDialog,
  messages, riskService, riskTypeService, riskCategoryService){
    var riskId = $route.current.params.riskId;

    var findById = function() {
        riskService.findById(riskId).success(function(data, status) {
            $scope.risk = data[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find risk');
        });
    };

    if (riskId) {
        $scope.pageTitle = 'Edit risk';
        findById();
    } else {
        $scope.pageTitle = 'New risk';
    }

    var findRiskTypes = function() {
        riskTypeService.find().success(function(data, status) {
            $scope.riskTypes = data;
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    var findRiskCategories = function() {
        riskCategoryService.find().success(function(data, status) {
            $scope.riskCategories = data;
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    var insert = function(risk) {
        riskService.insert(risk).success(function(data) {
            showAlert('Message', 'risk addded successfully');
            $location.path('risks');
        }).error(function(data, status) {
            showAlert('Error', 'Unable to insert risk');
        });
    };

    var update = function(risk) {
        riskService.update(risk).success(function(data) {
            showAlert('Success', 'risk updated successfully');
            $location.path('risks');
        }).error(function(data, status) {
            showAlert('Error', 'Unable to update risk');
        });
    };

    $scope.save = function(risk) {
        if (riskId) {
            update(risk);
        } else {
            insert(risk);
        }
    };

    $scope.remove = function(risk) {
        var confirm = $mdDialog.confirm()
          .title("Please confirm")
          .textContent('Are you sure to delete this risk?')
          .ok('Yes')
          .cancel('No');

        $mdDialog.show(confirm).then(function() {
            riskService.remove(risk).success(function(data, status) {
                showAlert('Success', 'risk removed successfully');
                $location.path('risks');
            }).error(function(data, status, headers, config) {
                showAlert('Error', 'Unable to remove risk');
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

    findRiskTypes();
    findRiskCategories();

});
