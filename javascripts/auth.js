app.controller("AuthCtrl", 

  ["$q", "$http", "$scope","$firebaseAuth", "$firebaseArray", "auth-data", "$location", function($q, $http, $scope, $firebaseAuth, $firebaseArray, authDataStorage, $location) {

  var ref = new Firebase("https://pinterestfinterest.firebaseio.com");
  var pinRef = new Firebase("https://pinterestfinterest.firebaseio.com/pin_database/");

  // create an instance of the authentication service
  
  var auth = $firebaseAuth(ref);
  // login with Facebook

  auth.$authWithOAuthPopup("facebook").then(function(authData) {

    // set 
    authDataStorage.setUid(authData.uid);
    authDataStorage.setName(authData.facebook.displayName);

    var userId = authDataStorage.getUid();
    $scope.userId = authDataStorage.getUid();
    
    var ref = new Firebase("https://pinterestfinterest.firebaseio.com/user_database/" + userId + "/");
    $scope.pins = $firebaseArray(ref);
    $scope.user_name = authDataStorage.getName();

    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });


  $scope.user_provided_url = "";
  $scope.user_corresponding_category = "";




  // function to process diffbot webscraping results
  function createPin(object) {
    console.log("hellooo", object);


    // creating the shape of the object of what we're going to us
    var userPin = {
      category: $scope.user_corresponding_category, // stores user provided category
      text: object.text,
      url: object.pageUrl,
      image: object.images[0].url,
      caption: object.images[0].title,
      html: object.html
    };
    console.log("userPin", userPin);
    return userPin;

  }

  function storePin(object) {
    console.log("object", object);
    console.log("user_name", $scope.user_name);

    var userId = authDataStorage.getUid();
    var userRef = new Firebase("https://pinterestfinterest.firebaseio.com/user_database/" + userId + "/");
    userRef.push(object.url);

    pinRef.push(object);
  }

  // function triggered from partials/main.html
  $scope.acquire_article = function() {
    console.log("thensomestuff");

    // Setting up the call for our diffbot to extract relevant information; returns promise state
    var webScraper = $q(function(resolve, reject) {
     $http.get("http://api.diffbot.com/v3/article?token=1d13be5cf6b5835e97fd6a89ad11640c&url=" + $scope.user_provided_url)       
       .success(
         function(objectFromDiffbot) {
          console.log("objectFromDiffbot", objectFromDiffbot);
           resolve(objectFromDiffbot);
         },function(error) {
            console.log("error", error);
           reject(error);
         }
       );  
    }); // end of Q

    // Listen for promise and handle information
    webScraper
      .then(
        function(diffbotResult) {

          // specific location of results for us to use
          var infoToProcess = diffbotResult.objects[0];

          // send to process, to extract only information we're going to need
          var createdPin = createPin(infoToProcess);
          console.log("createdPin", createdPin);

          storePin(createdPin);
        },
        function() {

        });

    }   // close acquire_article fn
    







}]);