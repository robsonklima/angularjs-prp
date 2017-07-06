app.factory("riskService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'risks/',
            method: 'GET'
        });
    }

    var _findById = function(riskId) {
        return $http({
            url: config.apiUrl + 'risks/' + riskId,
            method: 'GET'
        });
    }

    var _insert = function(risk) {
        return $http({
            url: config.apiUrl + 'risks/',
            method: 'POST',
            data: risk
        });
    }

    var _update = function(risk) {
        return $http({
           url: config.apiUrl + 'risks/' + risk.riskId,
           method: 'PUT',
           data: risk
        })
    }

    var _remove = function(risk) {
        return $http({
           url: config.apiUrl + 'risks/' + risk.riskId,
           method: 'DELETE'
        });
    }

    return {
        find: _find,
        findById: _findById,
        insert: _insert,
        update: _update,
        remove: _remove
    };
});
