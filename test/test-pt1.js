// initial set up
// currently doing nothin in web page

// test if in browser or node
// cf. https://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser
// var isNode=new Function('try {return this===global;}catch(e){ return false;}');

// common variables for both environments
let fns = require('../Problems/01-functions-and-variables.js'),
    ocl = require('../Problems/02-objects-tests-loops.js');

// fns = require('../Problems/01-solution.js'),
// ocl = require('../Problems/02-solution.js');

var chai=require('chai'),
    assert=chai.assert,
    expect=chai.expect;

// quick helper functions (cf https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


//////////////////////////////////////
///
///   tests start here
///
//////////////////////////////////////

describe('Part 1 Tests', function() {

  describe('01: Variables and Functions', function() {
    it('function "hello" should return "Hello!"', function() {
      assert.equal(fns.hello(), 'Hello!',
        'Check to make sure you are returning the right string.');
    });
    it('function "greeting("Ms. Atwood")" should return "Hello, Ms. Atwood.', function() {
      assert.equal(fns.greeting('Ms. Atwood'), 'Hello, Ms. Atwood!',
        'Check to make sure you have combined the strings and variables properly.');
    });
    it('function "returnArray" should combine three input parameters into an array.', function() {
      assert.deepEqual(fns.returnArray ('Tim', 'Horton', 'Donuts'), ['Tim', 'Horton', 'Donuts']);
    });
    it('function "splitArray" should return a sentence like "Tim Horton was a Donut."', function() {
      assert.equal(fns.splitArray (['Tim', 'Horton', 'Donut']), 'Tim Horton was a Donut.',
        'Ohh, that\'s not as delicious as I expected.');
    });

    it('function "subtract" should return the difference of the first and second parameters.', function () {
      let a=getRandomInt(1, 50),
          b=getRandomInt(1, 50),
          c=a-b;
      
      assert.equal(fns.subtract(a,b), c); 
    });

    it('function "carefulSubtract" should return the difference of the first and second parameters if both are numbers .', function () {
      let a=getRandomInt(1, 50),
          b=getRandomInt(1, 50),
          c=a-b;
      assert.equal(fns.carefulSubtract(a,b),c);
    });

    it('function "carefulSubtract" should check to see if a and b are numbers.', function () {
      let a='I am not a number!',
          b='I am a free person';
      assert.equal(fns.carefulSubtract(a,b), 'I can only subtract numbers.'); 
    });

    it('function "typeTester" should return different responses for different variable types.', function () {
      expect(fns.typeTester('This test passes --')).to.equal('This test passes -- yay!') &&
        expect(fns.typeTester(99)).to.equal(99*99) &&
        expect(fns.typeTester(undefined)).to.equal('Sorry, I can\'t do anything with an undefined value.') &&
        expect(fns.typeTester({name: 'none:'})).to.equal('I don\'t know how to use that kind of variable.');
    });

  });

  describe('02: objects, conditionals, loops', function() {

    it('function "returnObject" should convert a set of parameters into an object', function() {
      assert.deepEqual(ocl.returnObject ('Elijah', 'Harper', 'Canadian politician'),
        {firstName: 'Elijah', lastName: 'Harper', profession: 'Canadian politician'});
    });

    it('function "objectToSentence" should convert an object to a sentence', function() {
      let jh = {firstName : 'John', lastName : 'Hewitt', profession: 'cooper'},
          ff = {firstName: 'Frantz', lastName : 'Fanon', profession: 'psychiatrist'};

      assert.equal(ocl.objectToSentence(jh), 'John Hewitt was a cooper.' );
      assert.equal(ocl.objectToSentence(ff), 'Frantz Fanon was a psychiatrist.' );
    });

    it('function "wasWriter" should call you a writer if you ar a novelist, or not a writer if you are not.', function() {
      let writer = {firstName: 'Margaret', lastName : 'Atwood', profession: 'novelist'},
          nonWriter = {firstName : 'Anne', lastName : 'Carson', profession : 'poet'};
      assert.equal(ocl.wasWriter (writer), 'Margaret Atwood was a writer.' ,
        'novelists should be classified as writers.' );
      assert.equal(ocl.wasWriter (nonWriter), 'Anne Carson was not a writer.' ,
        'poets should be classified as non-writers.' );
    });

    it('function "stringIterator" should repeat the first (string) parameter n times (where n is the second integer parameter)', function() {
      let s = 'My eyes hurt!';
      assert.equal(ocl.stringIterator(s, 4) ,s.repeat(4) );
    });

    it('function prettyIterator should do the same with line breaks and a counter', function() {
      let result = 'Study harder!(1)\nStudy harder!(2)\nStudy harder!(3)\n';
      assert.equal(ocl.prettyIterator('Study harder!',3) ,result ,
        'if you\'re stumped, check the details. For instance: are you printing the right number?' );
    });

    it('function "computeReign" should give the length of an object' + '\'' + 's reign', function() {
      let louis = {fullName : 'Louis Riel', party : 'Métis National Committee', from : 1869, to : 1870},
          sentence = 'Louis Riel\'s reign was 1 years long.';
      assert.equal(ocl.computeReign(louis) , sentence ,
        'Check your punctuation and other details' );
    });

    it('function "sentences" should return a set of sentences, separated by line breaks.',
      function() {
        let ministers = [ {
              fullName: 'Wilfred Laurier',
              party: 'Liberal',
              from: '1896',
              to: '1911'
            }, {
              fullName: 'Robert L. Borden',
              party: 'Conservative/Unionist',
              from: '1911',
              to: '1920'
            }, {
              fullName: 'Arthur Meighen',
              party: 'Conservative',
              from: '1920',
              to: '1921'
            }, {
              fullName: 'William Lyon Mackenzie King',
              party: 'Liberal',
              from: '1921',
              to: '1926'
            }],
            solution = `Wilfred Laurier's reign was 15 years long.
Robert L. Borden's reign was 9 years long.
Arthur Meighen's reign was 1 years long.
William Lyon Mackenzie King's reign was 5 years long.
`
         ;
        assert.equal(ocl.sentences(ministers) , solution ,
          'Watch for line breaks and punctuation.' );
      });
  });

});
