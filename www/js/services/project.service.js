app.factory("projectService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'projects/',
            method: 'GET'
        });
    }

    var _findById = function(id) {
        return $http({
            url: config.apiUrl + 'projects/' + id,
            method: 'GET'
        });
    }

    var _insert = function(obj) {
        return $http({
            url: config.apiUrl + 'projects/',
            method: 'POST',
            data: obj
        });
    }

    var _update = function(obj) {
        return $http({
           url: config.apiUrl + 'projects/' + obj.id,
           method: 'PUT',
           data: obj
        })
    }

    var _remove = function(obj) {
        return $http({
           url: config.apiUrl + 'projects/' + obj.id,
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
