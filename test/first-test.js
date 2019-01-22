var expect = require('chai').expect,
    it = require('mocha').it,
    describe = require('mocha').describe;


describe('test_suite_1', function(){
    it('expects true to equal true', function(){
        expect(true).to.equals(true);
    });
});
