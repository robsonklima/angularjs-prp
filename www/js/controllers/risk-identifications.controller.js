app.controller("riskIdentificationsCtrl", function($scope, $rootScope, messages, riskIdentificationService){
    var findByIdUser = function() {
        riskIdentificationService.findByIdUser($rootScope.globals.currentUser.id).success(function(data, status) {
          $scope.risk_identifications = data.risk_identifications;
        }).error(function(data, status) {
          $scope.error = messages.unableToFetchItens;
        });
    };

    findByIdUser();
});
