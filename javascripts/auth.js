app.controller("AuthCtrl", 


  ["$scope","$firebaseAuth", "$firebaseArray", "auth-data", "$location", function($scope, $firebaseAuth, $firebaseArray, authDataStorage, $location) {

  

  
  var ref = new Firebase("https://pinterestfinterest.firebaseio.com");
  // create an instance of the authentication service
  
  var auth = $firebaseAuth(ref);
  // login with Facebook

  
  

  auth.$authWithOAuthPopup("facebook").then(function(authData) {
  console.log("auth succeded. payload:", authData.facebook.displayName );
  // set 
  authDataStorage.setUid(authData.uid);
  authDataStorage.setName(authData.facebook.displayName)

  

  var userId = authDataStorage.getUid();
  console.log("userId", userId);
  var ref = new Firebase("https://pinterestfinterest.firebaseio.com/users/"+userId+"/");
    $scope.pins = $firebaseArray(ref);
    console.log("scope.pins", $scope.pins );

    
  
    $location.path('/')


  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
}]);