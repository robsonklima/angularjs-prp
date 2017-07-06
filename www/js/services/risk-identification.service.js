app.factory("riskIdentificationService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'risk-identifications/',
            method: 'GET'
        });
    }

    var _findById = function(riskIdentificationId) {
        return $http({
            url: config.apiUrl + 'risk-identifications/' + riskIdentificationId,
            method: 'GET'
        });
    }

    var _findByUserId = function(userId) {
        return $http({
            url: config.apiUrl + 'risk-identifications/' + userId,
            method: 'GET'
        });
    }

    var _findProjects = function(userId, riskId) {
        return $http({
            url: config.apiUrl + 'risk-identifications/projects/'
              + userId + "/" + riskId,
            method: 'GET'
        });
    }

    var _findActivities = function(userId, riskId) {
        return $http({
            url: config.apiUrl + 'risk-identifications/activities/'
              + userId + "/" + riskId,
            method: 'GET'
        });
    }

    var _insert = function(riskIdentification) {
        return $http({
            url: config.apiUrl + 'risk-identifications/',
            method: 'POST',
            data: riskIdentification
        });
    }

    var _update = function(riskIdentification) {
        return $http({
           url: config.apiUrl + 'risk-identifications/'
              + risk-identification.id,
           method: 'PUT',
           data: riskIdentification
        })
    }

    var _remove = function(riskIdentificationId) {
        return $http({
           url: config.apiUrl + 'risk-identifications/'
              + riskIdentificationId,
           method: 'DELETE'
        });
    }

    return {
        find: _find,
        findById: _findById,
        findByUserId: _findByUserId,
        findProjects: _findProjects,
        findActivities: _findActivities,
        insert: _insert,
        update: _update,
        remove: _remove
    };
});
