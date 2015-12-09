var app = angular.module("FinterestScript", ["firebase", "ngRoute"]);
  
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'SearchCtrl'
      })
      .when('/:user', {
        templateUrl: 'partials/user-boards.html',
        controller: 'UserBoardsCtrl'
      })
      // .when()
      .otherwise("/");
}]);