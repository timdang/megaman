/* global describe, it */

var assert = require('assert');
var arrayEquals = require('../public/new/utilities/arrayEquals.js');
var mapUtils = require('../public/new/library/mapUtils.js');

describe('mapUtils', function() {
  describe('#processMapRow', function() {
    var line = ['X', '_', '_', '_', 'X', 'X', '_', '_', 'X', 'X', 'X', 'X', '_', '_', '_', '_', 'X' ];
    var processedLine = mapUtils.processMapRow(line);
    it('should return an object', function() {
      assert(typeof(processedLine) === 'object');
    });
    it('should return an object with the keys "coords" and "remaining"', function() {
      var keys = Object.keys(processedLine);
      assert(keys.indexOf('coords') !== -1);
      assert(keys.indexOf('remaining') !== -1);
    });
    it('should return an object with a "remaining" array that has a length as long as the old line', function() {
      assert(processedLine.remaining.length === line.length);
    });
    it('should correctly replace all "X" chains with "_"', function() {
      assert(arrayEquals(processedLine.remaining, ['X', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', 'X' ]));
    });
  });
  describe('#processMap', function() {
  });
  describe('#rotateRight', function() {
    var rotateRight = mapUtils.rotateRight;
    var map = [
      ['X', 'X', 'X', 'X', 'X'],
      ['X', '_', 'X', '_', 'X'],
      ['X', '_', 'X', '_', 'X'],
      ['X', '_', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X'],
    ];
    var rotatedRightMap = [
      ['X', 'X', 'X', 'X', 'X'],
      ['X', '_', '_', '_', 'X'],
      ['X', 'X', 'X', 'X', 'X'],
      ['X', 'X', '_', '_', 'X'],
      ['X', 'X', 'X', 'X', 'X'],
    ];
    it('should correctly rotate the map clockwise', function() {
      assert(arrayEquals(rotateRight(map), rotatedRightMap));
    });
  });
});
