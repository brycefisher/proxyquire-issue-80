var proxyquire = require('proxyquire'),
    assert = require('referee').assert;

var hello = proxyquire('../src/module-b', {
    './module-a': {
        loremIpsum: 'dolor sit amet'
    }
});

describe('called with an object', function(){
    it('should override the exported object', function(){
        var moduleA = hello();

        console.log('-------------')
        console.log('moduleA: ', JSON.stringify(moduleA, 1, 2));

        assert.defined(moduleA.loremIpsum);
        assert.equals(moduleA.hasOwnProperty('greeting'), false);
    });
});
