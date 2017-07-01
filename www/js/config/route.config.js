app.config(function ($routeProvider, $httpProvider) {

    // avoid browser cash
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider.when("/", {
       templateUrl: "views/login.html",
       controller: "loginCtrl"
    });

    $routeProvider.when("/login", {
       templateUrl: "views/login.html",
       controller: "loginCtrl"
    });

    $routeProvider.when("/home", {
       templateUrl: "views/home.html",
       controller: "homeCtrl"
    });
    $routeProvider.when("/projects", {
       templateUrl: "views/projects.html",
       controller: "projectsCtrl"
    });

    // Error
    $routeProvider.when("/error", {
       templateUrl: "views/error.html"
    });

    // Redirect
    $routeProvider.otherwise({redirectTo: "/error"});
});
