import lodash = require('../../src/util/lodash');
import _ = require('lodash');
let assert = require('power-assert');

describe('lodash', () => {

    describe('sample()', () => {
        it('should add return [2,3]', () => {
            let result = lodash.sample();
            assert(result, [1,3]);
        });
    });
});