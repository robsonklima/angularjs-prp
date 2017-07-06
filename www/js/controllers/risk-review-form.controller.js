app.controller("riskReviewFormCtrl", function($scope, $route, $rootScope,
  riskService, riskReviewService){

    $scope.tabsConfig = { index: 0 };
    $scope.onSwipeLeft = function(ev) {
        $scope.tabsConfig.index = Math.min($scope.tabsConfig.index + 1, 4) ;
    };

    $scope.onSwipeRight = function(ev) {
        $scope.tabsConfig.index = Math.max($scope.tabsConfig.index - 1, 0);
    };

    self.contacts = [{
      'id': 1,
      'fullName': 'Maria Guadalupe',
      'lastName': 'Guadalupe',
      'title': "CEO, Found"
    }, {
      'id': 2,
      'fullName': 'Gabriel García Marquéz',
      'lastName': 'Marquéz',
      'title': "VP Sales & Marketing"
    }, {
      'id': 3,
      'fullName': 'Miguel de Cervantes',
      'lastName': 'Cervantes',
      'title': "Manager, Operations"
    }, {
      'id': 4,
      'fullName': 'Pacorro de Castel',
      'lastName': 'Castel',
      'title': "Security"
    }];

});
