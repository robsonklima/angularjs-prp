app.factory("riskCategoryService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'risk-categories/',
            method: 'GET'
        });
    }

    return {
        find: _find
    };
});
