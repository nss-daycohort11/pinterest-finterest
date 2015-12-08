app.controller("MainPinCtrl", ["$scope", "$firebaseArray", "search-factory", "auth-data", function($scope, $firebaseArray,  searchFactory, authData){
	var userRef = new Firebase("https://group-pinterest.firebaseio.com/users/" + authData.getUid +"/");

  
//names the pins we download from the 
//need to drill down to the pins
  console.log("userRef", userRef );

    $scope.setTerm = function () {
      getStorage.addTerm($scope.searchTerm);
      // console.log("hello?", setTerm);
    };

  $scope.pins = $firebaseArray(userRef);

	// console.log("$scope.pins :", $scope.pins);
	
	$scope.setTerm = function () {
		searchFactory.setSearch($scope.searchTerm);
	};

	$scope.killPin = function(pin) {
		$scope.pins.$remove(pin);
	};


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
