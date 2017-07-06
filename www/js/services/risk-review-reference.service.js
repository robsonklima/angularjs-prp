app.factory("riskReviewReferenceService", function($http, config) {

    var _findRiskReviewReferences = function() {
        return $http({
            url: config.apiUrl + 'risk-review-references/',
            method: 'GET'
        });
    }

    return {
        findRiskReviewReferences: _findRiskReviewReferences
    };
});
