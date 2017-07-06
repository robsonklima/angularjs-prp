app.factory("riskIdentificationService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'risk-identifications/',
            method: 'GET'
        });
    }

    var _findById = function(risk_identification_id) {
        return $http({
            url: config.apiUrl + 'risk-identifications/' + risk_identification_id,
            method: 'GET'
        });
    }

    var _findByIdUser = function(user_id) {
        return $http({
            url: config.apiUrl + 'risk-identifications/me/' + user_id,
            method: 'GET'
        });
    }

    var _findProjects = function(user_id, risk_id) {
        return $http({
            url: config.apiUrl + 'risk-identifications/projects/'
              + user_id + "/" + risk_id,
            method: 'GET'
        });
    }

    var _findActivities = function(user_id, risk_id) {
        return $http({
            url: config.apiUrl + 'risk-identifications/activities/'
              + user_id + "/" + risk_id,
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
           url: config.apiUrl + 'risk-identifications/'
              + risk-identification.id,
           method: 'PUT',
           data: risk_identification
        })
    }

    var _remove = function(risk_identification_id) {
        return $http({
           url: config.apiUrl + 'risk-identifications/'
              + risk_identification_id,
           method: 'DELETE'
        });
    }

    return {
        find: _find,
        findById: _findById,
        findByIdUser: _findByIdUser,
        findProjects: _findProjects,
        findActivities: _findActivities,
        insert: _insert,
        update: _update,
        remove: _remove
    };
});
