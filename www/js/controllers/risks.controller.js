app.controller("risksCtrl", function($scope, $rootScope, messages, riskService){

    var find = function() {
        riskService.find().success(function(data, status) {
          $scope.risks = data.risks;
        }).error(function(data, status) {
          $scope.error = messages.unableToFetchItens;
        });
    };

    find();
});
