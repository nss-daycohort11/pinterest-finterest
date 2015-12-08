app.controller("AuthCtrl", 

  ["$scope","$firebaseAuth", "$firebaseArray", "auth-data", "$location", function($scope, $firebaseAuth, $firebaseArray, authDataStorage, $location) {

  var ref = new Firebase("https://pinterestfinterest.firebaseio.com");
  // create an instance of the authentication service
  
  var auth = $firebaseAuth(ref);
  // login with Facebook

  auth.$authWithOAuthPopup("facebook").then(function(authData) {

    // set 
    authDataStorage.setUid(authData.uid);
    authDataStorage.setName(authData.facebook.displayName);

    var userId = authDataStorage.getUid();

    var ref = new Firebase("https://pinterestfinterest.firebaseio.com/user_database/" + userId + "/");
    $scope.pins = $firebaseArray(ref);

    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });







}]);