app.factory("auth-data", function() {
  var storage = '';

  return {
    setUid: function(value) {
      bucket = value;
      console.log("UID set :", storage);
      return storage;
    },
    getUid: function() {
      console.log("UID got :", storage);
      return storage;
    }
  };
});