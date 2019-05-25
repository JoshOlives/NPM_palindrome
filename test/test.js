//could add more tests but they're mind numbing

let assert = require("assert");
//does it also export the String modification reverse function??
let Phrase = require("../index.js");

describe("Phrase", function() {
    describe("#palindrome", function(){
        
        it("should return false for non-palindrome", function(){
            let not = new Phrase("appel");
            assert(!not.palindrome());
        });
        
        it("should return true for simple palindrome", function(){
            let palindrome = new Phrase("racecar");
            assert(palindrome.palindrome());
        });
        
        it("for mixed-case palindrome", function(){
            let mixed = new Phrase("RaceCar");
            assert(mixed.palindrome());
        });
        
        it("for mixed-case palindrome when sensitive", function(){
            let mixed = new Phrase("RaceCar");
            assert(!mixed.palindrome(false,undefined));
        });
        
        it("for palindrome with punctuation", function(){
            let punctuation = new Phrase("Mad-am, I’m Adam.");
            assert(punctuation.palindrome(undefined,true));
        });
        
        describe("#letters", function() {
            it("should ignore punctution", function() {
                assert.strictEqual( new Phrase("Mad-am, I’m Adam.").letters(), "MadamImAdam");
            });
        });
    });
})