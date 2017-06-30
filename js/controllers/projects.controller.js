app.controller("projectsCtrl", function($scope, $rootScope, $timeout){
    $scope.loading = true;
    $timeout(function () {
        $scope.loading = false;
    }, 1500);
});
