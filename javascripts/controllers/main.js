app.controller("MainPinCtrl", ["$scope", "$firebaseArray", "search-factory", "auth-data", "$firebaseObject", function($scope, $firebaseArray,  searchFactory, authData, $firebaseObject){

	// var ref = new Firebase("https://pinterestfinterest.firebaseio.com/");
  // $scope.pinCollection = $firebaseObject(ref.child('user_database').child(authData.getUid()));
// console.log("pin collection", pinCollection );

  
//names the pins we download from the 
//need to drill down to the pins
  // console.log("userRef", userRef );

  // $scope.pins = $firebaseArray(userRef);


// 	// console.log("$scope.pins :", $scope.pins);
	



	// $scope.killPin = function(pin) {
	// 	$scope.pins.$remove(pin);
	// };


  $scope.status = {
    isopen: false
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  $scope.showInput = function(context) {
    console.log("click");
    context.showBoolean = false;
  };

  $scope.saveData = function(photo) {
    console.log("click");
    console.log(photo);
    photo.caption = photo.caption;
    photo.cat = photo.cat;
    $scope.pins.$save(photo);
    photo.showBoolean = true;
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };



  
}]);
