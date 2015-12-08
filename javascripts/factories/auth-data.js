app.factory("auth-data", function() {
  var storage1 = '';
  var storage2 = '';
  

  return {

  setUid: function(value) {
    storage1 = value;
    console.log("UID set :", storage1);
    return storage1;

  },
  getUid: function() {
    console.log("UID got :", storage1);
    return storage1;
  },
  setName: function(value) {
      storage2 = value;
      console.log("Name set :", storage2);
      return storage2;
    },
  getName: function() {
    console.log("Name got :", storage2);
    return storage2;
  }
}

});