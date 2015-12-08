app.controller("MainPinCtrl", ["$scope", "$firebaseArray", "search-factory", "auth-data", function($scope, $firebaseArray,  searchFactory, authData){
	

  
    // var userId = authData.getUid();
    // console.log("userId", userId);
    // var ref = new Firebase("https://pinterestfinterest.firebaseio.com/users/"+userId+"/");
    
    // $scope.pins = $firebaseArray(ref);
    // console.log("scope.pins", $scope.pins );
  




	// console.log("$scope.pins :", $scope.pins);
	

	// $scope.setTerm = function () {
	// 	searchFactory.setSearch($scope.searchTerm);
	// };

	// $scope.killPin = function(pin) {
	// 	$scope.pins.$remove(pin);
	// };


 //  $scope.status = {
 //    isopen: false
 //  };

 //  $scope.status = {
 //    isFirstOpen: true,
 //    isFirstDisabled: false
 //  };

 //  $scope.showInput = function(context) {
 //    console.log("click");
 //    context.showBoolean = false;
 //  };

 //  $scope.saveData = function(photo) {
 //    console.log("click");
 //    console.log(photo);
 //    photo.caption = photo.caption;
 //    photo.cat = photo.cat;
 //    $scope.pins.$save(photo);
 //    photo.showBoolean = true;
 //  };

 //  $scope.toggleDropdown = function($event) {
 //    $event.preventDefault();
 //    $event.stopPropagation();
 //    $scope.status.isopen = !$scope.status.isopen;
 //  };


  
}]);