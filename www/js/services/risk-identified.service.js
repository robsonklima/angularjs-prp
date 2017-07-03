app.factory("riskIdentifiedService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'risk-identifieds/',
            method: 'GET'
        });
    }

    var _findById = function(id) {
        return $http({
            url: config.apiUrl + 'risk-identifieds/' + id,
            method: 'GET'
        });
    }

    var _insert = function(risk_identified) {
        return $http({
            url: config.apiUrl + 'risk-identifieds/',
            method: 'POST',
            data: risk_identified
        });
    }

    var _update = function(risk_identified) {
        return $http({
           url: config.apiUrl + 'risk-identifieds/' + risk_identified.id,
           method: 'PUT',
           data: risk_identified
        })
    }

    var _remove = function(risk_identified) {
        return $http({
           url: config.apiUrl + 'risk-identifieds/' + risk_identified.id,
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
