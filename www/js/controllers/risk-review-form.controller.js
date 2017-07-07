app.controller("riskReviewFormCtrl", function($scope, $route, $rootScope, $mdDialog, $location,
  riskService, riskReviewService, riskReviewReferenceService){
    var riskId = $route.current.params.riskId;
    var riskIdentificationId = $route.current.params.riskIdentificationId;
    var userId = $rootScope.globals.currentUser.userId;

    $scope.tabsConfig = { index: 0 };

    $scope.moveTab = function() {
        $scope.tabsConfig.index = Math.min($scope.tabsConfig.index + 1, 5);
    };

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

    var insert = function(riskReview) {
        riskReviewService.insert(riskReview).success(function(data) {
            showAlert('Message', 'Risk Review addded successfully');
            $location.path('risk-reviews');
        }).error(function(data, status) {
            showAlert('Error', 'Unable to insert Risk Review');
        });
    };

    $scope.save = function(riskReview) {
        riskReview.userId = userId;
        riskReview.riskIdentificationId = riskIdentificationId;

        insert(riskReview);
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

    findRiskById();
    findRiskReviewReferences();
});
