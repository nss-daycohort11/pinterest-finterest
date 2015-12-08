app.controller("SearchCtrl", ["$q", "$http", "$scope", "search-factory", "auth-data",

  function($q, $http, $scope, searchFactory, authDataStorage) {


  //////////////////// User Adding Pin Functionality //////////////////////

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
      // image: object.images[0].url,
      // caption: object.images[0].title,
      html: object.html
    };
    console.log("userPin", userPin);
    return userPin;

  }

  function storePin(object) {
    console.log("object", object);

    var userId = authDataStorage.getUid();
    var userRef = new Firebase("https://pinterestfinterest.firebaseio.com/user_database/" + userId + "/");
    userRef.push(object.url);

    var pinRef = new Firebase("https://pinterestfinterest.firebaseio.com/pin_database/");
    pinRef.push(object);
  }

  // function triggered from partials/main.html
  $scope.acquire_article = function() {

    // Setting up the call for our diffbot to extract relevant information; returns promise state
    var webScraper = $q(function(resolve, reject) {
     $http.get("http://api.diffbot.com/v3/article?token=1d13be5cf6b5835e97fd6a89ad11640c&url=" + $scope.user_provided_url)       
       .success(
         function(objectFromDiffbot) {
           resolve(objectFromDiffbot);
         },function(error) {
           reject(error);
         }
       );  
    }); // end of Q

    // Listen for promise and handle information
    webScraper
      .then(
        function(diffbotResult) {


          console.log("amIa suer", authDataStorage.getUid());

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


}]); // closes module
