app.factory("loginService", function($http, $rootScope, $cookieStore, config) {

    var _login = function(user) {
        return $http({
           url: config.apiUrl + 'users/login',
           method: 'POST',
           data: user
        });
    }

    var _setCredentials = function (user) {
        $rootScope.globals = { currentUser: user };
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + user.userToken;
        $cookieStore.put('globals', $rootScope.globals);
    };

    var _clearCredentials = function () {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        $http.defaults.headers.common.Authorization = 'Bearer ';
    };

    return {
        login: _login,
        setCredentials: _setCredentials,
        clearCredentials: _clearCredentials
    };

});
