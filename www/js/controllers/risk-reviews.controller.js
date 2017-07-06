app.controller("riskReviewsCtrl", function($scope, $rootScope, messages,
  riskIdentificationService){
    var userId = $rootScope.globals.currentUser.userId;

    var findRiskIdentifications = function() {
        riskIdentificationService.findByUserId(userId).success(function(data, status) {
            $scope.riskIdentifications = data.riskIdentifications;
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    findRiskIdentifications();
});
