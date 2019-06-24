const createDog = require('./create-dog');

describe('create dog function', () => {
  it('returns dog object using process.argv', () => {
    const dog = createDog('Danny', '22', '180');
    expect(dog).toEqual({
      name: 'Danny',
      age: '22',
      weight: '180'
    });
  });
});
