app.factory("riskReviewService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'risk-reviews/',
            method: 'GET'
        });
    }

    return {
        find: _find
    };
});
