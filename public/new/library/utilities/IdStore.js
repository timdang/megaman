
// A function to create a random, unique number
var IdStore = function() {
  // store a private array in the closure that contains numbers we've previously generated
  var ids = [];

  // Return the length of ids
  this.getLength = function() {
    return ids.length;
  };

  // Check if an id exists in ids
  this.exists = function(id) {
    return ids.indexOf(id) !== -1 ? true : false;
  };

  // Remove a specific id
  this.remove = function(id) {
    var index = ids.indexOf(id);
    // if the id exists
    if (index !== -1) {
      // remove it
      ids.splice(index, 1);
    }
  };

  // Produce random number:
  this.create = function() {
    // I feel like multiple calls to Math.random/Math.floor could maybe be a performance issue ?
    // As such, I'm just going to turn to string and remove the "0." in the float that Math.random() returns
    var newId = Math.random().toString().substr(2);
    // check if we already have this number
    if (this.exists(newId)) {
      // if so, try again
      this.create();
    } else {
      // if not, store it...
      ids.push(newId);
      // and return it
      return newId;
    }
  };
};

module.exports = IdStore;