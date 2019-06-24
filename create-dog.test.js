const createDog = require('./create-dog');

describe('create dog function', () => {
  it('returns dog object from function', () => {
    const dog = createDog('Danny', '22', '180lbs');
    expect(dog).toEqual({
      name: 'Danny',
      age: '22',
      weight: '180lbs'
    });
  });
});
