var app = angular.module("FinterestScript", ["firebase", "ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/pins', {
        templateUrl: 'partials/main.html',
        controller: 'MainPinCtrl'
      })
      // .when()
      .otherwise("/pins");

}]);