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

  var text = text;
  // Check if the value of text is null or undefined
  if (text === null || text === undefined) {
  	return 0; // Return 0 if text is null or undefined
  } else {
	// Use length property to get length of string
	var textLength = text.length;
	return textLength; // Return length of string
  }
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

  // Retrieve current time
  var today = Date.now();
  return today; // Return the date right now
};


module.exports = WarmUp;
