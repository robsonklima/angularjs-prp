app.factory("activityService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'activities/',
            method: 'GET'
        });
    }

    var _findById = function(activity_id) {
        return $http({
            url: config.apiUrl + 'activities/' + activity_id,
            method: 'GET'
        });
    }

    var _findByUserWithRiskIdent = function(user_id) {
        return $http({
            url: config.apiUrl + 'activities/with-risk-identifications/' + user_id,
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
           url: config.apiUrl + 'activities/' + activity.activity_id,
           method: 'PUT',
           data: activity
        })
    }

    var _remove = function(activity) {
        return $http({
           url: config.apiUrl + 'activities/' + activity.activity_id,
           method: 'DELETE'
        });
    }

    return {
        find: _find,
        findById: _findById,
        findByUserWithRiskIdent: _findByUserWithRiskIdent,
        insert: _insert,
        update: _update,
        remove: _remove
    };
});
