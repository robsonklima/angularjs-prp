app.controller("riskReviewsCtrl", function($scope, $rootScope, messages,
  riskReviewService){
    var userId = $rootScope.globals.currentUser.userId;

    var findReviews = function() {
        riskReviewService.findByUserId(userId).success(function(data, status) {
            $scope.riskReviews = data.riskReviews;
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    findReviews();
});
