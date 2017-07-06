app.factory("riskProblemService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'risk-problems/',
            method: 'GET'
        });
    }

    var _findById = function(riskProblemId) {
        return $http({
            url: config.apiUrl + 'risk-problems/' + riskProblemId,
            method: 'GET'
        });
    }

    var _findByIdUser = function(userId) {
        return $http({
            url: config.apiUrl + 'risk-problems/me/' + userId,
            method: 'GET'
        });
    }

    var _findProjects = function(userId, riskId) {
        return $http({
            url: config.apiUrl + 'risk-problems/projects/'
              + userId + "/" + riskId,
            method: 'GET'
        });
    }

    var _findActivities = function(userId, riskId) {
        return $http({
            url: config.apiUrl + 'risk-problems/activities/'
              + userId + "/" + riskId,
            method: 'GET'
        });
    }

    var _insert = function(riskProblem) {
        return $http({
            url: config.apiUrl + 'risk-problems/',
            method: 'POST',
            data: riskProblem
        });
    }

    var _update = function(riskProblem) {
        return $http({
           url: config.apiUrl + 'risk-problems/'
              + risk-identification.id,
           method: 'PUT',
           data: riskProblem
        })
    }

    var _remove = function(riskProblemId) {
        return $http({
           url: config.apiUrl + 'risk-problems/'
              + riskProblemId,
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
