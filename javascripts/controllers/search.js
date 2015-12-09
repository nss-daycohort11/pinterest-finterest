app.controller("SearchCtrl", ["$q", "$http", "$scope", "search-factory", "auth-data", "$firebaseArray", "$routeParams",

  function($q, $http, $scope, searchFactory, authDataStorage, $firebaseArray, $routeParams) {

    console.log("wat");
  //////////////////// User Adding Pin Functionality //////////////////////
  var pinRef = new Firebase("https://pinterestfinterest.firebaseio.com/pin_database/");
  $scope.user = $routeParams.user;


  $scope.all_pins = $firebaseArray(pinRef);
  console.log("all_pins", $scope.all_pins);


  
  }]); // closes module
