app.factory("riskTypeService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'risk-types/',
            method: 'GET'
        });
    }

    return {
        find: _find
    };
});
