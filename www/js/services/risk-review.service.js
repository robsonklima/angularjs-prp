app.factory("riskReviewService", function($http, config) {

    var _findByUserId = function(userId) {
        return $http({
            url: config.apiUrl + 'risk-reviews/' + userId,
            method: 'GET'
        });
    }

    return {
        findByUserId: _findByUserId
    };
});
