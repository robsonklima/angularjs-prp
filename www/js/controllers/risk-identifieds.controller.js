app.controller("riskIdentifiedsCtrl", function($scope, $rootScope, messages, riskIdentifiedService){
    var findByIdUser = function() {
        riskIdentifiedService.findByIdUser($rootScope.globals.currentUser.id).success(function(data, status) {
          $scope.risk_identifieds = data.risk_identifieds;
        }).error(function(data, status) {
          $scope.error = messages.unableToFetchItens;
        });
    };

    findByIdUser();
});
