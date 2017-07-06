app.controller("riskReviewFormCtrl", function($scope, $route, $rootScope, riskService,
  riskReviewService, riskReviewReferenceService){
    $scope.tabsConfig = { index: 0 };

    $scope.moveTab = function() {
        $scope.tabsConfig.index = Math.min($scope.tabsConfig.index + 1, 5);
    };

    var riskId = $route.current.params.riskId;

    var findRiskById = function() {
        riskService.findById(riskId).success(function(data, status) {
            $scope.risk = data.risk[0];
        }).error(function(data, status) {
            showAlert('Error', 'Unable to find risk');
            $location.path('risk-identifications');
        });
    };

    var findRiskReviewReferences = function() {
        riskReviewReferenceService.findRiskReviewReferences().success(function (data) {
            $scope.riskReviewReferences = data.riskReviewReferences;
        }).error(function (data, status) {
            $scope.error = "Unable to fetch references";
        });
    };

    findRiskById();
    findRiskReviewReferences();
});
