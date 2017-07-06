app.factory("riskReviewService", function($http, config) {

    var _findByUserId = function(user_id) {
        return $http({
            url: config.apiUrl + 'risk-reviews/' + user_id,
            method: 'GET'
        });
    }

    return {
        findByUserId: _findByUserId
    };
});
