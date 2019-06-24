const createDog = require('./index');

// test suite
describe('dog create function', () => {

  //individual tests
  it('returns dog object', () => {
    const dog = createDog('Danny', '22', '180lbs');
    expect(dog).toEqual({
      name: 'Danny',
      age: '22',
      weight: '180lbs'
    });
  });
});
