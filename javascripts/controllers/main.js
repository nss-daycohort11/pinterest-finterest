app.controller("MainPinCtrl", ["$q", "$http", "$scope",
  function($q, $http, $scope) {
    console.log("thispagehasloaded");
    var poop = flickr.photos.search();
      console.log("this stuff here", poop);


  }]);