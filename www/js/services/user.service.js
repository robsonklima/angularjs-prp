app.factory("userService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'users/',
            method: 'GET'
        });
    }

    var _findById = function(userId) {
        return $http({
            url: config.apiUrl + 'users/' + userId,
            method: 'GET'
        });
    }

    var _insert = function(user) {
        return $http({
            url: config.apiUrl + 'users/',
            method: 'POST',
            data: user
        });
    }

    var _update = function(user) {
        return $http({
           url: config.apiUrl + 'users/' + user.userId,
           method: 'PUT',
           data: user
        })
    }

    var _remove = function(user) {
        return $http({
           url: config.apiUrl + 'users/' + user.userId,
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
