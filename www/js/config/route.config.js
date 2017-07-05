app.config(function ($routeProvider, $httpProvider) {

    // avoid browser cash
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider.when("/", {
       templateUrl: "views/home.html",
       controller: "homeCtrl"
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
    $routeProvider.when("/project-form", {
       templateUrl: "views/project-form.html",
       controller: "projectFormCtrl"
    });
    $routeProvider.when("/project-form/:id", {
       templateUrl: "views/project-form.html",
       controller: "projectFormCtrl"
    });
    $routeProvider.when("/activities", {
       templateUrl: "views/activities.html",
       controller: "activitiesCtrl"
    });
    $routeProvider.when("/activity-form", {
       templateUrl: "views/activity-form.html",
       controller: "activityFormCtrl"
    });
    $routeProvider.when("/activity-form/:id", {
       templateUrl: "views/activity-form.html",
       controller: "activityFormCtrl"
    });
    $routeProvider.when("/risks", {
       templateUrl: "views/risks.html",
       controller: "risksCtrl"
    });
    $routeProvider.when("/risk-form", {
       templateUrl: "views/risk-form.html",
       controller: "riskFormCtrl"
    });
    $routeProvider.when("/risk-form/:id", {
       templateUrl: "views/risk-form.html",
       controller: "riskFormCtrl"
    });
    $routeProvider.when("/risk-identifications", {
       templateUrl: "views/risk-identifications.html",
       controller: "riskIdentificationsCtrl"
    });
    $routeProvider.when("/risk-identification-form/:id_risk", {
       templateUrl: "views/risk-identification-form.html",
       controller: "riskIdentificationFormCtrl"
    });
    $routeProvider.when("/risk-problems", {
       templateUrl: "views/risk-problems.html",
       controller: "riskProblemsCtrl"
    });
    $routeProvider.when("/risk-problem-form/:id_risk", {
       templateUrl: "views/risk-problem-form.html",
       controller: "riskProblemFormCtrl"
    });

    // Error
    $routeProvider.when("/error", {
       templateUrl: "views/error.html"
    });

    // Redirect
    $routeProvider.otherwise({redirectTo: "/error"});
});
