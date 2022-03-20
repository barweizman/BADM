const expect = require('chai').expect;

describe('Array' , () => {
    describe('#sort', () => {
        it('should sort the array by name',() => {
            var names = ['Bar','Alice','Maayan','David'];
            expect(names.sort()).to.be.eql(['Alice','Bar','David','Maayan']);
        });
    });
});
