/**
 * Imports
 */

var setProto = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should set prototype', function (t) {
  var obj = {}
  var proto = {next: function () {
    return 'next'
  }}
  setProto(proto, obj)
  t.equal(obj.next(), 'next')
  t.end()
})
