app.factory("riskService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'risks/',
            method: 'GET'
        });
    }

    var _findById = function(id) {
        return $http({
            url: config.apiUrl + 'risks/' + id,
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
           url: config.apiUrl + 'risks/' + risk.id,
           method: 'PUT',
           data: risk
        })
    }

    var _remove = function(risk) {
        return $http({
           url: config.apiUrl + 'risks/' + risk.id,
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
