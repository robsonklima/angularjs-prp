app.factory("riskReviewService", function($http, config) {

    var _findByUserId = function(userId) {
        return $http({
            url: config.apiUrl + 'risk-reviews/' + userId,
            method: 'GET'
        });
    }

    var _insert = function(riskReview) {
        return $http({
            url: config.apiUrl + 'risk-reviews/',
            method: 'POST',
            data: riskReview
        });
    }

    return {
        findByUserId: _findByUserId,
        insert: _insert
    };
});
