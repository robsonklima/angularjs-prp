app.factory("activityService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'activities/',
            method: 'GET'
        });
    }

    var _findById = function(id) {
        return $http({
            url: config.apiUrl + 'activities/' + id,
            method: 'GET'
        });
    }

    var _insert = function(activity) {
        return $http({
            url: config.apiUrl + 'activities/',
            method: 'POST',
            data: activity
        });
    }

    var _update = function(activity) {
        return $http({
           url: config.apiUrl + 'activities/' + activity.id,
           method: 'PUT',
           data: activity
        })
    }

    var _remove = function(activity) {
        return $http({
           url: config.apiUrl + 'activities/' + activity.id,
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
