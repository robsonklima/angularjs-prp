app.factory("activityService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'activities/',
            method: 'GET'
        });
    }

    var _findById = function(activityId) {
        return $http({
            url: config.apiUrl + 'activities/' + activityId,
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
           url: config.apiUrl + 'activities/' + activity.activityId,
           method: 'PUT',
           data: activity
        })
    }

    var _remove = function(activity) {
        return $http({
           url: config.apiUrl + 'activities/' + activity.activityId,
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
