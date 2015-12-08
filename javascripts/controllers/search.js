app.controller("SearchCtrl", ["$q", "$http", "$scope", "search-factory",
  function($q, $http, $scope, searchFactory) {

  $scope.flickrSearchPhotos = [];




  var filterSearchForImages = function(searchResults) {
    // searchResults should be coming in as an array of Objects, which may/not have url_o

    var processedResults = [];

    // Tests each object in the searchResults array for whether it has url_o, if it does, makes new array
    for (var i = 0; i < searchResults.length; i++) {
      if (searchResults[i].url_o) {
        processedResults.push(searchResults[i]);
      }
    }

    // Returns array of objects
    return processedResults;

  };








  // (function() {
  //   $scope.photos = [];
  //   var url = getStorage.getTerm();
  //   console.log("url", url);
  //   if (url === "" || url === undefined) {
  //     console.log(url);
  //   } else {
  //     getPics.getPics(url).then(
  //       function(data) {
  //         var photos = data.photos.photo;
  //         photos = photos.filter(function(obj) {
  //             return (obj.url_o !== undefined);
  //         });
  //         for (var key in photos) {
  //           $scope.photos.push(photos[key]);
  //         }
  //       }
  //     );
  //   }
  // }());
  
  // Establishes variable of what user searches  
  $scope.searchTerm = "";

  // if ($scope.searchTerm !== "") {

    // On click of Search button, stores user's search term in search-factory.js and returns it back to us
    $scope.setTerm = function () {
      searchFactory.setSearch($scope.searchTerm);
    };

    // Only searching one word at a time, need to build in some processing here so that if multiple words, join with +
    var userSearch = searchFactory.getSearch();
    console.log("userSearch", userSearch);
      
    // Begins calling Flickr with specific search term 
    var getPhotos = $q(function(resolve, reject) {
     $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=43bea15728db44fd9518bfe94f8527bb&format=json&nojsoncallback=1&text=' + userSearch + '&extras=url_o')       
       .success(
         function(objectFromJSONFile) {
           // console.log("test", objectFromJSONFile);
           resolve(objectFromJSONFile);
         },function(error) {
           reject(error);
         }
       );  
    }); // end of Q
     
    getPhotos
    .then(function(photoData) {
      // Data from Flickr in an array
      var allSearchPhotos = photoData.photos.photo;


      // Send array of all photo objects (which may/may not include url_o property, which is our ideal scenario) to function that returns an array of only those w/ url_o, as well as CAPTION as workingSearchPhotos.title
      var workingSearchPhotos = filterSearchForImages(allSearchPhotos);

      $scope.flickrSearchPhotos = workingSearchPhotos;

      console.log("workingSearchPhotos", workingSearchPhotos);
    }, // closes success fn
    function() {

    }); // closes fail fn




      
  // } // closes if statement testing if search bar has a term in it
      

}]); // closes module