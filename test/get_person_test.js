var expect = require('chai').expect,
    it = require('mocha').it,
    chai = require('chai'),
    describe = require('mocha').describe,
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    request = require('request');

chai.should();
chai.use(sinonChai);

describe('test suite', function(){
    it('call correct url', function(){
        var spy = sinon.spy();
        sinon.stub(request, 'get').callsFake((url, callback)=>{
            var response = [{firstName: "Andrea",lastName: "Dodero",id: 43}];
            callback({}, {body:response});
        })

    });

     
})