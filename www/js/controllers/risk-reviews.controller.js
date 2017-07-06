app.controller("riskReviewsCtrl", function($scope, $rootScope, messages,
  riskReviewService){
    var user_id = $rootScope.globals.currentUser.user_id;

    var findReviews = function() {
        riskReviewService.findByUserId(user_id).success(function(data, status) {
            $scope.risk_reviews = data.risk_reviews;
        }).error(function(data, status) {
            $scope.error = messages.unableToFetchItens;
        });
    };

    findReviews();
});
