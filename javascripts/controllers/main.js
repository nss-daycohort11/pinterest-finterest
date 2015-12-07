app.controller("MainPinCtrl", ["$q", "$http", "$scope",
  function($q, $http, $scope) {
    console.log("thispagehasloaded");

    // get userSearchTerm from somewhere

       var getPhotos = $q(function(resolve, reject) {
         $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=43bea15728db44fd9518bfe94f8527bb&format=json&nojsoncallback=1&text=' + userSearchTerm + '&extras=url_o')        
           .success(
             function(objectFromJSONFile) {
               // console.log("test", objectFromJSONFile);
               resolve(objectFromJSONFile);
             },function(error) {
               reject(error);
             }
           );  
        });
       getPhotos
        .then(function(photoData) {
          //success function
          var allPhotos = photoData.photos.photo;
          console.log("received from flickr", allPhotos);

          // if url_o exists:
          var photoImage = allPhotos[].url_o;
          console.log("photoImage", photoImage);

          // if url_o does not exist: 
          var photoImage = somethingElse;
          // then use
        },
        function() {
          //fail function
          console.log("hello failure");

        });
      

}]);