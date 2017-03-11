(function() {
  'use strict';

var myApp = require('../App/library.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
	  
	  it('should return 0 for []', function () {
        expect(myApp.findMinMax([])).toEqual(0);
      });
	  
	  it('should return [-9, 23] for [-1,5,23,0,-9]', function () {
        expect(myApp.findMinMax([-1,5,23,0,-9])).toEqual([-9, 23]);
      });
	  
	  it('should return [-212, -23] for [-1,-11,-2,-212,-19]', function () {
        expect(myApp.findMinMax([-1,-11,-2,-212,-19])).toEqual([-212, -1]);
      });

      it('should return [-1, -212] for [-1,-11,-2,-212,-19]', function () {
        expect(myApp.findMinMax([1.5,-3.7,2.95,2.94,-1])).toEqual([-3.7, 2.95]);
      });

      it('should return [-1, -212] for [-1,-11,-2,-212,-19]', function () {
        expect(myApp.findMinMax([-1.5,-67,-2.95,0,-1])).toEqual([-67, 0]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [-7] for [-7, -7, -7, -7]', function () {
        expect(myApp.findMinMax([-7, -7, -7, -7])).toEqual([-7]);
      });

    });

  });


/// TEST SUITE FOR FIZZBUZZ
var myApp = require('../App/library.js');
describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(myApp.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(myApp.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(myApp.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(myApp.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(101)).toBe(101);
  });

  it("should return 0 since is not indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(0)).toBe(0);
  });

  it("should return -15 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(-15)).toBe("FizzBuzz");
  });

});



})();

