const expect = require('expect');

const isRealString = require('./validation');

describe('isRealString', () => {
    it('should reject non-string value', () => {
        let res = isRealString(98);
        expect(res).toBe(false);
    });
    it('should reject string with only spaces', () => {
        let res = isRealString('    ');
        expect(res).toBe(false);
    });
    it('should allow string with non spaces', () => {
        let res = isRealString('hamed fathi');
        expect(res).toBe(true);
    })
})