app.controller("SampleCtrl", function($scope, $firebaseAuth) {
  var ref = new Firebase("https://pinterestfinterest.firebaseio.com");
  // create an instance of the authentication service
  var auth = $firebaseAuth(ref);
  // login with Facebook
  auth.$authWithOAuthPopup("facebook").then(function(authData) {
    console.log("Logged in as:", authData.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
  getUid.addUid(authData.uid);
});