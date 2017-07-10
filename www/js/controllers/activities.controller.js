app.controller("activitiesCtrl", function($scope, $rootScope, messages, activityService){
    var find = function() {
        activityService.find().success(function(data, status) {
          $scope.activities = data;
        }).error(function(data, status) {});
    };

    find();
});
