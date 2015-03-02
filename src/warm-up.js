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
  return version + 1;
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
  if(!text) return 0;
  return text.length;
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
  return new Date();
};

module.exports = WarmUp;
