app.controller("homeCtrl", function($scope, $rootScope){
    $rootScope.showSideNav = true;

    $scope.user = $rootScope.globals.currentUser;
});
