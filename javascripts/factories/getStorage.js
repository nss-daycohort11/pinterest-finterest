app.factory("getStorage", function() {
  var storage = '';

  return {
    addTerm: function(value) {
      storage = value;
      console.log("storage :", storage);
      return storage;
    },
    getTerm: function() {
      console.log("storage :", storage);
      return storage;
    }
  };
});