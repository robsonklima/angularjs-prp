app.factory("riskIdentificationService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'risk-identifications/',
            method: 'GET'
        });
    }

    var _findById = function(id) {
        return $http({
            url: config.apiUrl + 'risk-identifications/' + id,
            method: 'GET'
        });
    }

    var _findByIdUser = function(id_user) {
        return $http({
            url: config.apiUrl + 'risk-identifications/me/' + id_user,
            method: 'GET'
        });
    }

    var _insert = function(risk_identification) {
        return $http({
            url: config.apiUrl + 'risk-identifications/',
            method: 'POST',
            data: risk_identification
        });
    }

    var _update = function(risk_identification) {
        return $http({
           url: config.apiUrl + 'risk-identifications/' + risk-identification.id,
           method: 'PUT',
           data: risk_identification
        })
    }

    var _remove = function(risk_dentification) {
        return $http({
           url: config.apiUrl + 'risk-identifications/' + risk-identification.id,
           method: 'DELETE'
        });
    }

    return {
        find: _find,
        findById: _findById,
        findByIdUser: _findByIdUser,
        insert: _insert,
        update: _update,
        remove: _remove
    };
});
