
app.factory("getStorage", function() {
  var bucket = '';

  return {
    setSearch: function(value) {
      bucket = value;
      console.log("bucket :", bucket);
      return bucket;
    },
    getSearch: function() {
      console.log("bucket :", bucket);
      return bucket;
    }
  };
});