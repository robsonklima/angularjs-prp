app.factory("projectService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'projects/',
            method: 'GET'
        });
    }

    var _findById = function(project_id) {
        return $http({
            url: config.apiUrl + 'projects/' + project_id,
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
           url: config.apiUrl + 'projects/' + project.project_id,
           method: 'PUT',
           data: project
        })
    }

    var _remove = function(project) {
        return $http({
           url: config.apiUrl + 'projects/' + project.project_id,
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
