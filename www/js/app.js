var app = angular.module("app", ["ngRoute", "ngCookies", "ngMessages", "ngMaterial"])
  .run(['$rootScope', '$cookieStore', '$location', '$http', '$interval',
    function ($rootScope, $cookieStore, $location, $http, $interval) {

    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Bearer ' 
            + $rootScope.globals.currentUser.userToken;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
            $location.path('/login');
        }
    });

    // show or hide a ng-side-nav
    $rootScope.$on('$routeChangeSuccess', function(event, current) {
        $rootScope.showSideNav = false;
    });
}]);