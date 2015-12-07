
app.controller("AuthCtrl", 
  ["$scope",
  "$firebaseAuth",
  "getUid",
  function($scope, $firebaseAuth, getUid) {
    
    var toUpdateUserInfo = function(){
      var myFirebaseRef = new Firebase("https://pinterestfinterest.firebaseio.com/users/" + uid);
      // Listen for when anything changes on the "users" key
      myFirebaseRef.on("value", function(snapshot) {
        console.log("snapshot", snapshot.val());
        // Store the entire user-uid key in a local variable
        var updatedUserInfo = snapshot.val();
        console.log("updatedUserInfo", updatedUserInfo);
        return updatedUserInfo;
      });
    };

    createNewUser : function(newEmail, newPassword) {
      //Grab firebase reference
      var ref = new Firebase("https://pinterestfinterest.firebaseio.com/");
      // Run FB method with inputs
      ref.createUser({
        email    : newEmail, 
        password : newPassword
      }, function(error, authData) {
      //If the call errors, log the error.
        if (error) {
          console.log("Login Failed!", error);
        } else {
        // Otherwise, set factory variable uid with the info returned from FB
        uid = authData.uid;
        authData.email = newEmail;
        
        var url = "https://pinterestfinterest.firebaseio.com/users/" + uid;
        var ref2 = new Firebase(url);
        console.log("authData", authData);
        //Calls firebase method to create a new user in the firebase auth system.
        ref2.set(authData);
        }
      });
    },

    loginUser: function(userEmail, userPassword) {
      var ref = new Firebase("https://pinterestfinterest.firebaseio.com/");
      //Send auth Data to Firebase
      ref.authWithPassword({
        email   : userEmail,
        password: userPassword
      //If the data send errors, log the error.
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
      //If successful, set local uid variable with saved UID in Firebase
        } else {
          uid = authData.uid;

        var fbRef = new Firebase("https://pinterestfinterest.firebaseio.com/users/" + authData.uid);
        //Logs payload information following login.
        console.log("returning", uid);
        console.log("Authenticated successfully with payload:", authData);
        
        updatedUserInfo = toUpdateUserInfo();
          console.log("updatedUserInfo", updatedUserInfo);
        } 
      });
    };


        getUid.addUid(authData.uid);
  }]);
    
