function WarmUp() {};

/*
 * bumpVersion
 * Adds 1 to the given version
 *
 * Input:
 *   version: The version that needs to be bumped
 *
 * Return:
 *   The given version incremented by 1
 *
 */

WarmUp.prototype.bumpVersion = function(version) {
  /* Implement Me! */

  var version = version;
  // Increment version by 1
  var newVersion = version + 1;
  return newVersion; // Return incremented version
};


/*
 * stringLength
 * Returns the number of characters in the given string.
 *
 * Input:
 *   text: The string being measured
 *
 * Return:
 *   The length of the string
 *
 */
WarmUp.prototype.stringLength = function(text) {
  /* Implement Me! */
};


/*
 * currentDate
 * returns a new Date object
 *
 * Return:
 *   new Date()
 *
 */
WarmUp.prototype.currentDate = function() {
  /* Implement Me! */
};


module.exports = WarmUp;
