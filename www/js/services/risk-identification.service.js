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

    var _findProjects = function(id_user, id_risk) {
        return $http({
            url: config.apiUrl + 'risk-identifications/projects/'
              + id_user + "/" + id_risk,
            method: 'GET'
        });
    }

    var _findActivities = function(id_user, id_risk) {
        return $http({
            url: config.apiUrl + 'risk-identifications/activities/'
              + id_user + "/" + id_risk,
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
