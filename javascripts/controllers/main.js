app.controller("MainPinCtrl", ["getStorage", "$q", "$http", "$scope",
  function(getStorage, $q, $http, $scope) {
    console.log("thispagehasloaded");

    $scope.setTerm = function () {
      getStorage.addTerm($scope.searchTerm);
      // console.log("hello?", setTerm);
    };


  }]);