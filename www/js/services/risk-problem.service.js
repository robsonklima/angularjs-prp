app.factory("riskProblemService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'risk-problems/',
            method: 'GET'
        });
    }

    var _findById = function(id) {
        return $http({
            url: config.apiUrl + 'risk-problems/' + id,
            method: 'GET'
        });
    }

    var _findByIdUser = function(id_user) {
        return $http({
            url: config.apiUrl + 'risk-problems/me/' + id_user,
            method: 'GET'
        });
    }

    var _findProjects = function(id_user, id_risk) {
        return $http({
            url: config.apiUrl + 'risk-problems/projects/'
              + id_user + "/" + id_risk,
            method: 'GET'
        });
    }

    var _findActivities = function(id_user, id_risk) {
        return $http({
            url: config.apiUrl + 'risk-problems/activities/'
              + id_user + "/" + id_risk,
            method: 'GET'
        });
    }

    var _insert = function(risk_problem) {
        return $http({
            url: config.apiUrl + 'risk-problems/',
            method: 'POST',
            data: risk_problem
        });
    }

    var _update = function(risk_problem) {
        return $http({
           url: config.apiUrl + 'risk-problems/'
              + risk-identification.id,
           method: 'PUT',
           data: risk_problem
        })
    }

    var _remove = function(risk_problem_id) {
        return $http({
           url: config.apiUrl + 'risk-problems/'
              + risk_problem_id,
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
