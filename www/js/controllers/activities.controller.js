app.controller("activitiesCtrl", function($scope, $rootScope, messages, activityService){

    var find = function() {
        activityService.find().success(function(data, status) {
          $scope.activities = data.activities;
        }).error(function(data, status) {
          $scope.error = messages.unableToFetchItens;
        });
    };

    find();
});
