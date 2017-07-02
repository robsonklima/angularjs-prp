app.controller("activitiesCtrl", function($scope, $rootScope, messages, activityService){
    $scope.loading = true;

    var find = function() {
        activityService.find().success(function(data, status) {
          $scope.activities = data.activities;
        }).error(function(data, status) {
          $scope.error = messages.unableToFetchItens;
        }).finally(function() {
            $scope.loading = false;
        });
    };

    find();
});
