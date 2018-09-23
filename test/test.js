'use strict';

var expect = require('chai').expect;
var numFormatter = require('../index');

describe('#numFormatter', function() {
    it('should convert single digits', function() {
        var result = '1'.getBanglaNumber();
        expect(result).to.equal('১');
    });
    it('should convert two digits', function() {
        var result = '12'.getBanglaNumber();
        expect(result).to.equal('১২');
    });

});
