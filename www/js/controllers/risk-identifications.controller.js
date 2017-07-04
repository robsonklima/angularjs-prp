app.controller("riskIdentificationsCtrl", function($scope, $rootScope, messages,
  riskService){
    var findRisks = function() {
        riskService.find().success(function(data, status) {
            $scope.risks = data.risks;
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    findRisks();
});
