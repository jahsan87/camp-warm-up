chai = require('chai')
expect = chai.expect

WarmUp = require("warm-up")

# WarmUp.prototype.bumpVersion = function(version) {
# WarmUp.prototype.stringLength = function(text) {
# WarmUp.prototype.currentDate = function() {

describe "WarmUp", ->
  warmer = null;

  beforeEach ->
    warmer = new WarmUp();

  describe "#bumpVersion()", ->
    it "adds 1 to the version", ->
      version = 7
      expectedVersion = 8
      newVersion = warmer.bumpVersion(version)
      expect(newVersion).to.equal expectedVersion

  describe "#stringLength()", ->
    it "returns length of a string", ->
      text = "78787"
      expectedLength = text.length
      length = warmer.stringLength(text);
      expect(length).to.equal expectedLength

    it "returns 0 for null or undefined values", ->
      expectedLength = 0
      noLength1 = warmer.stringLength()
      noLength2 = warmer.stringLength(null)
      noLength3 = warmer.stringLength(undefined)
      noLength4 = warmer.stringLength("")
      expect(noLength1).to.equal expectedLength
      expect(noLength2).to.equal expectedLength
      expect(noLength3).to.equal expectedLength
      expect(noLength4).to.equal expectedLength

  describe "#currentDate()", ->
    it "returns the date right now", ->
      date1 = new Date()
      now = warmer.currentDate()
      date2 = new Date()
      expect(date1<=now).to.be.true
      expect(now<=date2).to.be.true


