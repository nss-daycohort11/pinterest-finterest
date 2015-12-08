app.controller("SearchCtrl", ["$q", "$http", "$scope",
  function($q, $http, $scope) {
    
  (function() {
    $scope.photos = [];
    var url = getStorage.getTerm();
    console.log("url", url);
    if (url === "" || url === undefined) {
      console.log(url);
    } else {
      getPics.getPics(url).then(
        function(data) {
          var photos = data.photos.photo;
          photos = photos.filter(function(obj) {
              return (obj.url_o !== undefined);
          });
          for (var key in photos) {
            $scope.photos.push(photos[key]);
          }
        }
      );
    }
  }());

    

       var getPhotos = $q(function(resolve, reject) {
         $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=43bea15728db44fd9518bfe94f8527bb&format=json&nojsoncallback=1&text=' + getSearch() + '&extras=url_o')        
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
          var photoImage = allPhotos[25].url_o;
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

