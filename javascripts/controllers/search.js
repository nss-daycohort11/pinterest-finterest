app.controller("SearchCtrl", ["$q", "$http", "$scope", "search-factory",

  function($q, $http, $scope, searchFactory) {

  //////////////////// User Adding Pin Functionality //////////////////////

  $scope.user_provided_url = "";
  $scope.user_corresponding_category = "";


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
          // specific location of results for us to use
          var infoToProcess = diffbotResult.objects[0];

          // send to process, to extract only information we're going to need
          createPin(infoToProcess);
        },
        function() {

        });


    }    

}]); // closes module
