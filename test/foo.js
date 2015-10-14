var proxyquire = require('proxyquire'),
    assert = require('assert');

var realFoo = require('../src/foo');
console.log(typeof realFoo);

describe('proxyquire', function(){
    it('should replace strings on dependencies', function(){
        var foo = proxyquire('../src/foo', {
            './config': {
                featureX: 'mock value'
            }
        });

        assert.equal(foo(), 'mock value');
    });

    it('should replace strings on dependencies using the @global flag', function(){
        var foo = proxyquire('../src/foo', {
            './config': {
                featureX: 'mock value',
                '@global': true
            }
        });

        assert.equal(foo(), 'mock value');
    });
});
