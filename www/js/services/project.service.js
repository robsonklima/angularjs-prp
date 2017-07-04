app.factory("projectService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'projects/',
            method: 'GET'
        });
    }

    var _findAvailableToRiskIdentifiedByUser = function(user_id) {
        return $http({
            url: config.apiUrl + 'projects/available-to-risk-identified/' + user_id,
            method: 'GET'
        });
    }

    var _findById = function(id) {
        return $http({
            url: config.apiUrl + 'projects/' + id,
            method: 'GET'
        });
    }

    var _insert = function(project) {
        return $http({
            url: config.apiUrl + 'projects/',
            method: 'POST',
            data: project
        });
    }

    var _update = function(project) {
        return $http({
           url: config.apiUrl + 'projects/' + project.id,
           method: 'PUT',
           data: project
        })
    }

    var _remove = function(project) {
        return $http({
           url: config.apiUrl + 'projects/' + project.id,
           method: 'DELETE'
        });
    }

    return {
        find: _find,
        findById: _findById,
        findAvailableToRiskIdentifiedByUser: _findAvailableToRiskIdentifiedByUser,
        insert: _insert,
        update: _update,
        remove: _remove
    };
});
