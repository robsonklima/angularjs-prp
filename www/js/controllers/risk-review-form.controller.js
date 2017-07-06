app.controller("riskReviewFormCtrl", function($scope, $timeout, $route, $rootScope,
  riskService, riskReviewService, riskReviewReferenceService){
    $scope.tabsConfig = { index: 0 };
    $scope.moveTab = function() {
        $timeout(function () {
            $scope.tabsConfig.index = Math.min($scope.tabsConfig.index + 1, 5);
        }, 350);
    };

    var findRiskReviewReferences = function() {
        riskReviewReferenceService.findRiskReviewReferences().success(function (data) {
            $scope.riskReviewReferences = data.riskReviewReferences;
        }).error(function (data, status) {
            $scope.error = "Unable to fetch references";
        });
    };

    findRiskReviewReferences();
});
