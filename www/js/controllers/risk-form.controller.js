app.controller("riskFormCtrl", function($scope, $route, $location, $mdDialog,
    messages, riskService, riskTypeService, riskCategoryService){

    var findById = function() {
        riskService.findById($route.current.params.id).success(function(data, status) {
            $scope.risk = data.risk[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find risk');
        });
    };

    if ($route.current.params.id) {
        $scope.pageTitle = 'Edit risk';
        findById();
    } else {
        $scope.pageTitle = 'New risk';
    }

    var findRiskTypes = function() {
        riskTypeService.find().success(function(data, status) {
            $scope.risk_types = data.risk_types;
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    var findRiskCategories = function() {
        riskCategoryService.find().success(function(data, status) {
            $scope.risk_categories = data.risk_categories;
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
        if ($route.current.params.id) {
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
