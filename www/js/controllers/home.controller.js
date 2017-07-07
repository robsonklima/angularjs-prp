app.controller("homeCtrl", function($scope, $rootScope, $http, $cookieStore, $timeout){
    $rootScope.showSideNav = true;
    $scope.user = $rootScope.globals.currentUser;

    console.log($rootScope.globals.authdata);

    $timeout(function () {
        $scope.showSpeedDial = true;
    }, 10);

    $scope.speedDialOpen = false;
    $scope.$watch('speedDialOpen', function(isOpen) {
      if (isOpen) {
        $timeout(function() {
          $scope.tooltipVisible = $scope.speedDialOpen;
        }, 600);
      } else {
          $scope.tooltipVisible = $scope.speedDialOpen;
      }
    });
});
