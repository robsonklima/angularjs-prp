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
    $routeProvider.when("/project-form/:project_id", {
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
    $routeProvider.when("/activity-form/:activity_id", {
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
    $routeProvider.when("/risk-form/:risk_id", {
       templateUrl: "views/risk-form.html",
       controller: "riskFormCtrl"
    });
    $routeProvider.when("/risk-identifications", {
       templateUrl: "views/risk-identifications.html",
       controller: "riskIdentificationsCtrl"
    });
    $routeProvider.when("/risk-identification-form/:risk_id", {
       templateUrl: "views/risk-identification-form.html",
       controller: "riskIdentificationFormCtrl"
    });
    $routeProvider.when("/risk-problems", {
       templateUrl: "views/risk-problems.html",
       controller: "riskProblemsCtrl"
    });
    $routeProvider.when("/risk-problem-form/:risk_id", {
       templateUrl: "views/risk-problem-form.html",
       controller: "riskProblemFormCtrl"
    });
    $routeProvider.when("/risk-reviews", {
       templateUrl: "views/risk-reviews.html",
       controller: "riskReviewsCtrl"
    });
    $routeProvider.when("/risk-review-form/:risk_identification_id", {
       templateUrl: "views/risk-review-form.html",
       controller: "riskReviewFormCtrl"
    });

    // Error
    $routeProvider.when("/error", {
       templateUrl: "views/error.html"
    });

    // Redirect
    $routeProvider.otherwise({redirectTo: "/error"});
});
