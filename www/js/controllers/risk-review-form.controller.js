app.controller("riskReviewFormCtrl", function($scope, $route, $rootScope,
  riskService, riskReviewService){
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
});
