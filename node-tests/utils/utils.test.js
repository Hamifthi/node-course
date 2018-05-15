const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    let result = utils.add(6, 4)

    expect(result).toBe(10).toBeA('number')
});

it('should square the number', () => {
    let result = utils.square(5)

    expect(result).toBe(25).toBeA('number')
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
    var user = {location: 'Karaj', age: 21};
    var res = utils.setName(user, 'Hamed Fathi');
  
    expect(res).toInclude({
      firstName: 'Hamed',
      lastName: 'Fathi'
    });
  });
  
  // it('should expect some values', () => {
  //   // expect(12).toNotBe(12);
  //   // expect({name: 'hamed'}).toNotEqual({name: 'Hamed'});
  //   // expect([2,3,4]).toExclude(1);
  //   expect({
  //     name: 'Hamed',
  //     age: 21,
  //     location: 'Karaj'
  //   }).toExclude({
  //     age: 23
  //   })
  // });

it('should async add two numbers', (done) => {
    utils.asyncAdd(40, 50, (sum) => {
        expect(sum).toBe(90).toBeA('number');
        done();
      });
});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (res) => {
    expect(res).toBe(25).toBeA('number');
    done();
  });
});